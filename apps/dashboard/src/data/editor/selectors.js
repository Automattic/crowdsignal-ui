/**
 * External dependencies
 */
import { parse } from '@wordpress/blocks';
import { get } from 'lodash';

export const isEditorContentSaved = ( state ) =>
	! get( state, [ 'editor', 'hasUnsavedChanges' ], false );

export const isEditorSaving = ( state ) =>
	get( state, [ 'editor', 'isSaving' ], false );

export const getEditorTitle = ( state ) =>
	get( state, [ 'editor', 'title' ], '' );

export const getEditorContent = ( state ) =>
	get( state, [ 'editor', 'content' ], '' );

export const getEditorProjectId = ( state ) =>
	get( state, [ 'editor', 'projectId' ], 0 );

export const getEditorChangeset = ( state ) => {
	const changeset = {};

	if ( getEditorContent( state ) ) {
		changeset.draftContent = {
			pages: [ parse( getEditorContent( state ) ) ],
		};
	}

	if ( getEditorTitle( state ) ) {
		changeset.title = getEditorTitle( state );
	}

	return changeset;
};
