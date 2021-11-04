/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { submitButtonBlock } from '@crowdsignal/block-editor';
import { STORE_NAME } from '../../data';
import { hasUnpublishedChanges } from '../../util/project';

const PublishButton = ( { projectId } ) => {
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const [
		project,
		isSaving,
		isPublic,
		currentPageSubmitButtonCount,
	] = useSelect( ( select ) => [
		select( STORE_NAME ).getProject( projectId ),
		select( STORE_NAME ).isProjectSaving(),
		select( STORE_NAME ).isProjectPublic(),
		select( 'core/block-editor' ).getGlobalBlockCount(
			submitButtonBlock.name
		),
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

	if ( isPublic && ! hasUnpublishedChanges( project ) ) {
		return null;
	}

	return (
		<Button
			className="is-crowdsignal"
			variant={ isPublic ? 'tertiary' : 'primary' }
			onClick={ publishProject }
			disabled={ isSaving || currentPageSubmitButtonCount < 1 }
		>
			{ isPublic
				? __( 'Update', 'dashboard' )
				: __( 'Publish', 'dashboard' ) }
		</Button>
	);
};

export default PublishButton;
