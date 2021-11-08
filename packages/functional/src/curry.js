/* eslint-disable jsdoc/valid-types */
// @ts-check

/**
 * @template F
 *
 * @typedef {F extends ((...args: infer A) => any) ? A : never} Params
 */

/**
 * @template T
 *
 * @typedef {T extends [any, ...any[]] ? T[0] : never} Head
 */

/**
 * @template T
 *
 * @typedef {T extends [_: any, ...tail: infer TT] ? TT : []} Tail
 */

/**
 * @template F
 *
 * @typedef {F extends ((...args: any[]) => infer R) ? R : never} ReturnType
 */

/**
 * Enables optional currying for the first argument of the passed function:
 *
 * @template F
 *
 * @param  {F extends (...args: any[]) => any ? F : never} func Function to curry
 * @return {{
 *   (...args: Params<F>): ReturnType<F>;
 *   (...args: Tail<Params<F>>): (a: Head<Params<F>>) => ReturnType<F>;
 * }}
 */
export const curry = ( func ) => ( ...args ) => {
	if ( args.length === func.length - 1 ) {
		return ( subject ) => func( subject, ...args );
	}

	return func( ...args );
};
