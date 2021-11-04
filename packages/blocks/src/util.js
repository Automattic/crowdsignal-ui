/**
 * Returns the current block style based on its className
 *
 * @param  {string} className Block class name
 * @return {string}           Block style
 */
export const getBlockStyle = ( className ) => {
	const styleClass =
		className && className.match( /is-style-([^\s]+)/i )[ 1 ];

	return styleClass ? styleClass[ 1 ] : '';
};
