/**
 * External dependencies
 */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from '@wordpress/element';
import classnames from 'classnames';
import { first, some } from 'lodash';

/**
 * Internal dependencies
 */
import { getPopoverOffset } from './util';

/**
 * Style dependencies
 */
import { Content, Wrapper } from './styles';

export const useOnOutsideClick = ( onOutsideClick, elements ) => {
	const handleClick = useCallback( ( event ) => {
		const target = first( event.composedPath() );

		if ( some( elements, ( element ) => ! element.current || element.current.contains( target ) ) ) {
			return;
		}

		onOutsideClick();
	}, [ onOutsideClick, elements ] );

	useEffect( () => {
		document.addEventListener( 'mousedown', handleClick );

		return () => document.removeEventListener( 'mousedown', handleClick );
	}, [ handleClick ] );
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
		setOffset( getPopoverOffset(
			position,
			popover.current,
			context.current
		) );
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
