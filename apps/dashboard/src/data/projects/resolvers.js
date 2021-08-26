/**
 * Internal dependencies
 */
import { fetchProject } from '@crowdsignal/rest-api';
import { dispatchAsync } from '../actions';
import { updateProject } from '../projects/actions';

function* getProject( projectId ) {
	try {
		const response = yield dispatchAsync( fetchProject, [ projectId ] );

		yield updateProject( projectId, response.data );
	} catch ( error ) {
		// Some fetch error, need to handle this more gracefully
	}
}

export default {
	getProject,
};
