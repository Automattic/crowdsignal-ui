/**
 * Internal dependencies
 */
import { createProject, updateProject } from '@crowdsignal/rest-api';
import { PROJECT_SAVE } from '../action-types';

export default {
	PROJECT_SAVE: ( { projectId, project } ) => {
		// eslint-disable-next-line
		console.log( 'control', PROJECT_SAVE );
		if ( ! projectId ) {
			return createProject( project );
		}

		return updateProject( projectId, project );
	},
};
