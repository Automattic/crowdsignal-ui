/**
 * External dependencies
 */
import { includes } from 'lodash';

/**
 * Internal dependencies
 */
import * as AccountType from './account-types';

export const isPro = ( user ) => user.account.type === AccountType.PRO;

export const isJetpackPro = ( user ) =>
	user.account.type === AccountType.JETPACK_PRO;

export const isCorporate = ( user ) =>
	includes(
		[ AccountType.CORPORATE, AccountType.CORPORATE_6_MONTHLY ],
		user.account.type
	);

export const isEnterprise = ( user ) =>
	user.account.type === AccountType.ENTERPRISE;

export const isVIP = ( user ) => user.account.type === AccountType.VIP;

export const isPremium = ( user ) => user.account.type === AccountType.PREMIUM;

export const isBusiness = ( user ) =>
	user.account.type === AccountType.BUSINESS;

export const isTeam = ( user ) => user.account.type === AccountType.TEAM;

export const hasCapability = ( user, capability ) =>
	includes( user.capabilities, capability );
