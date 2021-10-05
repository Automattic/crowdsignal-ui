/**
 * External dependencies
 */
import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal dependencies
 */
import * as actions from './actions';
import reducer from './reducer';
import * as selectors from './selectors';

export const STORE_NAME = 'crowdsignal/form';

const config = {
	actions,
	reducer,
	selectors,
};

export const store = createReduxStore( STORE_NAME, config );

register( store );
