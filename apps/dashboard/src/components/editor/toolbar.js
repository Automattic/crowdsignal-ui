/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { ToolbarSlot } from 'isolated-block-editor'; // eslint-disable-line import/named

/**
 * Internal dependencies
 */
import { publishProject } from '@crowdsignal/types';
import { STORE_NAME } from '../../data';
import { hasUnpublishedChanges } from '../../util/project';

/**
 * @param {Object} params
 * @param {number} params.projectId
 */
const Toolbar = ( { projectId } ) => {
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const [ project, isSaving, isSaved, isPublic ] = useSelect( ( select ) => {
		return [
			select( STORE_NAME ).getProject( projectId ),
			select( STORE_NAME ).isProjectSaving(),
			select( STORE_NAME ).isProjectSaved(),
			select( STORE_NAME ).isProjectPublic(),
		];
	} );

	// To do: There's a race condition between this and the editor debounce
	//        that can cause the very latest changes not to be picked up
	const syncProject = useCallback( () => {
		saveAndUpdateProject( projectId, project );
	}, [ projectId, project ] );

	const handlePublish = useCallback( () => {
		saveAndUpdateProject( projectId, publishProject( project ) );
	}, [ projectId, project ] );

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

	return (
		<ToolbarSlot className="block-editor__crowdsignal-toolbar">
			<Button
				className="is-crowdsignal"
				variant="tertiary"
				onClick={ syncProject }
				disabled={ isSaving || isSaved }
			>
				{ isSaved
					? __( 'Draft saved', 'dashboard' )
					: __( 'Save draft', 'dashboard' ) }
			</Button>
			<Button
				className="is-crowdsignal"
				variant="tertiary"
				href={ `/project/${ projectId }/preview` }
				target="_blank"
				disabled={ ! projectId }
			>
				{ __( 'Preview', 'block-editor' ) }
			</Button>
			{ ( ! isPublic || hasUnpublishedChanges( project ) ) && (
				<Button
					className="is-crowdsignal"
					variant={ isPublic ? 'tertiary' : 'primary' }
					onClick={ handlePublish }
					disabled={ isSaving }
				>
					{ isPublic
						? __( 'Update', 'dashboard' )
						: __( 'Publish', 'dashboard' ) }
				</Button>
			) }
			{ isPublic && (
				<Button
					className="is-crowdsignal"
					variant="primary"
					onClick={ shareHandler }
					disabled={ isSaving }
				>
					{ __( 'Share', 'block-editor' ) }
				</Button>
			) }
		</ToolbarSlot>
	);
};

export default Toolbar;
