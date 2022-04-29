# Editable Page Header

Renders a page header that can be edited in place.

## Usage

```javascript
import { EditablePageHeader } from '@crowdsignal/components';

const MyPage = () => (
	<EditablePageHeader
		onChange={ updateHeader }
		text={ headerText }
	/>

	...
);
```

### Props

**onChange**: Callback that will be invoked when the header value has been edited.

- Type: `Function`
- Required: Yes

**text**: The text to display.

- Type: `string`
- Required: No
- Default `''`
