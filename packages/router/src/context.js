/**
 * External dependencies
 */
import { createContext } from '@wordpress/element';
import { createBrowserHistory } from 'history';

/**
 * Internal dependencies
 */
import { parseLocation } from './util';

export const history = createBrowserHistory();

export const RouterContext = createContext( parseLocation( history.location ) );
