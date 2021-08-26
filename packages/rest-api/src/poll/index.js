/**
 * Internal dependencies
 */
import { http } from '@crowdsignal/http';

export const fetchPoll = ( pollId ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v4/polls/${ pollId }`,
		method: 'GET',
		mode: 'cors',
		credentials: 'include',
	} );

export const createPoll = ( data ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: '/v4/polls',
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		body: JSON.stringify( data ),
	} );

export const updatePoll = ( pollId, data ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v4/polls/${ pollId }`,
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		headers: {
			'X-HTTP-Method-Override': 'PATCH',
		},
		body: JSON.stringify( data ),
	} );

export const fetchPollResults = ( pollId, query = {} ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v3/polls/${ pollId }/results`,
		method: 'POST',
		mode: 'cors',
		query,
	} );
