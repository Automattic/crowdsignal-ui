/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import UnpublishedChangesNotice from './unpublished-changes-notice';

export const useEditorContent = ( projectId, editorView ) => {
	const [ ready, setReady ] = useState( ! projectId );

	const [ isEditorContentSaved ] = useSelect( ( select ) => [
		select( STORE_NAME ).isEditorContentSaved(),
	] );

	const { removeNotice } = useDispatch( 'core/notices' );
	const { updateEditorContent } = useDispatch( STORE_NAME );

	// The problem is this timeout only gets triggered once, not on every change!
	useEffect( () => {
		if ( isEditorContentSaved ) {
			return;
		}

		// Once changes have been made, it's impossible to restore the previous draft
		removeNotice( UnpublishedChangesNotice.ID );
	}, [ isEditorContentSaved ] );

	// If projectId or editorView changes, reset 'ready'
	useEffect( () => {
		setReady( false );
	}, [ projectId, editorView ] );

	return useCallback(
		( content ) => {
			// Isolated block editor forces a save as soon as the editor content has loaded.
			// Ignore the first save and set 'ready' to true.
			//
			// https://github.com/Automattic/isolated-block-editor/blob/bca504ae1ef98cf1aba136d70e29fc339aa8ec61/src/components/content-saver/index.js#L47
			if ( ! ready ) {
				setReady( true );
				return;
			}

			updateEditorContent( content );
		},
		[ ready ]
	);
};
