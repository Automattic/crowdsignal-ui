/**
 * Internal dependencies
 */
import {
	EDITOR_CONTENT_CHANGED_SET,
	EDITOR_CONTENT_SAVE,
	EDITOR_CONTENT_SAVE_ERROR,
	EDITOR_CONTENT_SAVE_SUCCESS,
	EDITOR_CONTENT_UPDATE,
	EDITOR_TITLE_SET,
} from '../action-types';
import { saveAndUpdateProject } from '../projects/actions';

export const setEditorContentChanged = () => ( {
	type: EDITOR_CONTENT_CHANGED_SET,
} );

export function* saveEditorContent( projectId, blocks, options = {} ) {
	yield { type: EDITOR_CONTENT_SAVE };

	const data = {
		draftContent: {
			pages: [ blocks ],
		},
	};

	if ( options.public ) {
		data.public = true;
		data.publicContent = data.draftContent;
	}

	if ( options.title ) {
		data.title = options.title;
	}

	try {
		yield saveAndUpdateProject( projectId, data );

		return { type: EDITOR_CONTENT_SAVE_SUCCESS };
	} catch ( error ) {
		return { type: EDITOR_CONTENT_SAVE_ERROR };
	}
}

export const setEditorTitle = ( title ) => ( {
	type: EDITOR_TITLE_SET,
	title,
} );

export const updateEditorContent = ( content ) => ( {
	type: EDITOR_CONTENT_UPDATE,
	content,
} );
