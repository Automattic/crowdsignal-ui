/**
 * External dependencies
 */
import { useLayoutEffect, useRef, useState } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useBlur } from '@crowdsignal/hooks';
import { getPopoverOffset } from './util';

/**
 * Style dependencies
 */
import { Wrapper } from './styles';

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
	}, [ context.current, isVisible, popover.current, position ] );

	useBlur( onClose, [ popover, context ] );

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
