/**
 * External dependencies
 */
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from '@wordpress/element';
import classnames from 'classnames';
import { first, forEach, some } from 'lodash';

/**
 * Internal dependencies
 */
import { getPopoverOffset } from './util';

/**
 * Style dependencies
 */
import { Wrapper } from './styles';

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

export const useOnOutsideClick = ( onOutsideClick, elements = [] ) => {
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

			onOutsideClick();
		},
		[ onOutsideClick, ...elements ]
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

const Popover = ( {
	children,
	className,
	context,
	isVisible,
	onClose,
	position,
} ) => {
	const [ offset, setOffset ] = useState( {} );

	const popover = useRef();

	useLayoutEffect( () => {
		setOffset(
			getPopoverOffset( position, popover.current, context.current )
		);
	}, [ context.current, popover.current, position ] );

	useOnOutsideClick( onClose, [ popover, context ] );

	const classes = classnames( 'popover', className );

	if ( ! isVisible || ! context.current ) {
		return null;
	}

	return (
		<Wrapper ref={ popover } className={ classes } position={ offset }>
			{ children }
		</Wrapper>
	);
};

export default Popover;
