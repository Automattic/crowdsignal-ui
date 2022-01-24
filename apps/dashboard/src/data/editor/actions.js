/**
 * External dependencies
 */
import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { redirect } from '@crowdsignal/router';
import {
	EDITOR_AUTOSAVE_TIMER_CANCEL,
	EDITOR_AUTOSAVE_TIMER_RESET,
	EDITOR_SAVE,
	EDITOR_SAVE_ERROR,
	EDITOR_SAVE_SUCCESS,
	EDITOR_CONTENT_UPDATE,
	EDITOR_INIT,
	EDITOR_PROJECT_ID_UPDATE,
	EDITOR_TITLE_UPDATE,
} from '../action-types';
import { saveAndUpdateProject } from '../projects/actions';
import { STORE_NAME } from '../';

const withAutosave = ( actionCreator ) => {
	return function* ( ...args ) {
		yield { type: EDITOR_AUTOSAVE_TIMER_RESET };
		return actionCreator( ...args );
	};
};

export const initalizeEditor = ( projectId ) => ( {
	type: EDITOR_INIT,
	projectId,
} );

export const updateEditorProjectID = ( projectId ) => ( {
	type: EDITOR_PROJECT_ID_UPDATE,
	projectId,
} );

export function* saveEditorChangeset( options = {} ) {
	yield { type: EDITOR_SAVE };
	yield { type: EDITOR_AUTOSAVE_TIMER_CANCEL };

	const id = select( STORE_NAME ).getEditorProjectId();
	const data = select( STORE_NAME ).getEditorChangeset();

	if ( options.public ) {
		data.publicContent = data.draftContent;
		data.public = true;
	}

	try {
		yield saveAndUpdateProject( id, data );

		if ( id === 0 ) {
			const projectId = select( STORE_NAME ).getLastUpdatedProjectId();

			yield updateEditorProjectID( projectId );

			redirect( `/project/${ projectId }` );
		}

		return { type: EDITOR_SAVE_SUCCESS };
	} catch ( error ) {
		return { type: EDITOR_SAVE_ERROR };
	}
}

export const updateEditorContent = withAutosave( ( content ) => ( {
	type: EDITOR_CONTENT_UPDATE,
	content,
} ) );

export const updateEditorTitle = withAutosave( ( title ) => ( {
	type: EDITOR_TITLE_UPDATE,
	title,
} ) );
