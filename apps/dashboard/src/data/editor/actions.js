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
	EDITOR_CURRENT_PAGE_INDEX_SET,
	EDITOR_INIT,
	EDITOR_PAGE_DELETE,
	EDITOR_PAGE_DUPLICATE,
	EDITOR_PAGE_INSERT,
	EDITOR_PAGE_ORDER_UPDATE,
	EDITOR_PAGE_UPDATE,
	EDITOR_SAVE,
	EDITOR_SAVE_ERROR,
	EDITOR_SAVE_SUCCESS,
	EDITOR_TITLE_UPDATE,
} from '../action-types';
import { saveAndUpdateProject } from '../projects/actions';
import { STORE_NAME } from '../';

const autosave = ( actionCreator ) => {
	return function* ( ...args ) {
		yield { type: EDITOR_AUTOSAVE_TIMER_RESET };
		return actionCreator( ...args );
	};
};

export const initializeEditor = ( projectId, title, pages ) => ( {
	type: EDITOR_INIT,
	projectId,
	pages,
	title,
} );

export const setEditorCurrentPage = ( pageIndex ) => ( {
	type: EDITOR_CURRENT_PAGE_INDEX_SET,
	pageIndex,
} );

export function* saveEditorChanges( options = {} ) {
	const projectId = select( STORE_NAME ).getEditorProjectId();
	const changes = select( STORE_NAME ).getEditorChanges();
	const data = select( STORE_NAME ).getEditorUpdatedProjectData( {
		public: options.public,
		theme: options.theme,
	} );

	yield { type: EDITOR_SAVE };
	yield { type: EDITOR_AUTOSAVE_TIMER_CANCEL };

	try {
		yield saveAndUpdateProject( projectId, data );

		// Update editor project ID and redirect to the correct URL
		// when creating a new project
		if ( projectId === 0 ) {
			const newProjectId = select( STORE_NAME ).getLastUpdatedProjectId();

			yield {
				type: EDITOR_SAVE_SUCCESS,
				projectId: newProjectId,
			};

			redirect( `/project/${ newProjectId }` );
			return;
		}

		return {
			type: EDITOR_SAVE_SUCCESS,
			projectId,
		};
	} catch ( error ) {
		return { type: EDITOR_SAVE_ERROR, changes };
	}
}

export const deleteEditorPage = autosave( ( pageIndex ) => ( {
	type: EDITOR_PAGE_DELETE,
	pageIndex,
} ) );

export const duplicateEditorPage = autosave( ( pageIndex ) => ( {
	type: EDITOR_PAGE_DUPLICATE,
	pageIndex,
} ) );

export const insertEditorPage = autosave( ( pageIndex, pageContent ) => ( {
	type: EDITOR_PAGE_INSERT,
	pageIndex,
	pageContent,
} ) );

export const updateEditorPage = autosave( ( pageIndex, pageContent ) => ( {
	type: EDITOR_PAGE_UPDATE,
	pageIndex,
	pageContent,
} ) );

export const updateEditorPageOrder = autosave( ( order ) => ( {
	type: EDITOR_PAGE_ORDER_UPDATE,
	order,
} ) );

export const updateEditorTitle = autosave( ( title ) => ( {
	type: EDITOR_TITLE_UPDATE,
	title,
} ) );
