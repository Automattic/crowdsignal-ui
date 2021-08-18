/**
 * External dependencies
 */
import { get } from 'lodash';

export const getLastUpdatedProjectId = ( state ) =>
	get( state, [ 'projects', 'lastUpdatedItemId' ], 0 );

export const getProject = ( state, projectId ) =>
	get( state, [ 'projects', 'items', projectId ], null );

export const isSaving = ( state ) =>
	get( state, [ 'projects', 'isSaving' ], false );
