/**
 * External dependencies
 */
import { Button, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { submitButtonBlock } from '@crowdsignal/block-editor';
import { STORE_NAME } from '../../data';
import { hasUnpublishedChanges } from '../../util/project';

/**
 * Style dependencies
 */
import { PublishButtonNotice, ToolbarButton } from './styles/button';

const PublishButton = ( { projectId } ) => {
	const [ displayNotice, setDisplayNotice ] = useState( false );

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

	const toggleNotice = () => setDisplayNotice( ! displayNotice );

	const isMissingSubmitButton = currentPageSubmitButtonCount === 0;
	const disabled = isSaving || isMissingSubmitButton;

	if ( isPublic && ! hasUnpublishedChanges( project ) ) {
		return null;
	}

	return (
		<ToolbarButton
			as={ Button }
			className="is-crowdsignal"
			variant={ isPublic ? 'tertiary' : 'primary' }
			disabled={ disabled }
			onClick={ publishProject }
			onMouseEnter={ toggleNotice }
			onMouseLeave={ toggleNotice }
		>
			{ isPublic
				? __( 'Update', 'dashboard' )
				: __( 'Publish', 'dashboard' ) }

			{ displayNotice && isMissingSubmitButton && (
				<Popover noArrow={ false }>
					<PublishButtonNotice>
						{ __(
							'Please add a Submit Button to the current page in order to publish your project.',
							'dashboard'
						) }
					</PublishButtonNotice>
				</Popover>
			) }
		</ToolbarButton>
	);
};

export default PublishButton;
