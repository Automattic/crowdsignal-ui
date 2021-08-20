/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	PROJECT_SAVE,
	PROJECT_UPDATE,
	PROJECT_SAVE_ERROR,
	PROJECT_SAVE_SUCCESS,
} from '../action-types';

const items = ( state = {}, action ) => {
	if ( action.type === PROJECT_UPDATE ) {
		return {
			...state,
			[ action.projectId ]: action.project,
		};
	}

	return state;
};

const lastUpdatedItemId = ( state = 0, action ) => {
	if ( action.type === PROJECT_UPDATE ) {
		return action.projectId;
	}

	return state;
};

const isSaving = ( state = false, action ) => {
	if ( action.type === PROJECT_SAVE ) {
		return true;
	}

	if (
		action.type === PROJECT_SAVE_ERROR ||
		action.type === PROJECT_SAVE_SUCCESS
	) {
		return false;
	}

	return state;
};

export default combineReducers( {
	items,
	lastUpdatedItemId,
	isSaving,
} );
