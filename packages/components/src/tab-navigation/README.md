# Tab Navigation

Tabs navigation component.

## Usage

```javascript
import { TabNavigation } from '@crowdsignal/components';

const Navigation = () => (
	<TabNavigation>
		<TabNavigation.Tab isSelected href="#">
			Foo
		</TabNavigation.Tab>
		<TabNavigation.Tab href="#">Bar</TabNavigation.Tab>
		<TabNavigation.Tab href="#">Baz</TabNavigation.Tab>
	</TabNavigation>
);
```

## TabNavigation

Wrapper element which renders the navigation bar.

### Props

None.

## TabNavigation.Tab

Used for rendering individual tabs inside the navigation component.  
Tabs are rendered as `button` elements unless a `href` property is present, in which case they'll render as `a`.

### Props

All props are passed down to the `button` or `a` element underneath.
