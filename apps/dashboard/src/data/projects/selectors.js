/**
 * External dependencies
 */
import { get } from 'lodash';

export const getLastUpdatedProjectId = ( state ) =>
	get( state, [ 'projects', 'lastUpdatedItemId' ], 0 );

export const getProject = ( state, projectId ) =>
	get( state, [ 'projects', 'items', projectId ], null );

export const isProjectSaving = ( state ) =>
	get( state, [ 'projects', 'isSaving' ], false );

export const isProjectPublic = ( state ) =>
	get(
		getProject( state, getLastUpdatedProjectId( state ) ),
		[ 'content', 'public' ],
		false
	);

export const isProjectSaved = ( state ) =>
	get( state, [ 'projects', 'isSaved' ], false );
