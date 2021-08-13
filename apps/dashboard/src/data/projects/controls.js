/**
 * Internal dependencies
 */
import { createProject, updateProject } from '@crowdsignal/rest-api';
import { PROJECT_SAVE } from 'data/action-types';

export default {
	[ PROJECT_SAVE ]: ( { projectId, project } ) => {
		if ( ! projectId ) {
			return createProject( project );
		}

		return updateProject( projectId, project );
	},
};
