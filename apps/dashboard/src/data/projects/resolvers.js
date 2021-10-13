/**
 * Internal dependencies
 */
import { fetchProject } from '@crowdsignal/rest-api';
import { dispatchAsync } from '../actions';
import { updateProject, loadedProject } from '../projects/actions';

function* getProject( projectId ) {
	if ( ! projectId ) {
		return null;
	}
	try {
		const response = yield dispatchAsync( fetchProject, [ projectId ] );

		yield updateProject( projectId, response.data );
		yield loadedProject( projectId );
	} catch ( error ) {
		// Some fetch error, need to handle this more gracefully
	}
}

export default {
	getProject,
};
