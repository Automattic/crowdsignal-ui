/**
 * Internal dependencies
 */
import { EDITOR_PREVIEW_TYPE_SET } from '../action-types';

export const setEditorPreviewType = ( previewType ) => ( {
	type: EDITOR_PREVIEW_TYPE_SET,
	previewType,
} );
