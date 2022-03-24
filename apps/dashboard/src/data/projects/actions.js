/**
 * Internal dependencies
 */
import {
	PROJECT_LOAD,
	PROJECT_LOAD_ERROR,
	PROJECT_SAVE,
	PROJECT_SAVE_ERROR,
	PROJECT_UPDATE,
} from '../action-types';

import {
	createProject,
	updateProject as patchProject,
} from '@crowdsignal/rest-api';
import { dispatchAsync, finishResolution } from '../actions';

export function loadProject( projectId ) {
	return {
		type: PROJECT_LOAD,
		projectId,
	};
}

export function loadProjectError( projectId ) {
	return {
		type: PROJECT_LOAD_ERROR,
		projectId,
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

export function saveProjectError( projectId, message ) {
	return {
		type: PROJECT_SAVE_ERROR,
		projectId,
		message,
	};
}

export function* saveAndUpdateProject( projectId, project ) {
	yield saveProject(); // sets isLoading

	try {
		const response = projectId
			? yield dispatchAsync( patchProject, [ projectId, project ] )
			: yield dispatchAsync( createProject, [ project ] );

		yield finishResolution( 'getProject', [ String( response.data.id ) ] );

		return updateProject( response.data.id, response.data );
	} catch ( error ) {
		yield saveProjectError( error.message );

		// Request failed, re-throw error after handling
		throw error;
	}
}
