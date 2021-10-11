/**
 * External dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { StyleProvider } from '@crowdsignal/components';
import App from './components/app';

const renderProject = () =>
	render(
		<StyleProvider reset>
			<App
				project={ window.__CS_PROJECT__.project }
				page={ window.__CS_PROJECT__.p }
				responseHash={ window.__CS_PROJECT__.r }
				startDate={ window.__CS_PROJECT__.startDate }
			/>
		</StyleProvider>,
		document.getElementById( 'crowdsignal-project' )
	);

// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener( 'load', renderProject );
