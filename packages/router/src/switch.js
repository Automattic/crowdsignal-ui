/**
 * External components
 */
import {
	Children,
	cloneElement,
	isValidElement,
	useContext,
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import { RouterContext } from './context';
import { matchRoute } from './util';

export const Switch = ( { children } ) => {
	const currentLocation = useContext( RouterContext );

	let match = null;

	Children.forEach( children, ( child ) => {
		if ( ! isValidElement( child ) ) {
			return;
		}

		match =
			! match &&
			child.props.path &&
			matchRoute( child.props.path, currentLocation.path )
				? child
				: match;
	} );

	return cloneElement( match );
};
