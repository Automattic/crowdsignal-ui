# Popover Message

Component for displaying a popover message on an element

## Usage

```javascript
import { useRef, useState } from '@wordpress/element';
import { PopoverNotice } from '@crowdsignal/components';

const Menu () => {
	const [ displayNotice, setDisplayNotice ] = useState( false );
	const ref = noteRef();

	const hideNote = () => setActive( false );
	const toggleNote = () => setActive( ! active );

	return (
		<>
			<button ref={ noteRef } onMouseEnter={ toggleNote } onMouseLeave={ hideNote }>
				Hover for Message
			</button>

			<PopoverNotice
						context={ noteFef }
						onClose={ hideNote) }
						isVisible={ setActive }
						position={ 'bottom left' }
					>
						{ __(
							'Your Message Goes Here'
						) }
					</PopoverNotice>
		</>
	);
};
```

## PopoverNotice

Responsible for displaying the tooltip. Essentially, a styled version of `Popover`.

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
