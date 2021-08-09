/**
 * External dependencies
 */
import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal dependencies
 */
import * as pollActions from './polls/actions';
import * as projectActions from './projects/actions';
import pollControls from './polls/controls';
import projectControls from './projects/controls';
import * as pollSelectors from './polls/selectors';
import * as projectSelectors from './projects/selectors';
import reducer from './reducer';

export const STORE_NAME = 'crowdsignal/dashboard';

export const store = createReduxStore( STORE_NAME, {
	actions: {
		...pollActions,
		...projectActions,
	},
	controls: {
		...pollControls,
		...projectControls,
	},
	selectors: {
		...pollSelectors,
		...projectSelectors,
	},
	reducer,
} );

register( store );
