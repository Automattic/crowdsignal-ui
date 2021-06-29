/**
 * External dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { StyleProvider } from '@crowdsignal/components';
import FeedbackWidget from './widget';

const renderWidget = ( surveyId ) => {
	const wrapperElement = document.createElement( 'div' );
	document.body.appendChild( wrapperElement );

	const shadowRoot = wrapperElement.attachShadow( { mode: 'open' } );

	render(
		<StyleProvider
			reset
			namespace="feedback-widget"
			container={ shadowRoot }
		>
			<FeedbackWidget surveyId={ surveyId } />
		</StyleProvider>,
		shadowRoot
	);
};

export default renderWidget;

export { default as FeedbackWidget } from './widget';
