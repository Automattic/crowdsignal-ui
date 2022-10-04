/**
 * External dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { StyleProvider } from '@crowdsignal/components';
// import { setHostHeader } from '@crowdsignal/http';
import App from './components/app';

const renderApp = () => {
	const container = document.getElementById( 'live-stats-app' );
	if ( ! container ) {
		return;
	}

	const appProps = {};

	if ( container.dataset.preset ) {
		appProps.preset = container.dataset.preset;
	}

	return render(
		<StyleProvider reset namespace="crowdsignal">
			<App { ...appProps } />
		</StyleProvider>,
		container
	);
};

window.addEventListener( 'load', () => {
	renderApp();
} );
