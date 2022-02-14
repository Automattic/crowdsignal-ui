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
import { Route, Router } from '@crowdsignal/router';
import App from './components/app';

apiFetch.use( embedRequestInterceptor );

const renderProject = () => {
	const container = document.getElementById( 'crowdsignal-project' );
	if ( ! container ) {
		return;
	}

	const projectProps = {};

	if ( container.dataset.pid ) {
		projectProps.projectCode = container.dataset.pid;
	}

	return render(
		<StyleProvider reset>
			<Router>
				<Route
					path="/:projectCode"
					component={ App }
					{ ...projectProps }
				/>
			</Router>
		</StyleProvider>,
		container
	);
};

window.addEventListener( 'load', () => {
	if ( document.body.dataset.ajaxNonce ) {
		setHostHeader(
			'https://api.crowdsignal.com',
			'x-ajax-api-token',
			document.body.dataset.ajaxNonce
		);
	}

	renderProject();
} );
