/**
 * External dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { StyleProvider } from '@crowdsignal/components';
import App from './components/app';

const renderProject = () => {
	const container = document.getElementById( 'crowdsignal-project' );
	if ( ! container ) {
		return;
	}
	const { pid, page, rid, startDate } = container.dataset;

	// default to location path
	const projectId = pid
		? pid
		: window.location.pathname.replaceAll( '/', '' );

	return render(
		<StyleProvider reset>
			<App
				projectCode={ projectId }
				page={ page }
				respondentId={ rid }
				startTime={ startDate }
			/>
		</StyleProvider>,
		container
	);
};

// eslint-disable-next-line @wordpress/no-global-event-listener
window.addEventListener( 'load', renderProject );
