/**
 * External dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { StyleProvider } from '@crowdsignal/components';
import { setHostHeader } from '@crowdsignal/http';
import { Route, Router } from '@crowdsignal/router';
import ProjectForm from './components/project-form';

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
		<StyleProvider reset namespace="crowdsignal">
			<Router>
				<Route
					path="/:projectCode"
					component={ ProjectForm }
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

	if ( !! window.embedCardSettings ) {
		window.parent.postMessage(
			{
				type: 'crowdsignal-forms-project-embed-card',
				embedCardSettings: window.embedCardSettings,
			},
			'*'
		);
	}

	if ( !! window.embedPopupSettings ) {
		window.parent.postMessage(
			{
				type: 'crowdsignal-forms-project-embed-popup',
				embedPopupSettings: window.embedPopupSettings,
			},
			'*'
		);
	}

	renderProject();
} );
