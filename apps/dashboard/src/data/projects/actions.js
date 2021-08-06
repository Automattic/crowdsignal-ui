/**
 * Internal dependencies
 */
import { PROJECT_SAVE, PROJECT_UPDATE } from 'data/action-types';

export function saveProject( projectId, project ) {
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

export function* saveAndUpdateProject( projectId, project ) {
	try {
		const response = yield saveProject( projectId, project );
		const id = projectId || response.data.id;

		return updateProject( id, {
			...project,
			id,
		} );
	} catch ( error ) {
		// Save failed
		throw error;
	}
}
