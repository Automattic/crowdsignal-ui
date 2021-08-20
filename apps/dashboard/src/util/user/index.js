/**
 * External dependencies
 */
import { includes } from 'lodash';

/**
 * Internal dependencies
 */
import * as AccountType from './account-types';

export const isPro = ( user ) => user.accountType === AccountType.PRO;

export const isJetpackPro = ( user ) =>
	user.accountType === AccountType.JETPACK_PRO;

export const isCorporate = ( user ) =>
	includes(
		[ AccountType.CORPORATE, AccountType.CORPORATE_6_MONTHLY ],
		user.accountType
	);

export const isEnterprise = ( user ) =>
	user.accountType === AccountType.ENTERPRISE;

export const isVIP = ( user ) => user.accountType === AccountType.VIP;

export const isPremium = ( user ) => user.accountType === AccountType.PREMIUM;

export const isBusiness = ( user ) => user.accountType === AccountType.BUSINESS;

export const isTeam = ( user ) => user.accountType === AccountType.TEAM;

export const hasCapability = ( user, capability ) =>
	includes( user.capabilities, capability );
