/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { fetchProject } from '@crowdsignal/rest-api';
import { dispatchAsync } from '../actions';
import { loadProject, loadProjectError, updateProject } from './actions';
import { resetDraftContentClientIds } from './util';

function* getProject( projectId ) {
	if ( ! projectId ) {
		return null;
	}

	yield loadProject( projectId );

	try {
		const response = yield dispatchAsync( fetchProject, [ projectId ] );
		const data = resetDraftContentClientIds( response.data );
		yield updateProject( projectId, data );
	} catch ( error ) {
		yield loadProjectError( projectId, __( 'Failed to load project.' ) );
	}
}

export default {
	getProject,
};
