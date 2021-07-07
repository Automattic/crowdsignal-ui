/**
 * External dependencies
 */
import { useRef, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Button from '../../button';
import PopoverMenu from '../';

export default {
	title: 'Components/Popover Menu',
	component: PopoverMenu,
};

const Default = () => {
	const [ active, setActive ] = useState( false );
	const toggle = useRef();

	const hideMenu = () => setActive( false );
	const toggleMenu = () => setActive( ! active );

	return (
		<>
			<Button ref={ toggle } onClick={ toggleMenu }>
				Toggle Menu
			</Button>

			<PopoverMenu
				isVisible={ active }
				context={ toggle }
				onClose={ hideMenu }
			>
				<PopoverMenu.Item>Option A</PopoverMenu.Item>
				<PopoverMenu.Item>Option B</PopoverMenu.Item>

				<PopoverMenu.Separator />

				<PopoverMenu.Item href="#">Link</PopoverMenu.Item>
			</PopoverMenu>
		</>
	);
};
export { Default as PopoverMenu };
