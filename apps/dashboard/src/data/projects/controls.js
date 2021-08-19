/**
 * Internal dependencies
 */
// import { createProject, updateProject } from '@crowdsignal/rest-api';
import { PROJECT_SAVE } from '../action-types';

// these two to mock the api request without all the dashboard mess it creates
// remove and uncomment the import at the top to save against the API
const createProject = ( project ) =>
	new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			if ( window.failme ) {
				reject( { status: 500, data: 'error data' } );
			}
			resolve( {
				data: {
					...project,
					id: parseInt( Math.random() * 1000000, 10 ),
				},
			} );
		}, 1000 );
	} );

const updateProject = ( projectId, project ) =>
	new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			if ( window.failme ) {
				reject( { status: 500, data: 'error data' } );
			}
			resolve( { data: { ...project, id: projectId } } );
		}, 1000 );
	} );

export default {
	[ PROJECT_SAVE ]( { projectId, project } ) {
		// eslint-disable-next-line
		console.log( 'project::control', PROJECT_SAVE );
		if ( ! projectId ) {
			return createProject( project );
		}

		return updateProject( projectId, project );
	},
};
