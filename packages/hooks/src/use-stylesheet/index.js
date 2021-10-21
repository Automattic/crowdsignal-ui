/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';

const useStylesheet = ( url ) => {
	useEffect( () => {
		const link = document.createElement( 'link' );

		link.setAttribute( 'rel', 'stylesheet' );
		link.setAttribute( 'type', 'text/css' );
		link.setAttribute( 'href', url );

		document.head.appendChild( link );

		return () => document.head.removeChild( link );
	}, [ url ] );
};

export default useStylesheet;
