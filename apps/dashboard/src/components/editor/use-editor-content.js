/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import UnpublishedChangesNotice from './unpublished-changes-notice';
import { EDITOR_VIEW_DRAFT } from './constants';

// Do something about the timeout - if no project ID should be 500 ?
export const useEditorContent = ( projectId, editorView ) => {
	const [ ready, setReady ] = useState( ! projectId );

	const { removeNotice } = useDispatch( 'core/notices' );
	const {
		updateEditorContent,
		restoreEditorContent,
		setEditorContentChanged,
	} = useDispatch( STORE_NAME );

	// If projectId or editorView changes, reset 'ready'
	useEffect( () => {
		setReady( false );
	}, [ projectId, editorView ] );

	return useCallback(
		// using debounce here so we don't pound the state synchronization
		( content ) => {
			// Isolated block editor forces a save as soon as the editor content has loaded.
			// Ignore the first save and set 'ready' to true.
			//
			// https://github.com/Automattic/isolated-block-editor/blob/bca504ae1ef98cf1aba136d70e29fc339aa8ec61/src/components/content-saver/index.js#L47
			if ( ! ready ) {
				// editorView changes via setForceDraft to EDITOR_VIEW_DRAFT, meaning a restore intent
				if ( editorView === EDITOR_VIEW_DRAFT ) {
					restoreEditorContent( content );
				}
				setReady( true );
				return;
			}

			// Mark editor content as changed
			setEditorContentChanged();

			// Once you start editing, you can't restore the previous draft anymore
			removeNotice( UnpublishedChangesNotice.ID );

			// Update our own state branch
			updateEditorContent( content );
		},
		[ projectId, ready ]
	);
};
