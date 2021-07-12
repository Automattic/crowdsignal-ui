/**
 * External dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { StyleProvider } from '@crowdsignal/components';
import App from './components/app';

const renderApp = () =>
	render(
		<StyleProvider reset>
			<App />
		</StyleProvider>,
		document.getElementById( 'crowdsignal-dashboard' )
	);

// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener( 'load', renderApp );
