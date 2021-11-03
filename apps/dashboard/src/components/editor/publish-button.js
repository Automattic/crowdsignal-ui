/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { isEmpty } from 'lodash';

/**
 * Internal dependencies
 */
import { submitButtonBlock } from '@crowdsignal/block-editor';
import { STORE_NAME } from '../../data';
import { useDispatch, useSelect } from '@wordpress/data';
import { hasUnpublishedChanges } from '../../util/project';

const includesSubmitButton = ( blocks ) => {
	for ( const block of blocks ) {
		if ( block.name === submitButtonBlock.name ) {
			return true;
		}

		if (
			! isEmpty( block.innerBlocks ) &&
			includesSubmitButton( block.innerBlocks )
		) {
			return true;
		}
	}

	return false;
};

const hasMissingSubmitButtons = ( project ) => {
	for ( const page of project?.content?.draft?.pages ) {
		if ( ! includesSubmitButton( page ) ) {
			return true;
		}
	}

	return false;
};

const PublishButton = ( { projectId } ) => {
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const [ project, isSaving, isPublic ] = useSelect( ( select ) => [
		select( STORE_NAME ).getProject( projectId ),
		select( STORE_NAME ).isProjectSaving(),
		select( STORE_NAME ).isProjectPublic(),
	] );

	const publishProject = () => {
		const payload = { public: true };
		saveAndUpdateProject( projectId, {
			...project,
			content: {
				...project.content,
				public: {
					...project.content.draft,
				},
			},
			...payload,
		} );
	};

	if ( ! isPublic || hasUnpublishedChanges( project ) ) {
		return null;
	}

	// Todo: add hover popover to explain a submit button is missing

	return (
		<Button
			className="is-crowdsignal"
			variant={ isPublic ? 'tertiary' : 'primary' }
			onClick={ publishProject }
			disabled={ isSaving || hasMissingSubmitButtons( project ) }
		>
			{ isPublic
				? __( 'Update', 'dashboard' )
				: __( 'Publish', 'dashboard' ) }
		</Button>
	);
};

export default PublishButton;
