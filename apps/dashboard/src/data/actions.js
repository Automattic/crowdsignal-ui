/**
 * Internal dependencies
 */
import { ASYNC_ROUTINE_DISPATCH, FINISH_RESOLUTION } from './action-types';

export const dispatchAsync = ( apply, args = [] ) => ( {
	type: ASYNC_ROUTINE_DISPATCH,
	apply,
	args,
} );

export const finishResolution = ( selectorName, args ) => ( {
	type: FINISH_RESOLUTION,
	selectorName,
	args,
} );
