/**
 * Internal dependencies
 */
// import { createProject, updateProject } from '@crowdsignal/rest-api';
import { PROJECT_SAVE } from '../action-types';

export const save = ( projectId = null, project ) => {
	return {
		type: PROJECT_SAVE,
		projectId,
		project,
	};
};

export default {
	[ PROJECT_SAVE ]: ( { projectId, project } ) => {
		// if ( ! projectId ) {
		// 	return createProject( project );
		// }
		//
		// return updateProject( projectId, project );

		// testing code if you don't feel like creating a new project each time:
		return new Promise( ( resolve, reject ) => {
			setTimeout( () => {
				if ( window.failme ) {
					reject( new Error( `Error saving ${ projectId }` ) );
				}
				resolve( { data: { ...project, id: 123 } } );
			}, 1000 );
		} );
	},
};
