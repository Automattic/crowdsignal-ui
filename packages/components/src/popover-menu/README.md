# Popover Menu

Component for displaying a popover menu.

## Usage

```javascript
import { useRef, useState } from '@wordpress/element';
import { PopoverMenu } from '@crowdsignal/components';

const Menu () => {
	const [ active, setActive ] = useState( false );
	const toggle = useRef();

	const hideMenu = () => setActive( false );
	const toggleMenu = () => setActive( ! active );

	return (
		<>
			<button ref={ toggle } onClick={ toggleMenu }>
				Toggle Menu
			</button>

			<PopoverMenu
				isVisible={ active }
				context={ toggle }
				onClose={ hideMenu }
			>
				<PopoverMenu.Item>
					Foo
				</PopoverMenu.Item>
				<PopoverMenu.Item>
					Bar
				</PopoverMenu.Item>

				<PopoverMenu.Separator />

				<PopoverMenu.Item href="#">
					Link
				</PopoverMenu.Item>
			</PopoverMenu>
		</>
	);
};
```

## PopoverMenu

Responsible for displaying the menu. Essentially, a styled version of `Popover`.

### Props

**className**: Set a custom className for the main popover container.

- Type: `String|Object`
- Required: No
- Default: `''`

**context**: A reference to the element the popover should attach itself to.

- Type: `ref`
- Required: Yes

**isVisible**: Controls opening and closing of the popover.

- Type: `Boolean`
- Required: No
- Default: `false`

**onClose**: The callback that will be called when the popover should be closed.

- Type: `Function`
- Required: Yes

**position**: Determines the position of the popover relative to the context element.

- Type: `String` - (`auto`, ``top left`, `top right`, `center left`, `center right`, `bottom left`, `bottom right`)
- Required: No
- Default: `bottom left`


## PopoverMenu.Item

These components are responsible for rendering individual menu items.  
They will be rendered as regular `button` elements unless a `href` property is set, in which case it'll be an `a` instead.

### Props

All props are passed down to the `button` or `a` element underneath.

## PopoverMenu.Separator

Can be used to render a separator line between items to split them into different groups for improved user experience.

### Props

None.
