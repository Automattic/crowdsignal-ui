/**
 * External dependencies
 */
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/core';

import { render } from '@wordpress/element';
import { isNumber } from 'lodash';

/**
 * Internal dependencies
 */
import FeedbackWidget from './widget';
import StyleProvider from './style-provider';

const renderWidget = ( surveyId ) => {
	const wrapperElement = document.createElement( 'div' );
	document.body.appendChild( wrapperElement );

	const shadowRoot = wrapperElement.attachShadow( { mode: 'closed' } );

	render(
		<StyleProvider namespace="feedback-widget" container={ shadowRoot }>
			<FeedbackWidget surveyId={ surveyId } />
		</StyleProvider>,
		shadowRoot
	);
};

export default renderWidget;

export { default as FeedbackWidget } from './widget';
