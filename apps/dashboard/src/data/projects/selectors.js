/**
 * External dependencies
 */
import { get, includes } from 'lodash';

/**
 * Internal dependencies
 */
import * as ProjectStatus from '../../util/project/project-status';

export const getLastUpdatedProjectId = ( state ) =>
	get( state, [ 'projects', 'lastUpdatedItemId' ], 0 );

export const getProject = ( state, projectId ) =>
	get( state, [ 'projects', 'items', projectId ], null );

export const isProjectSaving = ( state ) =>
	get( state, [ 'projects', 'isSaving' ], false );

export const getProjectStatus = ( state ) =>
	get(
		state,
		[ 'projects', 'projectStatus' ],
		ProjectStatus.DRAFT_WITH_UNSAVED_CHANGES
	);

export const isProjectPublic = ( state ) =>
	includes(
		[
			ProjectStatus.PUBLIC,
			ProjectStatus.PUBLIC_WITH_UNSAVED_CHAGES,
			ProjectStatus.PUBLIC_WITH_UNPUBLISHED_CHAGES,
		],
		getProjectStatus( state )
	);

export const isProjectSaved = ( state ) =>
	includes(
		[ ProjectStatus.DRAFT, ProjectStatus.PUBLIC ],
		getProjectStatus( state )
	);
