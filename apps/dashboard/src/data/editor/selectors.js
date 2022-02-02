/**
 * External dependencies
 */
import { serialize, parse } from '@wordpress/blocks';
import { get, isEmpty, map, some } from 'lodash';

/**
 * Internal dependencies
 */
import { submitButtonBlock } from '@crowdsignal/block-editor';

/**
 * Returns an object indicating which parts of the project have changed
 * since the last save.
 *
 * @param  {Object} state App state.
 * @return {Object}       Changes.
 */
export const getEditorChanges = ( state ) => state.editor.changes;

/**
 * Returns the project ID of the project that's currently loaded into
 * the editor. 0 if the project doesn't (yet) exist.
 *
 * @param  {Object} state App state.
 * @return {number}       Project ID.
 */
export const getEditorProjectId = ( state ) => state.editor.projectId;

/**
 * Returns an array containing all project pages.
 *
 * @param  {Object} state App state.
 * @return {Array}        Pages.
 */
export const getEditorPages = ( state ) => state.editor.pages;

/**
 * Returns the index of currently edited page.
 *
 * @param  {Object} state App state.
 * @return {number}       Current page index.
 */
export const getEditorCurrentPageIndex = ( state ) => state.editor.currentPage;

/**
 * Returns the currently edited page.
 *
 * @param  {Object} state     App state.
 * @return {Array}            Blocks.
 */
export const getEditorCurrentPage = ( state ) =>
	get( getEditorPages( state ), getEditorCurrentPageIndex( state ) );

/**
 * Returns true if the editor doesn't contain any unsaved changes.
 *
 * @param  {Object}  state App state.
 * @return {boolean}       True if no changes.
 */
export const isEditorContentSaved = ( state ) =>
	isEmpty( getEditorChanges( state ) );

/**
 * Returns true if the editor is currently being saved.
 *
 * @param  {Object}  state App state.
 * @return {boolean}       True when saving.
 */
export const isEditorSaving = ( state ) => state.editor.isSaving;

/**
 * Returns true if the project in the editor can be published.
 *
 * @param  {Object}  state App state.
 * @return {boolean}       True if the project is valid.
 */
export const isEditorContentPublishable = ( state ) => {
	const pages = getEditorPages( state );

	const containsSubmitButton = ( blocks ) =>
		some(
			blocks,
			( block ) =>
				block.name === submitButtonBlock.name ||
				containsSubmitButton( block.innerBlocks )
		);

	return ! some( pages, ( page ) => ! containsSubmitButton( page ) );
};

/**
 * Returns the editor project's title.
 *
 * @param  {Object} state App state.
 * @return {string}       Title.
 */
export const getEditorTitle = ( state ) => state.editor.title;

/**
 * Returns a partial project containing all the changes made since the last save.
 *
 * @param  {Object} state App state.
 * @return {Object}       Partial project.
 */
export const getEditorUpdatedProjectData = ( state ) => {
	const changes = getEditorChanges( state );
	const data = {};

	if ( changes.content ) {
		data.draftContent = {
			pages: map( getEditorPages( state ), ( page ) =>
				parse( serialize( page ) )
			),
		};
	}

	if ( changes.title ) {
		data.title = getEditorTitle( state );
	}

	return data;
};
