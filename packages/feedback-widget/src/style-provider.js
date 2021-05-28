/**
 * External dependencies
 */
import { CacheProvider } from '@emotion/core';
import createCache from '@emotion/cache';
import { useEffect, useRef, useState } from '@wordpress/element';

const StyleProvider = ( { container, children, namespace } ) => {
	const [ cache ] = useState(
		createCache( {
			key: namespace,
			container: container || document.head,
		} )
	);

	return (
		<CacheProvider value={ cache }>
			{ children }
		</CacheProvider>
	);
};

export default StyleProvider;
