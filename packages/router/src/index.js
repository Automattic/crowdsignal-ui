/**
 * Internal dependencies
 */
import { history } from './context';

export * from './route';
export * from './router';
export * from './switch';

export const redirect = ( uri ) => {
	// eslint-disable-next-line
	console.log( uri );
	history.push( uri );
};
