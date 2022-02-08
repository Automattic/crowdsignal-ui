/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';
import { omit } from 'lodash';

/**
 * Internal dependencies
 */
import {
	PROJECT_LOAD,
	PROJECT_LOAD_ERROR,
	PROJECT_UPDATE,
} from '../action-types';

const error = ( state = {}, action ) => {
	if ( action.type === PROJECT_LOAD ) {
		return omit( state, [ action.projectId ] );
	}

	if ( action.type === PROJECT_LOAD_ERROR ) {
		return {
			[ action.projectId ]: action.error,
		};
	}

	return state;
};

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

const loading = ( state = {}, action ) => {
	if ( action.type === PROJECT_LOAD ) {
		return {
			...state,
			[ action.projectId ]: true,
		};
	}

	if ( action.type === PROJECT_UPDATE ) {
		return {
			...state,
			[ action.projectId ]: false,
		};
	}

	return state;
};

export default combineReducers( {
	error,
	items,
	lastUpdatedItemId,
	loading,
} );
