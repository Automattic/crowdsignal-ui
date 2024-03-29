/**
 * Internal dependencies
 */
import { http } from '@crowdsignal/http';

export const fetchProject = ( projectId ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v4/projects/${ projectId }`,
		method: 'GET',
		mode: 'cors',
		credentials: 'include',
	} );

export const createProject = ( data ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: '/v4/projects',
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		body: JSON.stringify( data ),
	} );

export const updateProject = ( projectId, data ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v4/projects/${ projectId }`,
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		headers: {
			'X-Http-Method-Override': 'PATCH',
		},
		body: JSON.stringify( data ),
	} );

export const fetchProjectForm = ( projectId, query = {} ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v4/projects/${ projectId }/form`,
		method: 'GET',
		query,
	} );

export const submitProjectForm = ( projectId, formData, query = {} ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v4/projects/${ projectId }/form`,
		method: 'POST',
		skipGlobalHeaders: [ 'Content-Type' ],
		body: formData,
		query,
	} );
