/**
 * Returns the current block style based on its className
 *
 * @param  {string} className Block class name
 * @return {string}           Block style
 */
export const getBlockStyle = ( className ) =>
	className.match( /is-style-([^\s]+)/i )[ 1 ];
