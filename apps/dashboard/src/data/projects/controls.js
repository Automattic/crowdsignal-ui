// these two to mock the api request without all the dashboard mess it creates
// remove and uncomment the import at the top to save against the API
export const createProject = ( project ) =>
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

export const updateProject = ( projectId, project ) =>
	new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			if ( window.failme ) {
				reject( { status: 500, data: 'error data' } );
			}
			resolve( { data: { ...project, id: projectId } } );
		}, 1000 );
	} );

export default {};
