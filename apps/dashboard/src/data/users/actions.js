/**
 * Internal dependencies
 */
import {
	USER_ACCOUNT_UPDATE,
	USER_CAPABILITIES_UPDATE,
	USER_PROFILE_UPDATE,
} from '../action-types';

export const updateUserAccount = ( userId, accountId ) => ( {
	type: USER_ACCOUNT_UPDATE,
	userId,
	accountId,
} );

export const updateUserCapabilities = ( userId, capabilities ) => ( {
	type: USER_CAPABILITIES_UPDATE,
	userId,
	capabilities,
} );

export const updateUserProfile = ( userId, profile ) => ( {
	type: USER_PROFILE_UPDATE,
	userId,
	profile,
} );
