/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependecies
 */
import { ACCOUNT_SIGNAL_COUNT_UPDATE, ACCOUNT_UPDATE } from '../action-types';
import { keyedReducer } from '../util';

const type = ( state = null, action ) => {
	if ( action.type === ACCOUNT_UPDATE ) {
		return action.accountType;
	}

	return state;
};

const users = ( state = [], action ) => {
	if ( action.type === ACCOUNT_UPDATE ) {
		return action.userIds;
	}

	return state;
};

const domain = ( state = '', action ) => {
	if ( action.type === ACCOUNT_UPDATE ) {
		return action.domain;
	}

	return state;
};

const signalLimit = ( state = 0, action ) => {
	if ( action.type === ACCOUNT_UPDATE ) {
		return action.signalLimit;
	}

	return state;
};

const partnerUserId = ( state = 0, action ) => {
	if ( action.type === ACCOUNT_UPDATE ) {
		return action.partnerUserId;
	}

	return state;
};

const signalCount = ( state = 0, action ) => {
	if ( action.type === ACCOUNT_SIGNAL_COUNT_UPDATE ) {
		return action.count;
	}

	return state;
};

export default keyedReducer(
	'accountId',
	combineReducers( {
		domain,
		signalCount,
		signalLimit,
		type,
		partnerUserId,
		users,
	} )
);
