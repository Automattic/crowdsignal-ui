/**
 * External dependencies
 */
import { useCallback, useEffect } from '@wordpress/element';
import { useDispatch, select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { debounce } from 'lodash';

/**
 * Internal dependencies
 */
import { BlockEditor } from '@crowdsignal/block-editor';
import ProjectNavigation from 'components/project-navigation';
import { STORE_NAME } from 'data';
import EditorLoadingPlaceholder from './loading-placeholder';

/**
 * Style dependencies
 */
import './style.scss';

const Editor = ( { projectId } ) => {
	const { redirect, saveAndUpdateProject } = useDispatch( STORE_NAME );

	useEffect( () => {
		if ( projectId ) {
			return;
		}

		try {
			saveAndUpdateProject( 0, {
				title: __( 'Untitled Project', 'dashboard' ),
			} );

			const id = select( STORE_NAME ).getLastUpdatedProjectId();

			redirect( `/edit/poll${ id }` );
		} catch ( error ) {
			// Creating a new project failed, return to the main dashboard screen and display an error.
			// redirect() doesn't work as it's not part of the app yet.

			window.location.replace( 'https://app.crowdsignal.com/dashboard' );
		}
	}, [] );

	const handleSaveContent = useCallback(
		debounce( ( content ) => {
			try {
				saveAndUpdateProject( projectId, {
					content,
				} );
			} catch ( error ) {
				// console.error( error );
				// console.error( 'Failed to save project content.' );
			}
		}, 1000 ),
		[ projectId, saveAndUpdateProject ]
	);

	if ( ! projectId ) {
		return <EditorLoadingPlaceholder />;
	}

	return (
		<div className="editor">
			<ProjectNavigation
				activeTab={ ProjectNavigation.Tab.EDITOR }
				projectId={ projectId }
			/>

			<BlockEditor onSave={ handleSaveContent } />
		</div>
	);
};

export default Editor;
