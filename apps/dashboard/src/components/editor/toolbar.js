/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { ToolbarSlot } from 'isolated-block-editor'; // eslint-disable-line import/named

/**
 * Internal dependencies
 */
import PublishButton from './publish-button';
import { STORE_NAME } from '../../data';
import { projectHash } from '../../util/project';

/**
 * Style dependencies
 */
import { ToolbarButton } from './styles/button';

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

	const syncProject = () => {
		saveAndUpdateProject( projectId, {
			...project,
			public: false,
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

	const previewURL =
		process.env.NODE_ENV !== 'production'
			? `https://crowdsignal.localhost:9001/${ projectHash(
					project
			  ) }?preview=true`
			: `${ project.permalink }?preview=true`;

	return (
		<ToolbarSlot className="block-editor__crowdsignal-toolbar">
			<ToolbarButton
				as={ Button }
				variant="tertiary"
				onClick={ syncProject }
				disabled={ isSaving || isSaved }
			>
				{ isSaved
					? __( 'Draft saved', 'dashboard' )
					: __( 'Save draft', 'dashboard' ) }
			</ToolbarButton>
			<ToolbarButton
				as={ Button }
				variant="tertiary"
				href={ previewURL }
				target="_blank"
				disabled={ ! projectId }
			>
				{ __( 'Preview', 'block-editor' ) }
			</ToolbarButton>

			<PublishButton projectId={ projectId } />

			{ isPublic && (
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
