# @crowdsignal/form

Form handling library loosely based on [React Final Form](https://github.com/final-form/react-final-form), powered by [@wordpress/data]https://github.com/WordPress/gutenberg/tree/trunk/packages/data).

### Form

The form wrapper component to trigger the library for your form.

```javascript
import { Form } from '@crowdsignal/form';

const MyForm = () => {
	const handleSubmit = ( data ) => {
		// Add code to subbmit form data here
	};

	return (
		<Form name="my-form" onSubmit={ handleSubmit }>

			// Form contents
			...
		</Form>
	);
};
```

### useField

`useField` hook can be used to link traditional inputs into the `@wordpress/data` form state.

```javascript
import { useField } from '@crowdsignal/form';

const TextInput = () => {
	const { error, onChange, fieldValue } = useField( {
		name: 'example',
	} );

	return (
		<div className="text-input">
			<input className="text-input__input" onChange={ onChange } value={ fieldValue } />
			{ error && ( <span className="text-input__error">{ error }</span> ) }
		</div>
	);
};
```
