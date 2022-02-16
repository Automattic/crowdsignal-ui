/**
 * Internal dependencies
 */
import { http } from '@crowdsignal/http';

export const fetchEmbedContent = ( query ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v4/embed`,
		method: 'GET',
		query,
	} );

export const embedRequestInterceptor = ( options, next ) => {
	if ( options?.path.indexOf( '/oembed' ) !== -1 ) {
		const [ , queryString ] = options.path.split( '?' );
		const params = new URLSearchParams( queryString );
		const query = Object.fromEntries( params );

		return fetchEmbedContent( query ).then( ( { data } ) => {
			if ( data.html ) {
				const doc = document.implementation.createHTMLDocument( '' );
				doc.body.innerHTML = data.html;
				const wrapper = doc.querySelector( '[class^="embed-"]' );
				data.html = wrapper ? wrapper.innerHTML : data.html;
			}

			return data;
		} );
	}

	return next( options );
};
