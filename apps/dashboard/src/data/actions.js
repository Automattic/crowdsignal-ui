/**
 * Internal dependencies
 */
import { ASYNC_ROUTINE_DISPATCH } from './action-types';

export const dispatchAsync = ( apply, args = [] ) => ( {
	type: ASYNC_ROUTINE_DISPATCH,
	apply,
	args,
} );
