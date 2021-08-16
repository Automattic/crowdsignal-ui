/**
 * Internal dependencies
 */

import { PROJECT_SAVE, PROJECT_UPDATE } from '../action-types';
import { fetchOngoing, fetchIdle, redirect } from 'data/ui/actions';

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
		yield fetchOngoing();
		const response = yield saveProject( projectId, project );
		const id = projectId || response.data.id;

		yield updateProject( id, {
			...project,
			id,
		} );

		if ( ! projectId ) {
			// this should only happen when creating a new project
			yield redirect( `/${ id }` );
		}

		return fetchIdle();
	} catch ( error ) {
		// Save failed
		throw error;
	}
}
