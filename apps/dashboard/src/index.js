/**
 * External dependencies
 */
import { render } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { StyleProvider } from '@crowdsignal/components';
import { setHostHeader } from '@crowdsignal/http';
import { fetchEmbedContent } from '@crowdsignal/rest-api';
import App from './components/app';

const renderApp = () =>
	render(
		<StyleProvider reset namespace="crowdsignal">
			<App />
		</StyleProvider>,
		document.getElementById( 'crowdsignal-dashboard' )
	);

window.addEventListener( 'load', () => {
	if ( document.body.dataset.ajaxNonce ) {
		setHostHeader(
			'https://api.crowdsignal.com',
			'x-ajax-api-token',
			document.body.dataset.ajaxNonce
		);
	}

	renderApp();
} );

// Intercept Editor's oembed requests
apiFetch.use( ( options, next ) => {
	if ( options?.path.indexOf( '/oembed' ) !== -1 ) {
		const [ , queryString ] = options.path.split( '?' );
		const params = new URLSearchParams( queryString );
		const query = Object.fromEntries( params );

		return fetchEmbedContent( query ).then( ( { data } ) => data );
	}

	return next( options );
} );
