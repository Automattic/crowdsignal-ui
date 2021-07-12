/**
 * Internal dependencies
 */
import Popover from '../popover';
import Item from './item';
import Separator from './separator';

/**
 * Style dependencies
 */
import './style.scss';

const PopoverMenu = ( { children, ...popoverProps } ) => (
	<Popover { ...popoverProps }>
		<div className="popover-menu">{ children }</div>
	</Popover>
);

PopoverMenu.Item = Item;
PopoverMenu.Separator = Separator;

export default PopoverMenu;
