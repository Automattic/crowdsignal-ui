/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { POLL_UPDATE } from '../action-types';

const items = ( state = {}, action ) => {
	if ( action.type === POLL_UPDATE ) {
		return {
			...state,
			[ action.pollId ]: action.poll,
		};
	}

	return state;
};

export default combineReducers( {
	items,
} );
