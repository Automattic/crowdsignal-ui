/* eslint-disable complexity */
/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { ToolbarSlot } from 'isolated-block-editor'; // eslint-disable-line import/named
import { filter } from 'lodash';

/**
 * Internal dependencies
 */
import { hasUnpublishedChanges, isPublic } from '@crowdsignal/project';
import { STORE_NAME } from '../../data';
import { NOTICE_UNPUBLISHED } from './notice';
import PublishButton from './publish-button';
import PreviewButton from './preview-button';

/**
 * Style dependencies
 */
import { ToolbarButton } from './styles/button';

const Toolbar = ( { project, onShareClick } ) => {
	const { saveEditorChanges } = useDispatch( STORE_NAME );

	const [ canRestoreDraft, isSaving, isSaved ] = useSelect( ( select ) => [
		filter( select( 'core/notices' ).getNotices(), {
			id: NOTICE_UNPUBLISHED,
		} ).length > 0,
		select( STORE_NAME ).isEditorSaving(),
		select( STORE_NAME ).isEditorContentSaved(),
	] );

	const publishProject = () => {
		if ( hasUnpublishedChanges( project ) && project.publicContent ) {
			// eslint-disable-next-line
			const confirmed = window.confirm(
				__(
					'Warning! This project was already published. Deleting or changing questions or form blocks may cause the loss of existing responses. Are you sure you want to proceed?',
					'dashboard'
				)
			);

			if ( ! confirmed ) {
				return;
			}
		}

		saveEditorChanges( { public: true } );

		if ( ! isPublic( project ) ) {
			onShareClick();
		}
	};

	const previewURL =
		process.env.NODE_ENV !== 'production'
			? `https://crowdsignal.localhost:9001/${ project?.code }?preview=true`
			: `${ project?.permalink }?preview=true`;

	return (
		<ToolbarSlot className="block-editor__crowdsignal-toolbar">
			{ ( ! isPublic( project ) ||
				! isSaved ||
				hasUnpublishedChanges( project ) ) &&
				! canRestoreDraft && (
					<ToolbarButton
						as={ Button }
						variant="tertiary"
						onClick={ saveEditorChanges }
						disabled={ isSaving || isSaved }
					>
						{ isSaved
							? __( 'Draft saved', 'dashboard' )
							: __( 'Save draft', 'dashboard' ) }
					</ToolbarButton>
				) }

			<PreviewButton
				disabled={ ! project || ! project.id }
				previewURL={ previewURL }
			/>

			<PublishButton
				project={ project }
				canRestoreDraft={ canRestoreDraft }
				isSaving={ isSaving }
				isSaved={ isSaved }
				onPublish={ publishProject }
			/>

			{ isPublic( project ) && (
				<ToolbarButton
					as={ Button }
					variant="primary"
					onClick={ onShareClick }
					disabled={ isSaving }
				>
					{ __( 'Share', 'block-editor' ) }
				</ToolbarButton>
			) }
		</ToolbarSlot>
	);
};

export default Toolbar;
