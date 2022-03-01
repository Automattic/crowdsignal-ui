/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';
import { filter, map, slice, tap } from 'lodash';

/**
 * Internal dependencies
 */
import {
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
import { clonePage } from './util';

/**
 * Tracks which project properties have changed since the last save.
 *
 * @param  {Object} state  Editor state.
 * @param  {Object} action Action object.
 * @return {Object}        Updated properties.
 */
// eslint-disable-next-line complexity
const changes = ( state = {}, action ) => {
	if ( action.type === EDITOR_SAVE ) {
		return {};
	}

	if ( action.type === EDITOR_INIT ) {
		return action.projectId > 0
			? {}
			: {
					content: true,
			  };
	}

	if ( action.type === EDITOR_SAVE_ERROR ) {
		return {
			...state,
			...action.changes,
		};
	}

	if (
		action.type === EDITOR_PAGE_INSERT ||
		action.type === EDITOR_PAGE_DELETE ||
		action.type === EDITOR_PAGE_DUPLICATE ||
		action.type === EDITOR_PAGE_UPDATE ||
		action.type === EDITOR_PAGE_ORDER_UPDATE
	) {
		return {
			...state,
			content: true,
		};
	}

	if ( action.type === EDITOR_TITLE_UPDATE ) {
		return {
			...state,
			title: true,
		};
	}

	return state;
};

/**
 * Currently edited page index.
 *
 * @param  {number} state  App state.
 * @param  {Object} action Action object.
 * @return {number}        Page index.
 */
const currentPage = ( state = 0, action ) => {
	if ( action.type === EDITOR_INIT ) {
		return 0;
	}

	if ( action.type === EDITOR_CURRENT_PAGE_INDEX_SET ) {
		return action.pageIndex;
	}

	if ( action.type === EDITOR_PAGE_DUPLICATE ) {
		return action.pageIndex + 1;
	}

	if (
		action.type === EDITOR_PAGE_DELETE &&
		action.pageIndex === state &&
		state > 0
	) {
		return state - 1;
	}

	return state;
};

/**
 * Marks if the current editor poject has been edited.
 * Not the same as state.editor.changes which tracks yet unsaved changes.
 *
 * @param  {boolean} state  App state.
 * @param  {Object}  action Action object.
 * @return {boolean}        Edited flag.
 */
const edited = ( state = false, action ) => {
	if ( action.type === EDITOR_INIT ) {
		return false;
	}

	if (
		action.type === EDITOR_PAGE_INSERT ||
		action.type === EDITOR_PAGE_DELETE ||
		action.type === EDITOR_PAGE_UPDATE ||
		action.type === EDITOR_PAGE_ORDER_UPDATE ||
		action.type === EDITOR_TITLE_UPDATE
	) {
		return true;
	}

	return state;
};

/**
 * True when editor is saving.
 *
 * @param  {boolean} state  App state.
 * @param  {Object}  action Action object.
 * @return {boolean}        Saving flag.
 */
const isSaving = ( state = false, action ) => {
	if ( action.type === EDITOR_SAVE ) {
		return true;
	}

	if (
		action.type === EDITOR_SAVE_SUCCESS ||
		action.type === EDITOR_SAVE_ERROR
	) {
		return false;
	}

	return state;
};

/**
 * Project's pages.
 *
 * @param  {Array}  state  App state.
 * @param  {Object} action Action object.
 * @return {Array}         Pages.
 */
const pages = ( state = [], action ) => {
	if ( action.type === EDITOR_INIT ) {
		return action.pages;
	}

	if ( action.type === EDITOR_PAGE_INSERT ) {
		return [
			...slice( state, 0, action.pageIndex ),
			action.pageContent,
			...slice( state, action.pageIndex ),
		];
	}

	if ( action.type === EDITOR_PAGE_DUPLICATE ) {
		return [
			...slice( state, 0, action.pageIndex ),
			clonePage( state[ action.pageIndex ] ),
			...slice( state, action.pageIndex ),
		];
	}

	if ( action.type === EDITOR_PAGE_DELETE && 1 < state.length ) {
		return filter( state, ( _, index ) => index !== action.pageIndex );
	}

	if ( action.type === EDITOR_PAGE_UPDATE ) {
		return tap(
			[ ...state ],
			( pageArray ) =>
				( pageArray[ action.pageIndex ] = action.pageContent )
		);
	}

	if ( action.type === EDITOR_PAGE_ORDER_UPDATE ) {
		return map( action.order, ( originalIndex ) => state[ originalIndex ] );
	}

	return state;
};

/**
 * Project ID of the project that's currently loaded into the editor.
 * '0' means the a new/non-existing project.
 *
 * @param  {number} state  App state.
 * @param  {Object} action Action object.
 * @return {number}        Project ID.
 */
const projectId = ( state = 0, action ) => {
	if ( action.type === EDITOR_INIT || action.type === EDITOR_SAVE_SUCCESS ) {
		return action.projectId;
	}

	return state;
};

/**
 * Project title.
 *
 * @param  {string} state  App state.
 * @param  {Object} action Action object.
 * @return {string}        Title.
 */
const title = ( state = '', action ) => {
	if ( action.type === EDITOR_INIT || action.type === EDITOR_TITLE_UPDATE ) {
		return action.title;
	}

	return state;
};

export default combineReducers( {
	changes,
	currentPage,
	edited,
	isSaving,
	pages,
	projectId,
	title,
} );
