/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	EDITOR_CONTENT_CHANGED_SET,
	EDITOR_CONTENT_SAVE,
	EDITOR_CONTENT_SAVE_ERROR,
	EDITOR_CONTENT_SAVE_SUCCESS,
} from '../action-types';

const isSaving = ( state = false, action ) => {
	if ( action.type === EDITOR_CONTENT_SAVE ) {
		return true;
	}

	if ( action.type === EDITOR_CONTENT_SAVE_SUCCESS ) {
		return false;
	}

	return state;
};

const hasUnsavedChanges = ( state = false, action ) => {
	if ( action.type === EDITOR_CONTENT_CHANGED_SET ) {
		return true;
	}

	if (
		action.type === EDITOR_CONTENT_SAVE ||
		action.type === EDITOR_CONTENT_SAVE_ERROR
	) {
		// If we were to set this on EDITOR_CONTENT_SAVE_SUCCESS
		// any changes made while the request is going on would be disregarded.
		return false;
	}

	return state;
};

export default combineReducers( {
	isSaving,
	hasUnsavedChanges,
} );
