/**
 * External dependencies
 */
import { Global } from '@emotion/core';

/**
 * Internal dependencies
 */
import { Route, Router, Switch } from '@crowdsignal/router';
import Masterbar from '../masterbar';
import Editor from '../editor';
import FormPreview from '../form-preview';
import Results from '../results';

/**
 * Style dependencies
 */
import { Column, pageStyles } from './styles';

const allowedRoutes = /^\/(project)\/.*/i;

const NotFound = () => <div className="app__not-found">404</div>;

const App = () => {
	return (
		<>
			<Global styles={ pageStyles } />

			<Router allowedRoutes={ allowedRoutes }>
				<Column className="app">
					<Masterbar />

					<Column as="main" className="app__content">
						<Switch>
							<Route
								path="/project(/:projectId)"
								component={ Editor }
							/>
							<Route
								path="/project/:projectId/results"
								component={ Results }
							/>
							<Route
								path="/project/:projectId/preview"
								component={ FormPreview }
							/>

							<Route path="*any" component={ NotFound } />
						</Switch>
					</Column>
				</Column>
			</Router>
		</>
	);
};

export default App;
