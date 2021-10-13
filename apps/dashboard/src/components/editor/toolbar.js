/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ToolbarSlot } from 'isolated-block-editor'; // eslint-disable-line import/named

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import { useDispatch, useSelect } from '@wordpress/data';
import { PUBLIC_WITH_UNPUBLISHED_CHAGES } from '../../util/project/project-status';

const Toolbar = ( { projectId } ) => {
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const [ project, isSaving, isSaved, isPublic, projectStatus ] = useSelect(
		( select ) => {
			return [
				select( STORE_NAME ).getProject( projectId ),
				select( STORE_NAME ).isProjectSaving(),
				select( STORE_NAME ).isProjectSaved(),
				select( STORE_NAME ).isProjectPublic(),
				select( STORE_NAME ).getProjectStatus(),
			];
		}
	);

	const syncProject = () => {
		saveAndUpdateProject( projectId, {
			...project,
		} );
	};

	const publishProject = () => {
		const payload = { publish: true };
		saveAndUpdateProject( projectId, {
			...project,
			content: {
				...project.content,
				published: {
					...project.content.draft,
				},
			},
			...payload,
		} );
	};

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
				disabled={
					isSaving ||
					isSaved ||
					projectStatus === PUBLIC_WITH_UNPUBLISHED_CHAGES
				}
			>
				{ isSaved || ( ! isSaved && isPublic )
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
			{ ! isSaved && (
				<Button
					className="is-crowdsignal"
					variant={ isPublic ? 'tertiary' : 'primary' }
					onClick={ publishProject }
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
