/**
 * External dependencies
 */
import { Global } from '@emotion/core';

/**
 * Internal dependencies
 */
import { StyleProvider } from '@crowdsignal/components';

export const decorators = [
	( Story ) => (
		<StyleProvider reset>
			<Story />
		</StyleProvider>
	),
];
