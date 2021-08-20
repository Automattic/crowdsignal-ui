/**
 * Internal dependencies
 */
import { http } from '@crowdsignal/http';

export const fetchUser = ( userId ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v4/users/${ userId }`,
		method: 'GET',
		mode: 'cors',
		credentials: 'include',
	} );
