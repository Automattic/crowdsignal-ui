/**
 * External dependencies
 */
import { css } from '@emotion/react';

/**
 * Internal dependencies
 */
import { colorVars } from './colors';

export const resetStyles = ( { shadowRoot = false } ) => css`
	${ shadowRoot ? ':host' : ':root' } {
		${ colorVars() };

		color: var( --color-text );
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol';
	}

	body {
		margin: 0;
		padding: 0;
	}

	a {
		color: var( --color-text );
	}

	button,
	input,
	textarea {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol';
		font-size: 100%;
	}

	iframe {
		border: 0;
	}
`;
