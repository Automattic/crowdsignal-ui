export const breakpoint = ( size ) => {
	const direction = size.slice( 0, 1 );
	const screenSize = size.slice( 1 );

	const minMax = direction === '>' ? 'min' : 'max';

	return `@media screen and (${ minMax }-width: ${ screenSize })`;
};
