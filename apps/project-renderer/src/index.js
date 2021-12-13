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

// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener( 'load', renderProject );
