/**
 * Internal dependencies
 */
import {
	EDITOR_CONTENT_RESTORE,
	EDITOR_CONTENT_SAVE,
	EDITOR_CONTENT_SAVE_ERROR,
	EDITOR_CONTENT_SAVE_SUCCESS,
	EDITOR_CONTENT_UPDATE,
	EDITOR_PROJECT_ID_UPDATE,
	EDITOR_TITLE_SET,
} from '../action-types';
import { saveAndUpdateProject } from '../projects/actions';

export function* saveEditorContent( projectId, blocks, options = {} ) {
	yield { type: EDITOR_CONTENT_SAVE };

	const data = {
		...options,
		draftContent: {
			pages: [ blocks ],
		},
	};

	if ( options.public ) {
		data.publicContent = data.draftContent;
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

export const restoreEditorContent = ( content ) => ( {
	type: EDITOR_CONTENT_RESTORE,
	content,
} );

export const updateEditorProjectId = ( projectId ) => ( {
	type: EDITOR_PROJECT_ID_UPDATE,
	projectId: Number( projectId ),
} );
