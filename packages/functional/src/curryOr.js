// @ts-check

/**
 * Logical OR for combining multiple curried functions or expressions:
 *
 * or( caseA, caseB( args ), caseC, 'default' )( a )
 *
 * @param  {any[]}           expressions
 * @return {(a: any) => any}
 */
export const curryOr = ( ...expressions ) => ( value ) => {
	for ( let i = 0; i < expressions.length; ++i ) {
		const result =
			typeof expressions[ i ] === 'function'
				? expressions[ i ]( value )
				: expressions[ i ];

		if ( result || i === expressions.length - 1 ) {
			return result;
		}
	}
};
