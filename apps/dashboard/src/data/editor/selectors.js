/**
 * External dependencies
 */
import { get } from 'lodash';

export const isEditorContentSaved = ( state ) =>
	! get( state, [ 'editor', 'hasUnsavedChanges' ], false );

export const isEditorSaving = ( state ) =>
	get( state, [ 'editor', 'isSaving' ], false );

export const getEditorTitle = ( state ) =>
	get( state, [ 'editor', 'title' ], '' );
