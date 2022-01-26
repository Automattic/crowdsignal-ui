/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	EDITOR_CHANGESET_RESET,
	EDITOR_CURRENT_PAGE_SET,
	EDITOR_INIT,
	EDITOR_MODE_SET,
	EDITOR_PAGE_UPDATE,
	EDITOR_PROJECT_ID_UPDATE,
	EDITOR_SAVE,
	EDITOR_SAVE_ERROR,
	EDITOR_SAVE_SUCCESS,
	EDITOR_TITLE_UPDATE,
} from '../action-types';

const content = ( state = {}, action ) => {
	if (
		action.type === EDITOR_INIT ||
		action.type === EDITOR_CHANGESET_RESET
	) {
		return {};
	}

	if ( action.type === EDITOR_PAGE_UPDATE ) {
		return {
			...state,
			[ action.page ]: action.blocks,
		};
	}

	return state;
};

const currentPage = ( state = 0, action ) => {
	if ( action.type === EDITOR_CURRENT_PAGE_SET ) {
		return action.page;
	}

	return state;
};

const hasUnsavedChanges = ( state = false, action ) => {
	if ( action.type === EDITOR_INIT || action.type === EDITOR_SAVE ) {
		return false;
	}

	if (
		action.type === EDITOR_PAGE_UPDATE ||
		action.type === EDITOR_TITLE_UPDATE ||
		action.type === EDITOR_SAVE_ERROR
	) {
		return true;
	}

	return state;
};

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

const mode = ( state = 'auto', action ) => {
	if ( action.type === EDITOR_INIT ) {
		return 'auto';
	}

	if ( action.type === EDITOR_MODE_SET ) {
		return action.mode;
	}

	return state;
};

const projectId = ( state = 0, action ) => {
	if (
		action.type === EDITOR_INIT ||
		action.type === EDITOR_PROJECT_ID_UPDATE
	) {
		return action.projectId;
	}

	return state;
};

const title = ( state = '', action ) => {
	if (
		action.type === EDITOR_INIT ||
		action.type === EDITOR_CHANGESET_RESET
	) {
		return '';
	}

	if ( action.type === EDITOR_TITLE_UPDATE ) {
		return action.title;
	}

	return state;
};

export default combineReducers( {
	content,
	currentPage,
	hasUnsavedChanges,
	isSaving,
	mode,
	projectId,
	title,
} );
