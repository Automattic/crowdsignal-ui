/**
 * External dependencies
 */
import { isFinite } from 'lodash';

export const useColorStyles = ( {
	backgroundColor,
	gradient,
	textColor,
} ) => ( {
	background: gradient || backgroundColor,
	color: textColor,
} );

export const useBorderStyles = ( {
	borderColor,
	borderRadius,
	borderWidth,
} ) => ( {
	borderColor,
	borderRadius: isFinite( parseInt( borderRadius, 10 ) )
		? `${ borderRadius }px`
		: null,
	borderWidth: isFinite( parseInt( borderWidth, 10 ) )
		? `${ borderWidth }px`
		: null,
} );
