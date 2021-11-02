/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Return the editor's current preview type
 *
 * @param  {Object} state App state
 * @return {string}       Preview type
 */
export const getEditorPreviewType = ( state ) =>
	get( state, [ 'editor', 'previewType' ], '' );
