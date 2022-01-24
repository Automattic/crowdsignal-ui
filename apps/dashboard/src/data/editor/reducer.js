/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	EDITOR_SAVE,
	EDITOR_SAVE_ERROR,
	EDITOR_SAVE_SUCCESS,
	EDITOR_CONTENT_UPDATE,
	EDITOR_INIT,
	EDITOR_PROJECT_ID_UPDATE,
	EDITOR_TITLE_UPDATE,
} from '../action-types';

const content = ( state = '', action ) => {
	if ( action.type === EDITOR_INIT ) {
		return '';
	}

	if ( action.type === EDITOR_CONTENT_UPDATE ) {
		return action.content;
	}

	return state;
};

const hasUnsavedChanges = ( state = false, action ) => {
	if ( action.type === EDITOR_INIT || action.type === EDITOR_SAVE ) {
		return false;
	}

	if (
		action.type === EDITOR_CONTENT_UPDATE ||
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
	if ( action.type === EDITOR_INIT ) {
		return '';
	}

	if ( action.type === EDITOR_TITLE_UPDATE ) {
		return action.title;
	}

	return state;
};

export default combineReducers( {
	content,
	hasUnsavedChanges,
	isSaving,
	projectId,
	title,
} );
