/**
 * External dependencies
 */
import { serialize, parse } from '@wordpress/blocks';
import { get, isEmpty, map, merge, values } from 'lodash';

/**
 * Internal dependencies
 */
import { getProject } from '../projects/selectors';
import { isPublic } from '../../util/project';

export const getEditorProjectId = ( state ) =>
	get( state, [ 'editor', 'projectId' ], 0 );

export const getEditorMode = ( state ) =>
	get( state, [ 'editor', 'mode' ], 'auto' );

export const getEditorCurrentPage = ( state ) =>
	get( state, [ 'editor', 'currentPage' ], 0 );

export const isEditorContentSaved = ( state ) =>
	! get( state, [ 'editor', 'hasUnsavedChanges' ], false );

export const isEditorSaving = ( state ) =>
	get( state, [ 'editor', 'isSaving' ], false );

export const getEditorTitle = ( state ) =>
	get( state, [ 'editor', 'title' ], '' );

export const getEditorContent = ( state ) => {
	const projectId = getEditorProjectId( state );

	if ( ! projectId ) {
		return values( state.editor.content );
	}

	const project = getProject( state, projectId );

	if ( ! project ) {
		return [];
	}

	const content =
		isPublic( project ) && getEditorMode( state ) !== 'draft'
			? project.publicContent.pages
			: project.draftContent.pages;

	return merge(
		state.editor.pageOrder
			? map( state.editor.pageOrder, ( index ) => content[ index ] )
			: content,
		state.editor.content
	);
};

export const getEditorChangeset = ( state ) => {
	const changeset = {};

	if ( ! isEmpty( state.editor.content ) || state.editor.pageOrder ) {
		changeset.draftContent = {
			pages: map( getEditorContent( state ), ( page ) =>
				parse( serialize( page ) )
			),
		};
	}

	if ( getEditorTitle( state ) ) {
		changeset.title = getEditorTitle( state );
	}

	return changeset;
};
