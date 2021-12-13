/**
 * External dependencies
 */
import { createElement, useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { RouterContext } from './context';
import { matchRoute } from './util';

export const Route = ( { component, path, ...props } ) => {
	const currentLocation = useContext( RouterContext );

	const match = matchRoute( path, currentLocation.path );

	if ( ! match ) {
		return null;
	}

	return createElement( component, {
		...match,
		...currentLocation.query,
		...props,
	} );
};
