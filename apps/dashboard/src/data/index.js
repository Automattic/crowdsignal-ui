/**
 * External dependencies
 */
import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal dependencies
 */
import controls from './controls';
import * as accountActions from './accounts/actions';
import * as accountSelectors from './accounts/selectors';
import * as pollActions from './polls/actions';
import pollControls from './polls/controls';
import * as pollSelectors from './polls/selectors';
import * as projectActions from './projects/actions';
import * as projectSelectors from './projects/selectors';
import projectControls from './projects/controls';
import * as uiActions from './ui/actions';
import uiResolvers from './ui/resolvers';
import * as uiSelectors from './ui/selectors';
import * as userActions from './users/actions';
import * as userSelectors from './users/selectors';
import * as uiControls from './ui/controls';

import reducer from './reducer';

export const STORE_NAME = 'crowdsignal/dashboard';

const storeConfig = {
	actions: {
		...accountActions,
		...pollActions,
		...projectActions,
		...uiActions,
		...userActions,
	},
	controls: {
		...controls,
		...pollControls,
		...projectControls,
		...uiControls,
	},
	selectors: {
		...accountSelectors,
		...pollSelectors,
		...projectSelectors,
		...uiSelectors,
		...userSelectors,
	},
	reducer,
	resolvers: {
		...uiResolvers,
	},
};

export const store = createReduxStore( STORE_NAME, storeConfig );
register( store );
