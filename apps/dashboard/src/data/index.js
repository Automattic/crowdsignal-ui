/**
 * External dependencies
 */
import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal dependencies
 */
import * as accountActions from './accounts/actions';
import * as pollActions from './polls/actions';
import * as projectActions from './projects/actions';
import * as uiActions from './ui/actions';
import * as userActions from './users/actions';
import pollControls from './polls/controls';
import projectControls from './projects/controls';
import * as accountSelectors from './accounts/selectors';
import * as pollSelectors from './polls/selectors';
import * as projectSelectors from './projects/selectors';
import * as uiSelectors from './ui/selectors';
import * as userSelectors from './users/selectors';
import reducer from './reducer';

export const STORE_NAME = 'crowdsignal/dashboard';

export const store = createReduxStore( STORE_NAME, {
	actions: {
		...accountActions,
		...pollActions,
		...projectActions,
		...uiActions,
		...userActions,
	},
	controls: {
		...pollControls,
		...projectControls,
	},
	selectors: {
		...accountSelectors,
		...pollSelectors,
		...projectSelectors,
		...uiSelectors,
		...userSelectors,
	},
	reducer,
} );

register( store );
