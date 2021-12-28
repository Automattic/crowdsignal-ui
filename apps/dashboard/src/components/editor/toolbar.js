/**
 * External dependencies
 */
import { parse, serialize } from '@wordpress/blocks';
import { Button } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { ToolbarSlot } from 'isolated-block-editor'; // eslint-disable-line import/named

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import { hasUnpublishedChanges, isPublic } from '../../util/project';
import PublishButton from './publish-button';

/**
 * Style dependencies
 */
import { ToolbarButton } from './styles/button';

const Toolbar = ( { project } ) => {
	const { saveEditorContent } = useDispatch( STORE_NAME );

	const [ editorContent, isSaving, isSaved ] = useSelect(
		( select ) => [
			select( 'core/block-editor' ).getBlocks(),
			select( STORE_NAME ).isEditorSaving(),
			select( STORE_NAME ).isEditorContentSaved(),
		],
		[]
	);

	const saveProject = () =>
		saveEditorContent( project.id, parse( serialize( editorContent ) ) );
	const publishProject = () =>
		saveEditorContent( project.id, parse( serialize( editorContent ) ), {
			public: true,
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
				hasUnpublishedChanges( project ) ) && (
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
				disabled={ ! project.id }
			>
				{ __( 'Preview', 'block-editor' ) }
			</ToolbarButton>

			<PublishButton
				project={ project }
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
