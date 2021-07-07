# @crowdsignal/router

A single-page-application router that runs on top of `@wordpress/element`.

## Usage

```javascript
import { Router, Route, Switch } from '@crowdsignal/router';

const App = () => (
	<Router>
		<Switch>
			<Route path="/page/:pageId" component={ Page } />
			<Route path="/" component={ Home } />
			<Route path="/*_" component={ NotFound } />
		</Switch>
	</Router>
);
```

## Router

Wrapper component responsible for maintaining up-to-date information on the current location and passing it down to its children via the context API.  
It will automatically catch any local links within the application but this behavior can be restricted by using `allowedRoutes`.
Usually, you'd wrap the entire application with a single `<Router>`.

### Params

**allowedRoutes**: Only local URLs matching this regular expression will trigger the router.

- Type: RegExp
- Required: No
- Default: `/.*/i`

## Route

The `Route` component will render its `component` whenever the current URL matches the `path`. If the path contains named segments, like `:pageId` in the above example, they're passed as props to the `component` as well.

### Params

**component**: The component that should be rendered whenever the route is a match.

- Type: Component
- Required: Yes

**path**: The path to match against.

- Type: String
- Required: Yes


## Switch

When `Route` components are wrapped with a `Switch`, only the first one with a matching path will be rendered.

### Params

None.
