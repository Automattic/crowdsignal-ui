# useBlur( callback, elements )

`useBlur` can be used to trigger a callback when all of the elements passed in the second argument have lost focus.  

## Usage

```javascript
import { useRef, useState } from '@wordpress/element';
import { useBlur } from '@crowdsignal/hooks';

const Dropdown = () => {
	const [ isActive, setIsActive ] = useState( false );

	const toggle = useRef();
	const dropdown = useRef();

	const toggleDropdown = setIsActive( ! isActive );

	useBlur( toggleDropdown, [ toggle, dropdown ] );

	return (
		<>
			<button ref={ toggle } onClick={ toggleDropdown }></button>

			{ isActive && (
				<div ref={ dropdown }>
					...
				</div>
			) }
		</>
	);
};
```

### Arguments

**callback**: The callback to invoke when all elements have lost focus.

- Type: `Function`
- Required: Yes

**elements**: Refs for elements to monitor.

- Type: `Array<Ref>`
- Required: No
- Default: `[]`
