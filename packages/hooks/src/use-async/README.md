# useAsync( callback, watchProps )

`useAsync` facilitates dispatching async routines within a component where tracking of loading and/or error state is also required.

## Usage

```javascript
import { useAsync } from '@crowdsignal/hooks';

const ExampleComponent = ( resourceId ) => {
	const { loading, result, error } = useAsync(
		() => {
			return fetch( `https://api.mydomain.com/resource/${ resourceId }` )
				.then( ( response ) => response.toJSON() );
		},
		[ resourceId ]
	);

	if ( error ) {
		return <SomeErrorView error={ error } />;
	}

	return (
		<>
			{ loading && ( 'loading...' ) }

			{ ! loading && result && (
				// Do something with the results here
				...
			) }
		</>
	);
};
```

### Arguments

**callback**: The asynchronous callback to invoke. Must return a promise.

- Type: `Function`
- Required: Yes

**watchProps**: You can pass an array of values as the second argument which will cause the _callback_ to be invoked any time one of them changes. By default it only gets invoked on the initial render.

- Type: `Array`
- Required: No
- Default: `[]`
