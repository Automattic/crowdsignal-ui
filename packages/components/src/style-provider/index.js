/**
 * External dependencies
 */
import { CacheProvider, Global } from '@emotion/core';
import createCache from '@emotion/cache';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { reset as resetCSS } from '@crowdsignal/styles';

const StyleProvider = ( { container, children, namespace, reset } ) => {
	const [ cache ] = useState(
		createCache( {
			key: namespace,
			container: container || document.head,
		} )
	);

	return (
		<CacheProvider value={ cache }>
			{ reset && <Global styles={ resetCSS } /> }

			{ children }
		</CacheProvider>
	);
};

export default StyleProvider;
