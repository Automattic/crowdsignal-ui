/**
 * Internal dependencies
 */
import { history } from './context';

export * from './route';
export * from './router';
export * from './switch';

export const redirect = ( uri ) => history.push( uri );
