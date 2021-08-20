/**
 * External dependencies
 */
import { get, isEqual, omit } from 'lodash';

/**
 * Creates a super-reducer as a map of reducers over keyed objects
 *
 * @param  {string}   keyPath Lodash-style path to the key in action referencing item in state map
 * @param  {Function} reducer Reducer applied to every item in the state map
 * @return {Function}         Super-reducer applying reducer over a map of keyed items
 */
export const keyedReducer = ( keyPath, reducer ) => {
	const initialState = reducer( undefined, {} );

	return ( state = {}, action ) => {
		const itemKey = get( action, keyPath, undefined );

		if ( itemKey === null || itemKey === undefined ) {
			return state;
		}

		const newItemState = reducer( state[ itemKey ], action );

		// If new state equals old state do nothing
		if ( newItemState === state[ itemKey ] ) {
			return state;
		}

		// Remove the key when new state is undefined or equals initial state
		if (
			newItemState === undefined ||
			isEqual( newItemState, initialState )
		) {
			return state.hasOwnProperty( itemKey )
				? omit( state, itemKey )
				: state;
		}

		return {
			...state,
			[ itemKey ]: newItemState,
		};
	};
};
