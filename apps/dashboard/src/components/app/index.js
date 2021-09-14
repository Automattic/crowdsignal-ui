/**
 * Internal dependencies
 */
import { Route, Router, Switch } from '@crowdsignal/router';
import Masterbar from '../masterbar';
import Editor from '../editor';
import Results from '../results';

const allowedRoutes = /^\/(edit)\/.*/i;

const NotFound = () => <div className="app__not-found">404</div>;

const App = () => {
	return (
		<Router allowedRoutes={ allowedRoutes }>
			<div className="app">
				<Masterbar />

				<main className="app__content">
					<Switch>
						<Route path="/edit(/:projectId)" component={ Editor } />
						<Route
							path="/edit/:projectId/results"
							component={ Results }
						/>

						<Route path="*any" component={ NotFound } />
					</Switch>
				</main>
			</div>
		</Router>
	);
};

export default App;
