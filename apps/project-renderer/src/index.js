/**
 * External dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { StyleProvider } from '@crowdsignal/components';
import { Route, Router } from '@crowdsignal/router';
import App from './components/app';

const renderProject = () => {
	const container = document.getElementById( 'crowdsignal-project' );
	if ( ! container ) {
		return;
	}

	return render(
		<StyleProvider reset>
			<Router>
				<Route path="/:projectCode" component={ App } />
			</Router>
		</StyleProvider>,
		container
	);
};

// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener( 'load', renderProject );
