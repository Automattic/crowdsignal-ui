/**
 * External dependencies
 */
import { get, includes } from 'lodash';

/**
 * Internal dependencies
 */
import {
	getAccountSignalCount,
	getAccountType,
	getAccountPartnerUserId,
} from '../accounts/selectors';

const ACCOUNT_TYPES = {
	FREE: 10,
	PWYW_9: 12,
	PWYW_19: 13,
	PWYW_29: 14,
	PWYW_39: 15,
	PWYW_49: 16,
	PRO: 20,
	JETPACKPRO: 22,
	CORPORATE: 30,
	CORPORATE_6_MONTHLY: 32,
	ENTERPRISE: 35,
	VIP: 40,
	PREMIUM: 50,
	BUSINESS: 60,
	TEAM: 70,
};

export const getUserAccountId = ( state, userId ) =>
	get( state, [ 'users', userId, 'account' ], 0 );

export const getUserAccountType = ( state, userId ) =>
	getAccountType( state, getUserAccountId( state, userId ) );

export const getUserSignalCount = ( state, userId ) =>
	getAccountSignalCount( state, getUserAccountId( state, userId ) );

export const getUserPartnerId = ( state, userId ) =>
	getAccountPartnerUserId( state, getUserAccountId( state, userId ) );

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
		userId,
		partnerUserId: getUserPartnerId( state, userId ),
		accountType: getUserAccountType( state, userId ),
		profile: getUserProfile( state, userId ),
		signalCount: getUserSignalCount( state, userId ),
		type: getUserAccountType( state, userId ),
		isFree: getUserAccountType( state, userId ) === ACCOUNT_TYPES.FREE,
	};
};

export const hasCapability = ( state, userId, capability ) =>
	includes(
		get( state, [ 'users', userId, 'capabilities' ], [] ),
		capability
	);
