/**
 * External dependencies
 */
import { get } from 'lodash';

export const getAccountType = ( state, accountId ) =>
	get( state, [ 'accounts', accountId, 'type' ], null );

export const getAccountDomain = ( state, accountId ) =>
	get( state, [ 'accounts', accountId, 'domain' ], '' );

export const getAccountSignalCount = ( state, accountId ) =>
	get( state, [ 'accounts', accountId, 'signalCount' ], 0 );

export const getAccountPartnerUserId = ( state, accountId ) =>
	get( state, [ 'accounts', accountId, 'partnerUserId' ], 0 );
