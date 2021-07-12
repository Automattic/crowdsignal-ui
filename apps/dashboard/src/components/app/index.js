/**
 * Internal dependencies
 */
import { Route, Router, Switch } from '@crowdsignal/router';
import Masterbar from '../masterbar';
import PollEditor from '../poll-editor';
import PollResults from '../poll-results';

const allowedRoutes = /^\/(edit)\/.*/i;

const NotFound = () => <div className="app__not-found">404</div>;

const App = () => {
	return (
		<Router allowedRoutes={ allowedRoutes }>
			<div className="app">
				<Masterbar />

				<main className="app__content">
					<Switch>
						<Route
							path="/edit/poll/:pollId"
							component={ PollEditor }
						/>
						<Route
							path="/edit/poll/:pollId/results"
							component={ PollResults }
						/>

						<Route path="*any" component={ NotFound } />
					</Switch>
				</main>
			</div>
		</Router>
	);
};

export default App;
