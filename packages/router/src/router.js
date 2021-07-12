/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { RouterContext, history } from './context';
import { getLinkElement, hasLocalTarget, parseLocation } from './util';

export const Router = ( { children, allowedRoutes = /.*/i } ) => {
	const [ route, setRoute ] = useState( parseLocation( history.location ) );

	const handleRouteChange = useCallback(
		( historyEvent ) => setRoute( parseLocation( historyEvent.location ) ),
		[ setRoute ]
	);

	const handleLinkClick = useCallback( ( event ) => {
		const linkElement = getLinkElement( event.target );

		if ( ! linkElement || ! hasLocalTarget( linkElement, allowedRoutes ) ) {
			return;
		}

		const url = new URL( linkElement.href );

		event.preventDefault();
		history.push( `${ url.pathname }${ url.search }` );
	}, [] );

	useEffect( () => {
		const unsubscribe = history.listen( handleRouteChange );
		// eslint-disable-next-line @wordpress/no-global-event-listener
		window.addEventListener( 'click', handleLinkClick );

		return () => {
			unsubscribe();
			// eslint-disable-next-line @wordpress/no-global-event-listener
			window.removeEventListener( 'click', handleLinkClick );
		};
	}, [] );

	return (
		<RouterContext.Provider value={ route }>
			{ children }
		</RouterContext.Provider>
	);
};
