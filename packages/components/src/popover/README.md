# Popover

A component that displays its content as a popover.

```javascript
import { useRef, useState } from '@wordpress/element';
import { Popover } from '@crowdsignal/components';

const Dropdown = () => {
	const [ active, setActive ] = useState( false );
	const toggleButton = useRef();

	const toggleDropdown = () => setActive( ! active );

	return (
		<>
			<button ref={ toggle } onClick={ toggleDropdown }>
				Show popover
			</button>

			<Popover
				isVisible={ active }
				context={ toggleButton }
				position="bottom left"
				onClose={ toggleDropdown }
			>
				This text is displayed inside a popover!
			</Popover>
		</>
	);
};
```

### Params

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
