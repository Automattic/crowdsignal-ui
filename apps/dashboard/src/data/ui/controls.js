/**
 * Internal dependencies
 */
import { redirect } from '@crowdsignal/router';
import { ROUTE_UPDATE } from '../action-types';

export default {
	[ ROUTE_UPDATE ]: ( { path } ) => {
		// eslint-disable-next-line
		console.log( 'control', ROUTE_UPDATE );
		redirect( path );
	},
};
