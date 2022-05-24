/**
 * External dependencies
 */
import { useCallback, useEffect } from '@wordpress/element';
import { first, forEach, some } from 'lodash';

const getDocumentRoots = ( elements ) =>
	elements
		.map( ( { current } ) => {
			return current ? current.ownerDocument : null;
		} )
		.filter( ( ownerDocument ) => !! ownerDocument )
		.reduce(
			( documents, ownerDocument ) => [
				...documents,
				...( documents.includes( ownerDocument )
					? []
					: [ ownerDocument ] ),
			],
			[]
		);

const useBlur = ( onBlur, elements = [] ) => {
	const handleClick = useCallback(
		( event ) => {
			const target = first( event.composedPath() );

			if (
				some(
					elements,
					( element ) =>
						! element.current || element.current.contains( target )
				)
			) {
				return;
			}

			onBlur( event );
		},
		[ onBlur, ...elements ]
	);

	useEffect( () => {
		const documentRoots = getDocumentRoots( elements );

		forEach( documentRoots, ( root ) =>
			root.addEventListener( 'mousedown', handleClick )
		);

		return () =>
			forEach( documentRoots, ( root ) =>
				root.removeEventListener( 'mousedown', handleClick )
			);
	}, [ handleClick, ...elements ] );
};

export default useBlur;
