/**
 * External dependencies
 */
import { lowerCase } from 'lodash';

const POPOVER_OFFSET = 10;

export const getPopoverOffset = ( position, popover, context ) => {
	if ( ! context || ! popover ) {
		return;
	}

	const contextBox = context.getBoundingClientRect();
	const popoverBox = popover.getBoundingClientRect();

	switch ( lowerCase( position ) ) {
		case 'top right':
			return {
				bottom: window.innerHeight - context.top + POPOVER_OFFSET,
				left: contextBox.left,
			};

		case 'top left':
			return {
				bottom: window.innerHeight - contextBox.top + POPOVER_OFFSET,
				right: window.innerWidth - contextBox.left - contextBox.width,
			};

		case 'center left':
			return {
				right: window.innerWidth - contextBox.left + POPOVER_OFFSET,
				top: contextBox.top + ( contextBox.height - popoverBox.height ) / 2,
			};

		case 'center right':
			return {
				left: contextBox.left + contextBox.width + POPOVER_OFFSET,
				top: contextBox.top + ( contextBox.height - popoverBox.height ) / 2,
			};

		case 'bottom right':
			return {
				top: contextBox.top + contextBox.height + POPOVER_OFFSET,
				left: contextBox.left,
			};

		case 'bottom left':
		default:
			return {
				right: window.innerWidth - contextBox.left - contextBox.width,
				top: contextBox.top + contextBox.height + POPOVER_OFFSET,
			};
	}
};
