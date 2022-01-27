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
	EDITOR_CHANGESET_RESET,
	EDITOR_CURRENT_PAGE_SET,
	EDITOR_MODE_SET,
	EDITOR_INIT,
	EDITOR_PAGE_INSERT,
	EDITOR_PAGE_ORDER_UPDATE,
	EDITOR_PAGE_UPDATE,
	EDITOR_PROJECT_ID_UPDATE,
	EDITOR_SAVE,
	EDITOR_SAVE_ERROR,
	EDITOR_SAVE_SUCCESS,
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

export const forceEditorDraftMode = () => ( {
	type: EDITOR_MODE_SET,
	mode: 'draft',
} );

export const setEditorCurrentPage = ( page ) => ( {
	type: EDITOR_CURRENT_PAGE_SET,
	page,
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
		yield forceEditorDraftMode();

		// Update editor project ID and redirect to the correct URL
		// when creating a new project
		if ( id === 0 ) {
			const projectId = select( STORE_NAME ).getLastUpdatedProjectId();

			yield updateEditorProjectID( projectId );

			redirect( `/project/${ projectId }` );
		}

		// Reset editor state if no changes have been made during the save
		if ( select( STORE_NAME ).isEditorContentSaved() ) {
			yield { type: EDITOR_CHANGESET_RESET };
		}

		return { type: EDITOR_SAVE_SUCCESS };
	} catch ( error ) {
		return { type: EDITOR_SAVE_ERROR };
	}
}

export const insertEditorPage = withAutosave( ( index, blocks ) => ( {
	type: EDITOR_PAGE_INSERT,
	index,
	blocks,
} ) );

export const updateEditorPage = withAutosave( ( index, blocks ) => ( {
	type: EDITOR_PAGE_UPDATE,
	index,
	blocks,
} ) );

export const updateEditorPageOrder = withAutosave( ( order ) => ( {
	type: EDITOR_PAGE_ORDER_UPDATE,
	order,
} ) );

export const updateEditorTitle = withAutosave( ( title ) => ( {
	type: EDITOR_TITLE_UPDATE,
	title,
} ) );
