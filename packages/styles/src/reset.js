/**
 * External dependencies
 */
import { css } from '@emotion/core';

/**
 * Internal dependencies
 */
import { color } from './colors';

export const reset = css`
	:host {
		color: ${ color( 'text' ) };
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}

	button, input, textarea {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";		
	}
`;
