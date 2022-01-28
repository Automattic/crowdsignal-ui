/**
 * External dependencies
 */
import { parse, serialize } from '@wordpress/blocks';
import { isEmpty, get, map, some } from 'lodash';

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
export const getChanges = ( state ) => state.changes;

/**
 * Returns the project ID of the project that's currently loaded into
 * the editor. 0 if the project doesn't (yet) exist.
 *
 * @param  {Object} state App state.
 * @return {number}       Project ID.
 */
export const getProjectId = ( state ) => state.projectId;

/**
 * Returns an array containing all project pages.
 *
 * @param  {Object} state App state.
 * @return {Array}        Pages.
 */
export const getPages = ( state ) => state.pages;

/**
 * Returns the index of currently edited page.
 *
 * @param  {Object} state App state.
 * @return {number}       Current page index.
 */
export const getCurrentPageIndex = ( state ) => state.currentPage;

/**
 * Returns the currently edited page.
 *
 * @param  {Object} state     App state.
 * @return {Array}            Blocks.
 */
export const getCurrentPage = ( state ) =>
	get( getPages( state ), getCurrentPageIndex( state ) );

/**
 * Returns true if the editor doesn't contain any unsaved changes.
 *
 * @param  {Object}  state App state.
 * @return {boolean}       True if no changes.
 */
export const isSaved = ( state ) => isEmpty( getChanges( state ) );

/**
 * Returns true if the editor is currently being saved.
 *
 * @param  {Object}  state App state.
 * @return {boolean}       True when saving.
 */
export const isSaving = ( state ) => state.isSaving;

/**
 * Returns true if the project in the editor can be published.
 *
 * @param  {Object}  state App state.
 * @return {boolean}       True if the project is valid.
 */
export const canPublish = ( state ) => {
	const pages = getPages( state );

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
export const getTitle = ( state ) => state.title;

/**
 * Returns a partial project containing all the changes made since the last save.
 *
 * @param  {Object} state App state.
 * @return {Object}       Partial project.
 */
export const getUpdatedProjectData = ( state ) => {
	const changes = getChanges( state );
	const data = {};

	if ( changes.content ) {
		data.draftContent = {
			pages: map( getPages( state ), ( page ) =>
				parse( serialize( page ) )
			),
		};
	}

	if ( changes.title ) {
		data.title = getTitle( state );
	}

	return data;
};
