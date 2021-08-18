/**
 * Internal dependencies
 */
import {
	PROJECT_SAVE,
	PROJECT_UPDATE,
	PROJECT_SAVE_SUCCESS,
	PROJECT_SAVE_ERROR,
} from '../action-types';

export function saveProject( projectId, project ) {
	// eslint-disable-next-line
	console.log( 'action', PROJECT_SAVE );
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

export function saveErrorProject() {
	return {
		type: PROJECT_SAVE_ERROR,
	};
}

export function* saveAndUpdateProject( projectId, project ) {
	try {
		const response = yield saveProject( projectId, project );
		const id = projectId || response.data.id;

		yield updateProject( id, {
			...project,
			id,
		} );
		return saveSuccessProject( id );
	} catch ( error ) {
		saveErrorProject( projectId );
		// Save failed
		throw error;
	}
}
