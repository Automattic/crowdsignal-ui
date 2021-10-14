/**
 * Internal dependencies
 */
import {
	PROJECT_SAVE,
	PROJECT_SAVE_ERROR,
	PROJECT_UPDATE,
	PROJECT_CONTENT_CHANGE,
} from '../action-types';
import { redirect } from '@crowdsignal/router';

import {
	createProject,
	updateProject as patchProject,
} from '@crowdsignal/rest-api';
import { dispatchAsync } from '../actions';

export function changeProject( project ) {
	return {
		type: PROJECT_CONTENT_CHANGE,
		project,
	};
}

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

export function saveProjectError( message ) {
	return {
		type: PROJECT_SAVE_ERROR,
		message,
	};
}

export function* saveAndUpdateProject( projectId, project ) {
	yield saveProject(); // sets isLoading

	try {
		const response = projectId
			? yield dispatchAsync( patchProject, [ projectId, project ] )
			: yield dispatchAsync( createProject, [ project ] );

		yield updateProject( response.data.id, response.data );
		return redirect( `/project/${ response.data.id }` );
	} catch ( error ) {
		// Request failed
		return saveProjectError( error.message );
	}
}
