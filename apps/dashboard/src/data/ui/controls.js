/**
 * Internal dependencies
 */
import { redirect } from '@crowdsignal/router';
import { ROUTE_UPDATE } from '../action-types';

export default {
	[ ROUTE_UPDATE ]: ( { path } ) => {
		redirect( path );
	},
};
