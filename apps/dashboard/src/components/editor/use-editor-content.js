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
	const [ isRestore, setRestore ] = useState(
		editorView === EDITOR_VIEW_DRAFT
	);

	const { removeNotice } = useDispatch( 'core/notices' );
	const { updateEditorContent, restoreEditorContent } = useDispatch(
		STORE_NAME
	);

	useEffect( () => {
		setRestore( editorView === EDITOR_VIEW_DRAFT );
	}, [ editorView ] );

	// If projectId or editorView changes, reset 'ready'
	useEffect( () => {
		setReady( false );
	}, [ projectId, editorView, isRestore ] );

	return useCallback(
		// using debounce here so we don't pound the state synchronization
		( content ) => {
			// editorView changes via setForceDraft to EDITOR_VIEW_DRAFT, meaning a restore intent
			if ( isRestore ) {
				restoreEditorContent( content );
				setRestore( false );
				return;
			}

			// Isolated block editor forces a save as soon as the editor content has loaded.
			// Ignore the first save and set 'ready' to true.
			//
			// https://github.com/Automattic/isolated-block-editor/blob/bca504ae1ef98cf1aba136d70e29fc339aa8ec61/src/components/content-saver/index.js#L47
			if ( ! ready ) {
				setReady( true );
				return;
			}

			// Once you start editing, you can't restore the previous draft anymore
			removeNotice( UnpublishedChangesNotice.ID );

			// Update our own state branch
			updateEditorContent( content );
		},
		[ projectId, ready, isRestore ]
	);
};
