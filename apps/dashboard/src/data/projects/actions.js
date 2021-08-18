/**
 * Internal dependencies
 */
import {
	PROJECT_SAVE,
	PROJECT_UPDATE,
	PROJECT_SAVE_SUCCESS,
	PROJECT_SAVE_ERROR,
} from '../action-types';
import { save } from './controls';

export function saveProject( projectId, project ) {
	// eslint-disable-next-line
	console.log( 'project:action', PROJECT_SAVE );
	return {
		type: PROJECT_SAVE,
		projectId,
		project,
	};
}

export function updateProject( projectId, project ) {
	return {
		type: PROJECT_UPDATE,
		projectId,
		project,
	};
}

export function saveSuccessProject( projectId ) {
	return {
		type: PROJECT_SAVE_SUCCESS,
		projectId,
	};
}

export function saveErrorProject( message ) {
	return {
		type: PROJECT_SAVE_ERROR,
		message,
	};
}

export function* saveAndUpdateProject( projectId, project ) {
	// eslint-disable-next-line
	console.log( 'saveAndUpdateProject', projectId );
	try {
		const response = yield save( projectId, project );
		// const response = yield saveProject( projectId, project );
		// eslint-disable-next-line
		console.log( response );
		const id = projectId || response.data.id;

		yield updateProject( id, {
			...project,
			id,
		} );
		return saveSuccessProject( id );
	} catch ( error ) {
		return saveErrorProject( error.message );
	}
}
