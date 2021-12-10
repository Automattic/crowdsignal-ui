/**
 * External dependencies
 */
import { get, inRange, merge, omit } from 'lodash';

/**
 * Internal dependencies
 */
import { extractHeaders, queryString } from './util';

/**
 * Global headers added to every request.
 *
 * @type {Object}
 */
const globalHeaders = {
	'Content-Type': 'application/json',
};

/**
 * Host specific headers added to every request to the host.
 *
 * @type {Object}
 */
const hostHeaders = {};

/**
 * Host specific options added to every request to the host.
 *
 * @type {Object}
 */
const hostOptions = {};

/**
 * Adds a key/value pair to the global headers array that's
 * appended to every ajax request.
 *
 * @param  {string} key   Header name
 * @param  {string} value Header value
 * @return {void}
 */
export const setGlobalHeader = ( key, value ) =>
	( globalHeaders[ key ] = value );

/**
 * Adds a key/value pair to the host specific headers array
 * appended to every ajax request to the given host.
 *
 * @param  {string} host  Hostname including protocol.
 *                        Should be the same as the 'host' param for http() calls.
 * @param  {string} key   Header name
 * @param  {string} value Header value
 * @return {void}
 */
export const setHostHeader = ( host, key, value ) =>
	( hostHeaders[ host ] = {
		...hostHeaders[ host ],
		[ key ]: value,
	} );

/**
 * Returns the header value that's set for the given key(/host).
 *
 * @param  {string} key  Header key
 * @param  {string} host Header host if host specific
 * @return {any}         Value
 */
export const getHeader = ( key, host = '' ) => {
	if ( host && hostHeaders[ host ] && hostHeaders[ host ][ key ] ) {
		return hostHeaders[ host ][ key ];
	}

	return globalHeaders[ key ];
};

/**
 * Adds a key/value pair to the host specific options array
 * appended to every ajax request to the given host.
 *
 * @param  {string} host  Hostname including protocol.
 *                        Should be the same as the 'host' param for http() calls.
 * @param  {string} key   Option key
 * @param  {string} value Option value
 * @return {void}
 */
export const setHostOption = ( host, key, value ) =>
	( hostOptions[ host ] = {
		...hostOptions[ host ],
		[ key ]: value,
	} );

/**
 * Handles failed requests/error responses.
 *
 * @param  {Response} response Response object.
 * @return {Promise}           Promise with the parsed error object.
 */
const onRequestFailed = ( response ) => {
	return response.json().then( ( data ) =>
		Promise.reject( {
			status: get( response, 'status', 500 ),
			data,
		} )
	);
};

/**
 * Handles successful requests and parses the response into an object
 * containing response data and headers.
 *
 * @param  {Response} rawResponse Response object.
 * @return {Promise}              Promise with the parsed response.
 */
const onRequestSuccess = ( rawResponse ) => {
	if ( ! inRange( rawResponse.status, 200, 300 ) ) {
		return Promise.reject( rawResponse );
	}

	return rawResponse.json().then( ( data ) =>
		Promise.resolve( {
			headers: extractHeaders( rawResponse ),
			data,
		} )
	);
};

/**
 * A basic fetch API wrapper that takes care of parsing responses
 * and interpreting fetch/response errors.
 *
 * @param  {Object}  options Request options.
 * @return {Promise}         Request promise.
 */
export const http = ( options ) => {
	const requestOptions = {
		...( hostOptions[ options.host ] || [] ),
		...omit( options, [ 'headers', 'host', 'path', 'query' ] ),
	};

	requestOptions.headers = merge(
		globalHeaders,
		get( hostHeaders, [ options.host ], {} ),
		options.headers
	);

	return window
		.fetch(
			`${ options.host }${ options.path }${ queryString(
				options.query || {}
			) }`,
			requestOptions
		)
		.then( onRequestSuccess )
		.catch( onRequestFailed );
};
