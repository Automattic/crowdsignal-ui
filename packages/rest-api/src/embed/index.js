/**
 * External dependencies
 */
import { tap } from 'lodash';

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
	} ).then( ( response ) =>
		tap( response, ( { data } ) => {
			const doc = document.implementation.createHTMLDocument( '' );
			doc.body.innerHTML = response.data.html;
			const wrapper = doc.querySelector( '[class^="embed-"]' );

			if ( ! data.html || ! wrapper ) {
				return;
			}

			data.html = wrapper.innerHTML;
		} )
	);
