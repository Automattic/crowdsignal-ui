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
import PublishButton from './publish-button';
import UnpublishedChangesNotice from './unpublished-changes-notice';

/**
 * Style dependencies
 */
import { ToolbarButton } from './styles/button';

const Toolbar = ( { project, onShareClick } ) => {
	const { saveEditorChanges } = useDispatch( STORE_NAME );

	const [ canRestoreDraft, isSaving, isSaved ] = useSelect( ( select ) => [
		filter( select( 'core/notices' ).getNotices(), {
			id: UnpublishedChangesNotice.ID,
		} ).length > 0,
		select( STORE_NAME ).isEditorSaving(),
		select( STORE_NAME ).isEditorContentSaved(),
	] );

	const publishProject = () => saveEditorChanges( { public: true } );

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

			<ToolbarButton
				as={ Button }
				variant="tertiary"
				href={ previewURL }
				target="_blank"
				disabled={ ! project || ! project.id }
			>
				{ __( 'Preview', 'block-editor' ) }
			</ToolbarButton>

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
