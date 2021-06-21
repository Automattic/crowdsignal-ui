/**
 * External dependencies
 */
import { join, keys, map, reduce, trimEnd } from 'lodash';

/**
 * Converts an object into a URL query string.
 *
 * @param  {object} query A map of request query parameters.
 * @return {string}        Query string.
 */
export const queryString = ( query ) => {
	const values = join( map(
		query,
		( value, key ) => `${ key }=${ encodeURIComponent( value ) }`
	), '&' );

	return trimEnd( `?${ values }`, '?' );
};

/**
 * Takes the headers from a Response object and parses them into a plain object.
 *
 * @param  {Response} response Response object.
 * @return {object}            Response headers.
 */
export const extractHeaders = ( response ) => {
	const headers = {};

	// Apparently eslint has issues with defining variables inside loops
	// eslint-disable-next-line
	for ( let [ key, value ] of response.headers.entries() ) {
		headers[ key ] = value;
	}

	return headers;
};

export const objectToFormData = ( formData ) =>
	reduce(
		keys( formData ),
		( form, key ) => {
			form.append( key, formData[key] );
			return form;
		},
		new FormData()
	);
