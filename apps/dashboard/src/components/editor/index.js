/**
 * External dependencies
 */
import { useCallback } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
// import { __ } from '@wordpress/i18n';
import { debounce } from 'lodash';

/**
 * Internal dependencies
 */
import { BlockEditor } from '@crowdsignal/block-editor';
import ProjectNavigation from '../project-navigation';
import { STORE_NAME } from '../../data';
import { registerBlocks } from './blocks';
// import EditorLoadingPlaceholder from './loading-placeholder';

/**
 * Style dependencies
 */
import './style.scss';

const Editor = ( { projectId } ) => {
	const project = useSelect( ( select ) =>
		select( STORE_NAME ).getProject( projectId )
	);
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const handleSaveBlocks = useCallback(
		debounce( ( blocks ) => {
			try {
				const currentProject = project || {};
				saveAndUpdateProject( projectId, {
					...currentProject,
					blocks,
				} );
			} catch ( error ) {
				// console.error( error );
				// console.error( 'Failed to save project content.' );
			}
		}, 1000 ),
		[ projectId, saveAndUpdateProject ]
	);

	// if ( ! projectId ) {
	// 	return <EditorLoadingPlaceholder />;
	// }

	return (
		<div className="editor">
			<ProjectNavigation
				activeTab={ ProjectNavigation.Tab.EDITOR }
				projectId={ projectId }
			/>

			<BlockEditor onSave={ handleSaveBlocks } />
		</div>
	);
};

registerBlocks();

export default Editor;
