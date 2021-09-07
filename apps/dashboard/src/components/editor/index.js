/**
 * External dependencies
 */
import { useCallback } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
// import { __ } from '@wordpress/i18n';
import { debounce, get } from 'lodash';

/**
 * Internal dependencies
 */
import { BlockEditor } from '@crowdsignal/block-editor';
import ProjectNavigation from '../project-navigation';
import { STORE_NAME } from '../../data';
import { registerBlocks } from './blocks';
import EditorLoadingPlaceholder from './loading-placeholder';
import BlockLoader from './block-loader';

/**
 * Style dependencies
 */
import './style.scss';

const Editor = ( { projectId } ) => {
	const project = useSelect( ( select ) =>
		select( STORE_NAME ).getProject( projectId )
	);

	const projectContent = get( project, [ 'content' ], {} );

	// TODO: need to compare draft/published, offer "restore" drafted content
	const draftedBlocks = get( projectContent, [ 'draft', 'pages', 0 ], [] );

	const displayedBlocks = get(
		projectContent,
		[ 'published', 'pages', 0 ],
		draftedBlocks
	);

	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const handleSaveBlocks = useCallback(
		debounce( ( blocks ) => {
			try {
				const currentProject = project || {};
				saveAndUpdateProject( projectId, {
					...currentProject,
					content: {
						...currentProject.content,
						draft: {
							pages: [ [ ...blocks ] ],
						},
					},
				} );
			} catch ( error ) {
				// TODO: replace this with some nince notice or something
				// eslint-disable-next-line
				console.error( 'Failed to save project content.' );
				// eslint-disable-next-line
				console.error( error );
			}
		}, 1000 ),
		[ projectId, project ]
	);

	if ( projectId && null === project ) {
		// project is being loaded
		return <EditorLoadingPlaceholder />;
	}

	return (
		<div className="editor">
			<ProjectNavigation
				activeTab={ ProjectNavigation.Tab.EDITOR }
				projectId={ projectId }
			/>

			<BlockEditor onSave={ handleSaveBlocks }>
				<BlockLoader blocks={ displayedBlocks } />
			</BlockEditor>
		</div>
	);
};

registerBlocks();

export default Editor;
