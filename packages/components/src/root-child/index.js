/**
 * External dependencies
 */
import { createPortal, useEffect, useRef } from '@wordpress/element';

const RootChild = ( { children } ) => {
	const container = useRef( document.createElement( 'div' ) );

	useEffect( () => {
		const element = container.current;

		document.body.appendChild( element );

		return () => document.body.removeChild( element );
	}, [] );

	return createPortal( children, container.current );
};

export default RootChild;
