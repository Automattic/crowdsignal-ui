/**
 * External dependencies
 */
import { get, includes } from 'lodash';

/**
 * Internal dependencies
 */
import { getAccountSignalCount, getAccountType } from 'data/accounts/selectors';

export const getUserAccountId = ( state, userId ) =>
	get( state, [ 'users', userId, 'account' ], 0 );

export const getUserAccountType = ( state, userId ) =>
	getAccountType( state, getUserAccountId( state, userId ) );

export const getUserSignalCount = ( state, userId ) =>
	getAccountSignalCount( state, getUserAccountId( state, userId ) );

export const getUserProfile = ( state, userId ) =>
	get( state, [ 'users', userId, 'profile' ], {} );

/**
 * Returns the user's email address
 *
 * @param  {Object} state  App state
 * @param  {number} userId User ID
 * @return {string}        Email address
 */
export const getUserEmail = ( state, userId ) =>
	get( state, [ 'users', userId, 'profile', 'email' ], '' );

/**
 * Returns true if the user has verified their email.
 *
 * @param  {Object}  state  App state
 * @param  {number}  userId User ID
 * @return {boolean}        True if user has verified their email
 */
export const isUserVerified = ( state, userId ) =>
	get( state, [ 'users', userId, 'profile', 'emailVerified' ], false );

export const getUser = ( state, userId ) => {
	if ( ! getUserAccountId( state, userId ) ) {
		return null;
	}

	return {
		accountType: getUserAccountType( state, userId ),
		profile: getUserProfile( state, userId ),
		signalCount: getUserSignalCount( state, userId ),
		type: getUserAccountType( state, userId ),
	};
};

export const hasCapability = ( state, userId, capability ) =>
	includes(
		get( state, [ 'users', userId, 'capabilities' ], [] ),
		capability
	);
