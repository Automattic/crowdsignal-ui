/**
 * External dependencies
 */
import { get } from 'lodash';

import { getLastUpdatedProjectId } from '../projects/selectors';

export const isEditorContentSaved = ( state ) =>
	! get( state, [ 'editor', 'hasUnsavedChanges' ], false );

export const isEditorSaving = ( state ) =>
	get( state, [ 'editor', 'isSaving' ], false );

export const getEditorTitle = ( state ) =>
	get( state, [ 'editor', 'title' ], '' );

export const getEditorContent = ( state ) =>
	get( state, [ 'editor', 'content' ], '' );

export const getEditorProjectId = ( state ) =>
	get( state, [ 'editor', 'projectId' ], getLastUpdatedProjectId( state ) );
