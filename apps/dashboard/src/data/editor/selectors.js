/**
 * External dependencies
 */
import { serialize, parse } from '@wordpress/blocks';
import { get, isEmpty, map, slice, some } from 'lodash';

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
 * Returns true if the page currently being edited is the confirmation page.
 *
 * @param  {Object}  state App state.
 * @return {boolean}       True when editing the confirmation page.
 */
export const isEditingConfirmationPage = ( state ) =>
	getEditorCurrentPageIndex( state ) === getEditorPages( state ).length - 1;

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
 * Returns true if no changes have been made since since the editor was initiated.
 *
 * @param  {Object}  state App state.
 * @return {boolean}       True if project hasn't been edited yet.
 */
export const isEditorUnchanged = ( state ) => ! state.editor.edited;

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

	return ! some(
		slice( pages, 0, -1 ),
		( page ) => ! containsSubmitButton( page )
	);
};

/**
 * Returns the editor project's title.
 *
 * @param  {Object} state App state.
 * @return {string}       Title.
 */
export const getEditorTitle = ( state ) => state.editor.title;

/**
 * Returns the editor project's theme.
 *
 * @param  {Object} state App state.
 * @return {string}       Theme.
 */
export const getEditorTheme = ( state ) => state.editor.theme || 'leven';

/**
 * Returns a partial project containing all the changes made since the last save.
 *
 * @param  {Object}  state          App state.
 * @param  {Object}  options        Options.
 * @param  {boolean} options.public Set to true if the project should include to-be-published changes.
 * @param  {boolean} options.theme  The public or draft project theme.
 * @return {Object}                 Partial project.
 */
export const getEditorUpdatedProjectData = ( state, options = {} ) => {
	const changes = getEditorChanges( state );
	const data = {};

	if ( changes.content || options.public ) {
		data.draftContent = {
			pages: map( getEditorPages( state ), ( page ) =>
				parse( serialize( page ) )
			),
		};
	}

	if ( options.public ) {
		data.publicContent = data.draftContent;
		data.public = true;
	}

	if ( changes.theme || options.public ) {
		data.theme = getEditorTheme( state );
	}

	if ( changes.title ) {
		data.title = getEditorTitle( state );
	}

	return data;
};
