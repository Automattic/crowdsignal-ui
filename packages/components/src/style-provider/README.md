# StyleProvider

`<StyleProvider>` acts as a namespace boundary for styled components.  

## Usage

```javascript
import { StyleProvider } from '@crowdsignal/components';

const WrapperComponent = () => (
	<StyleProvider namespace="my-app">
		<App />
	</StyleProvider>
);
```

## Props

### namespace

All classes from inside the `<StyleProvider>` instance will generate class names in the following format: `{ namespace }-{ hash }`.

- Type: `String`
- Required: Yes

### container

An optional container to inject the generated CSS into. By default styles are injected into `document.head`.

- Type: `Element`
- Required: No
- Default: `document.head`

### reset

When set to `true`, the reset stylesheet will be injected along with child styles.

- Type: `Boolean`
- Required: No
