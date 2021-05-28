/**
 * External dependencies
 */
import { createPortal, useEffect, useRef, useState } from '@wordpress/element';
import { isFunction } from 'lodash';

const ShadowRoot = ( { children } ) => {
	const [ shadowRoot, setShadowRoot ] = useState( null );
	const container = useRef();

	useEffect( () => {
		// if ( ! container ) {
		// 	return;
		// }

		setShadowRoot(
			container.current.attachShadow( { mode: 'closed' } )
		);
	}, [ container.current ] );

	return (
		<>
			<div ref={ container } />
{/*			{ shadowRoot && createPortal(
				isFunction( children )
					? children( { root: shadowRoot } )
					: children,
				shadowRoot
			) }*/}
		</>
	);
};

export default ShadowRoot;
