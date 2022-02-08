/**
 * External dependencies
 */
import { get } from 'lodash';

export const getLastUpdatedProjectId = ( state ) =>
	get( state, [ 'projects', 'lastUpdatedItemId' ], 0 );

export const getProject = ( state, projectId ) =>
	get( state, [ 'projects', 'items', projectId ], null );

export const getProjectError = ( state, projectId ) =>
	get( state, [ 'projects', 'error', projectId ] );

export const isProjectLoading = ( state, projectId ) =>
	state.projects.loading[ projectId ] ||
	( ! getProject( state, projectId ) &&
		! getProjectError( state, projectId ) );

export const getProjectTitle = ( state, projectId ) =>
	get( state, [ 'projects', 'items', projectId, 'title' ], '' );
