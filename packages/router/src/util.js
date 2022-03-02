/**
 * External dependencies
 */
import {
	fromPairs,
	isUndefined,
	map,
	split,
	toNumber,
	trimStart,
	mapValues,
} from 'lodash';
import RouteParser from 'route-parser';

/**
 * Parses query strings and returns an object.
 *
 * @param  {string} queryString String to parse.
 * @return {Object}             Query params.
 */
export const parseQuery = ( queryString ) => {
	const queryParams = map(
		split( trimStart( queryString, '?' ), '&' ),
		( param ) => {
			const [ key, value ] = split( param, '=' );

			return [ key, ! isUndefined( value ) ? value : true ];
		}
	);

	return fromPairs( queryParams );
};

/**
 * Converts a Location object to the router's internal format.
 *
 * @param  {Location} location Window location.
 * @return {Object}            Route properties.
 */
export const parseLocation = ( location ) => ( {
	path: location.pathname,
	hash: location.hash,
	query: parseQuery( location.search ),
} );

/**
 * Returns the wrapping <a> element or null if none exists.
 *
 * @param  {Node} element Element to inspect.
 * @return {Node}         Wrapping <a> element.
 */
export const getLinkElement = ( element ) => {
	if ( ! element ) {
		return null;
	}

	return ! element.nodeName.match( /^a$/i )
		? getLinkElement( element.parentNode )
		: element;
};

/**
 * Returns true if the given element has a href attribute
 * pointing at the current domain and matching the includePattern.
 *
 * @param  {Node}    element        Element to inspect.
 * @param  {RegExp}  includePattern Only the URLs matching the pattern will be included.
 * @return {boolean}                True when the element has a matching href attribtue.
 */
export const hasLocalTarget = ( element, includePattern ) => {
	if ( ! element.href || element.target.match( /_?blank$/i ) ) {
		return false;
	}

	const url = new URL( element.href );

	return (
		window.location.origin === url.origin &&
		url.pathname.match( includePattern )
	);
};

/**
 * Attempts to match the path against the pattern and
 * returns an object with props when successful.
 *
 * @param  {string} pattern Route pattern.
 * @param  {string} path    Path.
 * @return {Object}         Matched props. False if the given path is not a match.
 */
export const matchRoute = ( pattern, path ) => {
	const route = new RouteParser( pattern );
	const match = route.match( path );

	return mapValues( match, ( value ) =>
		isNaN( toNumber( value ) ) ? value : toNumber( value )
	);
};
