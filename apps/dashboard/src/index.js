/**
 * External dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { StyleProvider } from '@crowdsignal/components';
import { setHostHeader } from '@crowdsignal/http';
import App from './components/app';

const renderApp = () =>
	render(
		<StyleProvider reset>
			<App />
		</StyleProvider>,
		document.getElementById( 'crowdsignal-dashboard' )
	);

// eslint-disable-next-line @wordpress/no-global-event-listener
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
