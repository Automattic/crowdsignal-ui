/**
 * External dependencies
 */
import { Global } from '@emotion/core';

/**
 * Internal dependencies
 */
import StyleProvider from '../packages/components/src/style-provider';

export const decorators = [
	( Story ) => (
		<StyleProvider reset namespace="crowdsignal">
			<Story />
		</StyleProvider>
	),
];
