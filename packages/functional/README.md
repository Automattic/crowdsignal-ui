# @crowdsignal/functional

Functional programming helpers used throughout crowdsignal packages.

_Note: This package is fully typed using typescript JSDoc notation._

## curry

Type-safe curry function for lazy binding of a functions first argument.


```javascript
import { flow } from 'lodash';
import { curry } from '@crowdsignal/functional';

const add = curry( ( a, b ) => a + b );
const multiply = curry( ( a, b ) => a * b );


// number === 18
const number = flow(
	add( 3 ),
	multiply( 3 )
)( 3 );
```

### Params

**func**: Callback to curry.

- Type: `Function`
- Required: Yes

### Return

`Function`

## curriedOr

Logical OR function with support for currying.

```javascript
import { flow } from 'lodash';
import { curry, curryOr } from '@crowdsignal/functional';

const add = curry( ( a, b ) => a + b );
const subtract = curry( ( a, b ) => a - b );

const addOrSubtract = or( add( 3 ), subtract( 3 ) );

addOrSubtract( 3 ); // 6
addOrSubtract( -3 ); // -6
```

### Params

**...expressions**: Expressions to evaluate. If an expression evaluates to a function, it's the return value of that function when invoked with the curried argument that determines if it's true or false.

- Type: `Any`
- Required: `Yes`

### Return

`Function`.
