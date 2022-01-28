/**
 * External dependencies
 */
import { createReduxStore } from '@wordpress/data';

import * as actions from './actions';
import controls from './controls';
import reducer from './reducer';
import * as selectors from './selectors';

export const STORE_NAME = 'crowdsignal/editor';

const storeConfig = {
	actions,
	controls,
	reducer,
	selectors,
};

export const store = createReduxStore( STORE_NAME, storeConfig );
