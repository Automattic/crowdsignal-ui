/**
 * External dependencies
 */
import { useCallback } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
// import { __ } from '@wordpress/i18n';
import { debounce } from 'lodash';

/**
 * Internal dependencies
 */
import { BlockEditor } from '@crowdsignal/block-editor';
import ProjectNavigation from 'components/project-navigation';
import { STORE_NAME } from 'data';
import { registerBlocks } from './blocks';
// import EditorLoadingPlaceholder from './loading-placeholder';

/**
 * Style dependencies
 */
import './style.scss';

const Editor = ( { projectId } ) => {
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	// useEffect( () => {
	// 	if ( projectId ) {
	// 		return;
	// 	}
	//
	// 	try {
	// 		saveAndUpdateProject( 0, {
	// 			title: __( 'Untitled Project', 'dashboard' ),
	// 		} );
	//
	// 		const id = select( STORE_NAME ).getLastUpdatedProjectId();
	//
	// 		redirect( `/edit/poll/${ id }` );
	// 	} catch ( error ) {
	// 		// Creating a new project failed, return to the main dashboard screen and display an error.
	// 		// redirect() doesn't work as it's not part of the app yet.
	// 		console.error( error );
	// 		// window.location.replace( 'https://app.crowdsignal.com/dashboard' );
	// 	}
	// }, [] );

	const handleSaveBlocks = useCallback(
		debounce( ( blocks ) => {
			try {
				saveAndUpdateProject( projectId, {
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
