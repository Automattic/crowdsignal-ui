/**
 * External dependencies
 */
import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	AUTOSAVE_TIMER_CANCEL,
	AUTOSAVE_TIMER_START,
	CURRENT_PAGE_INDEX_SET,
	EDITOR_INIT,
	EDITOR_SAVE,
	EDITOR_SAVE_ACTION_EXECUTE,
	EDITOR_SAVE_ERROR,
	EDITOR_SAVE_SUCCESS,
	PAGE_DELETE,
	PAGE_INSERT,
	PAGE_UPDATE,
	PAGE_ORDER_UPDATE,
	TITLE_UPDATE,
} from './action-types';

const autosave = ( actionCreator ) => {
	return function* ( ...args ) {
		yield { type: AUTOSAVE_TIMER_START };
		return actionCreator( ...args );
	};
};

export const initalizeEditor = ( projectId, title, pages ) => ( {
	type: EDITOR_INIT,
	projectId,
	pages,
	title,
} );

export const setCurrentPage = ( pageIndex ) => ( {
	type: CURRENT_PAGE_INDEX_SET,
	pageIndex,
} );

export function* saveChanges( options = {} ) {
	yield { type: EDITOR_SAVE };
	yield { type: AUTOSAVE_TIMER_CANCEL };

	const projectId = select( 'crowdsignal/editor' ).getProjectId();
	const changes = select( 'crowdsignal/editor' ).getChanges();
	const data = select( 'crowdsignal/editor' ).getUpdatedProjectData();

	if ( options.public ) {
		data.publicContent = data.draftContent;
		data.public = true;
	}

	const savedProjectId = yield {
		type: EDITOR_SAVE_ACTION_EXECUTE,
		projectId,
		data,
	};

	if ( ! savedProjectId ) {
		return { type: EDITOR_SAVE_ERROR, changes };
	}

	return {
		type: EDITOR_SAVE_SUCCESS,
		projectId: savedProjectId,
	};
}

export const deletePage = autosave( ( pageIndex ) => ( {
	type: PAGE_DELETE,
	pageIndex,
} ) );

export const insertpage = autosave( ( pageIndex, pageContent ) => ( {
	type: PAGE_INSERT,
	pageIndex,
	pageContent,
} ) );

export const updatePage = autosave( ( pageIndex, pageContent ) => ( {
	type: PAGE_UPDATE,
	pageIndex,
	pageContent,
} ) );

export const updatePageOrder = autosave( ( order ) => ( {
	type: PAGE_ORDER_UPDATE,
	order,
} ) );

export const updateTitle = autosave( ( title ) => ( {
	type: TITLE_UPDATE,
	title,
} ) );
