/**
 * External dependencies
 */
import { render, unmountComponentAtNode } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { StyleProvider } from '@crowdsignal/components';
import FeedbackWidget from './widget';

const renderWidget = ( surveyId, settings = {} ) => {
	const wrapperElement = document.createElement( 'div' );
	document.body.appendChild( wrapperElement );

	const shadowRoot = wrapperElement.attachShadow( { mode: 'open' } );

	render(
		<StyleProvider
			reset
			namespace="feedback-widget"
			container={ shadowRoot }
		>
			<FeedbackWidget surveyId={ surveyId } settings={ settings } />
		</StyleProvider>,
		shadowRoot
	);

	return () => {
		unmountComponentAtNode( wrapperElement );
		wrapperElement.remove();
	};
};

export default renderWidget;

export { default as FeedbackWidget } from './widget';
