/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { getUser } from 'data/users/selectors';

export const getCurrentUserId = ( state ) =>
	get( state, [ 'ui', 'currentUserId' ], 0 );

export const getCurrentUser = ( state ) =>
	getUser( state, getCurrentUserId( state ) );
