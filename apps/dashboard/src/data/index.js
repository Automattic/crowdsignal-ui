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
import * as editorActions from './editor/actions';
import * as editorSelectors from './editor/selectors';
import * as pollActions from './polls/actions';
import pollControls from './polls/controls';
import * as pollSelectors from './polls/selectors';
import * as projectActions from './projects/actions';
import * as projectSelectors from './projects/selectors';
import * as uiActions from './ui/actions';
import uiResolvers from './ui/resolvers';
import * as uiSelectors from './ui/selectors';
import * as userActions from './users/actions';
import * as userSelectors from './users/selectors';
import projectResolvers from './projects/resolvers';

import reducer from './reducer';

export const STORE_NAME = 'crowdsignal/dashboard';

const storeConfig = {
	actions: {
		...accountActions,
		...editorActions,
		...pollActions,
		...projectActions,
		...uiActions,
		...userActions,
	},
	controls: {
		...controls,
		...pollControls,
	},
	selectors: {
		...accountSelectors,
		...editorSelectors,
		...pollSelectors,
		...projectSelectors,
		...uiSelectors,
		...userSelectors,
	},
	reducer,
	resolvers: {
		...uiResolvers,
		...projectResolvers,
	},
};

export const store = createReduxStore( STORE_NAME, storeConfig );
register( store );
