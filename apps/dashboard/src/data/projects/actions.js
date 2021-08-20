/**
 * Internal dependencies
 */
import {
	PROJECT_SAVE,
	PROJECT_UPDATE,
	PROJECT_SAVE_SUCCESS,
	PROJECT_SAVE_ERROR,
} from '../action-types';
import { redirect } from 'data/ui/actions';
import { saveProjectRequest } from './controls';

export function saveProject() {
	return {
		type: PROJECT_SAVE,
	};
}

export function updateProject( projectId, project ) {
	return {
		type: PROJECT_UPDATE,
		projectId,
		project,
	};
}

export function saveProjectSuccess( projectId ) {
	return {
		type: PROJECT_SAVE_SUCCESS,
		projectId,
	};
}

export function saveProjectError( message ) {
	return {
		type: PROJECT_SAVE_ERROR,
		message,
	};
}

export function* saveAndUpdateProject( projectId, project ) {
	try {
		yield saveProject(); // sets isLoading
		const response = yield saveProjectRequest( projectId, project );
		const id = projectId || response.data.id;

		yield updateProject( id, { ...project, id } );
		yield redirect( `/edit/poll/${ id }` );
		return saveProjectSuccess( id );
	} catch ( error ) {
		// eslint-disable-next-line
		console.error( error );
		return saveProjectError( error.message );
	}
}
