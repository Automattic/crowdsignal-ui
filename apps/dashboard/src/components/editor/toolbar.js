/**
 * External dependencies
 */
import { parse } from '@wordpress/blocks';
import { Button } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { ToolbarSlot } from 'isolated-block-editor'; // eslint-disable-line import/named
import { filter } from 'lodash';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import { hasUnpublishedChanges, isPublic } from '../../util/project';
import PublishButton from './publish-button';
import UnpublishedChangesNotice from './unpublished-changes-notice';

/**
 * Style dependencies
 */
import { ToolbarButton } from './styles/button';

const Toolbar = ( { project } ) => {
	const { saveEditorContent } = useDispatch( STORE_NAME );

	const [
		canRestoreDraft,
		editorContent,
		isSaving,
		isSaved,
		projectTitle,
	] = useSelect( ( select ) => [
		filter( select( 'core/notices' ).getNotices(), {
			id: UnpublishedChangesNotice.ID,
		} ).length > 0,
		select( STORE_NAME ).getEditorContent(),
		select( STORE_NAME ).isEditorSaving(),
		select( STORE_NAME ).isEditorContentSaved(),
		select( STORE_NAME ).getEditorTitle(),
	] );

	const saveProject = () =>
		saveEditorContent( project?.id, parse( editorContent ), {
			title: projectTitle,
		} );
	const publishProject = () =>
		saveEditorContent( project.id, parse( editorContent ), {
			public: true,
			title: projectTitle,
		} );

	const shareHandler = () => {
		if ( project.permalink ) {
			window.navigator.clipboard.writeText( project.permalink ).then(
				() => {
					// eslint-disable-next-line
					window.alert(
						`Project's public URL ( ${ project.permalink } ) has been copied to clipboard`
					);
				},
				( err ) => {
					// eslint-disable-next-line
					window.alert(
						'Share URL could not be copied to clipboard'
					);
					// eslint-disable-next-line
					console.error( err );
				}
			);
		} else {
			// eslint-disable-next-line
			window.alert(
				'Share URL will is only available for published projects'
			);
		}
		return false;
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
						onClick={ saveProject }
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
					onClick={ shareHandler }
					disabled={ isSaving }
				>
					{ __( 'Share', 'block-editor' ) }
				</ToolbarButton>
			) }
		</ToolbarSlot>
	);
};

export default Toolbar;
