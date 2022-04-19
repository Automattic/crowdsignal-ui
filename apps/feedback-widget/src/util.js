/**
 * External dependencies
 */
import { isObject } from 'lodash';

const addFrameOffsets = ( offset, frame ) => ( {
	left: offset.left + frame.x + window.scrollX,
	right:
		offset.right +
		( window.innerWidth > frame.left + frame.width
			? window.innerWidth - frame.left - frame.width
			: 0 ),
	top: offset.top + frame.y + window.scrollY,
	bottom:
		offset.bottom +
		( window.innerHeight > frame.top + frame.height
			? window.innerHeight - frame.top - frame.height
			: 0 ),
} );

const getToggleHorizontalPosition = ( align, width, offset ) => {
	return {
		left: align === 'left' ? offset.left : null,
		right: align === 'right' ? offset.right : null,
	};
};

const getToggleVerticalPosition = ( verticalAlign, height, offset ) => {
	if ( verticalAlign === 'center' ) {
		return {
			top: ( window.innerHeight - height ) / 2,
			bottom: null,
		};
	}

	return {
		top: verticalAlign === 'top' ? offset.top : null,
		bottom: verticalAlign === 'bottom' ? offset.bottom : null,
	};
};

export const getTogglePosition = (
	position,
	width,
	height,
	padding,
	frameElement = null
) => {
	const [ y, x ] = position.split( ' ' );

	let offset = isObject( padding )
		? padding
		: {
				left: padding,
				right: padding,
				top: padding,
				bottom: padding,
		  };

	if ( frameElement ) {
		offset = addFrameOffsets(
			offset,
			frameElement.getBoundingClientRect()
		);
	}

	return {
		...getToggleHorizontalPosition( x, width, offset ),
		...getToggleVerticalPosition( y, height, offset ),
	};
};

export const adjustFrameOffset = ( position, verticalAlign, width, height ) => {
	if ( verticalAlign !== 'center' ) {
		return position;
	}

	return {
		...position,
		left: position.left !== null ? position.left - width + height : null,
		right: position.right !== null ? position.right - width + height : null,
	};
};

export const getPopoverPosition = ( position ) => {
	const [ y, x ] = position.split( ' ' );

	if ( y === 'center' ) {
		return x === 'left' ? 'center right' : 'center left';
	}

	if ( y === 'bottom' ) {
		return x === 'left' ? 'top right' : 'top left';
	}

	return x === 'left' ? 'bottom right' : 'bottom left';
};
