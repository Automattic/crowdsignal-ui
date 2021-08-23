/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';
import { omit } from 'lodash';

/**
 * Internal dependencies
 */
import {
	CURRENT_USER_UPDATE,
	NOTICE_CREATE,
	NOTICE_REMOVE,
} from '../action-types';

const currentUserId = ( state = 0, action ) => {
	if ( action.type === CURRENT_USER_UPDATE ) {
		return action.userId;
	}

	return state;
};

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
	currentUserId,
	notices,
} );
