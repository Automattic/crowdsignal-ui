/**
 * External dependencies
 */
import { isNumber } from 'lodash';

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
	borderRadius: isNumber( borderRadius ) ? `${ borderRadius }px` : null,
	borderWidth: isNumber( borderWidth ) ? `${ borderWidth }px` : null,
} );
