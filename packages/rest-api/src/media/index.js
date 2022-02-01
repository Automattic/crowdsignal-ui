/**
 * Internal dependencies
 */
import { http, objectToFormData } from '@crowdsignal/http';

/**
 * @param {File}    file           Media File to Save.
 * @param {?Object} additionalData Additional data to include in the request.
 *
 * @return {Promise} Media Object Promise.
 */
export const createMediaFromFile = ( file, additionalData = {} ) => {
	// Create upload payload
	const data = objectToFormData( additionalData );
	data.append( 'file', file, file.name || file.type.replace( '/', '.' ) );

	return http( {
		host: 'https://api.crowdsignal.com',
		path: '/v4/media',
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		body: data,
		skipGlobalHeaders: [ 'Content-Type' ],
	} );
};
