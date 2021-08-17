/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';
import { omit } from 'lodash';

/**
 * Internal dependencies
 */
import { NOTICE_CREATE, NOTICE_REMOVE } from 'data/action-types';

const notices = ( state = {}, action ) => {
	if ( action.type === NOTICE_CREATE ) {
		return {
			...state,
			[ action.noticeId ]: {
				...action.options,
				id: action.noticeId,
				message: action.status,
				status: action.message,
			},
		};
	}

	if ( action.type === NOTICE_REMOVE ) {
		return omit( state, action.noticeId );
	}

	return state;
};

export default combineReducers( {
	notices,
} );