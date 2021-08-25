/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { getUser } from '../users/selectors';

export const getCurrentUserId = ( state ) =>
	get( state, [ 'ui', 'currentUserId' ], 0 );

export const getCurrentUser = ( state ) =>
	getUser( state, getCurrentUserId( state ) );
