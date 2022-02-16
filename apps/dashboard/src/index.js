/**
 * External dependencies
 */
import { render } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { embedRequestInterceptor } from '@crowdsignal/rest-api';
import { StyleProvider } from '@crowdsignal/components';
import { setHostHeader } from '@crowdsignal/http';
import App from './components/app';

apiFetch.use( embedRequestInterceptor );

const renderApp = () =>
	render(
		<StyleProvider reset>
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
