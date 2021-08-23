/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';
import { pick } from 'lodash';

/**
 * Internal dependencies
 */
import {
	USER_ACCOUNT_UPDATE,
	USER_CAPABILITIES_UPDATE,
	USER_PROFILE_UPDATE,
} from '../action-types';
import { keyedReducer } from '../util';

const account = ( state, action ) => {
	if ( action.type === USER_ACCOUNT_UPDATE ) {
		return action.accountId;
	}

	return state;
};

const capabilities = ( state = [], action ) => {
	if ( action.type === USER_CAPABILITIES_UPDATE ) {
		return action.capabilities;
	}

	return state;
};

const profile = ( state, action ) => {
	if ( action.type === USER_PROFILE_UPDATE ) {
		return pick( action.profile, [
			'name',
			'username',
			'email',
			'emailVerified',
		] );
	}

	return state;
};

export default keyedReducer(
	'userId',
	combineReducers( {
		account,
		capabilities,
		profile,
	} )
);
