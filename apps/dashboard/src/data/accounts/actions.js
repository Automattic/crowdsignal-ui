/**
 * Internal dependencies
 */
import { ACCOUNT_SIGNAL_COUNT_UPDATE, ACCOUNT_UPDATE } from '../action-types';

export const updateAccount = (
	accountId,
	partnerUserId,
	type,
	userIds,
	domain,
	signalLimit
) => ( {
	type: ACCOUNT_UPDATE,
	accountType: type,
	accountId,
	partnerUserId,
	domain,
	signalLimit,
	userIds,
} );

export const updateAccountSignalCount = ( accountId, count ) => ( {
	type: ACCOUNT_SIGNAL_COUNT_UPDATE,
	accountId,
	count,
} );
