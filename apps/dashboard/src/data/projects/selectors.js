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

export const isProjectDraftSaved = ( state ) =>
	get( state, [ 'projects', 'isDraftSaved' ], false );

export const isProjectPublishSaved = ( state ) =>
	get( state, [ 'projects', 'isPublishSaved' ], false );
