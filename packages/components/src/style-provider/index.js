/**
 * External dependencies
 */
import { CacheProvider, Global } from '@emotion/react';
import createCache from '@emotion/cache';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { resetStyles as resetStyles } from '@crowdsignal/styles';

const StyleProvider = ( { container, children, namespace, reset } ) => {
	const [ cache ] = useState(
		createCache( {
			key: namespace,
			container: container || document.head,
		} )
	);

	return (
		<CacheProvider value={ cache }>
			{ reset && (
				<Global
					styles={ resetStyles( {
						shadowRoot: container instanceof window.ShadowRoot,
					} ) }
				/>
			) }

			{ children }
		</CacheProvider>
	);
};

export default StyleProvider;
