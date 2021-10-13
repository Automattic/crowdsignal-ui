/**
 * Internal dependencies
 */
import {
	PROJECT_SAVE,
	PROJECT_SAVE_ERROR,
	PROJECT_UPDATE,
} from '../action-types';
import { redirect } from '@crowdsignal/router';

import {
	createProject,
	updateProject as patchProject,
} from '@crowdsignal/rest-api';
import { dispatchAsync } from '../actions';

export function saveProject( publish ) {
	return {
		type: PROJECT_SAVE,
		publish,
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
	yield saveProject( project.publish ); // sets isLoading

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
