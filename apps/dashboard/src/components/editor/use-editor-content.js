/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { debounce } from 'lodash';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import UnpublishedChangesNotice from './unpublished-changes-notice';

// Do something about the timeout - if no project ID should be 500 ?
export const useEditorContent = ( projectId ) => {
	const [ ready, setReady ] = useState( ! projectId );

	const { removeNotice } = useDispatch( 'core/notices' );
	const { updateEditorContent, setEditorContentChanged } = useDispatch(
		STORE_NAME
	);

	// If projectId or editorView changes, reset 'ready'
	useEffect( () => {
		setReady( false );
	}, [ projectId ] );

	return useCallback(
		// using debounce here so we don't pound the state synchronization
		debounce( ( content ) => {
			// Isolated block editor forces a save as soon as the editor content has loaded.
			// Ignore the first save and set 'ready' to true.
			//
			// https://github.com/Automattic/isolated-block-editor/blob/bca504ae1ef98cf1aba136d70e29fc339aa8ec61/src/components/content-saver/index.js#L47
			if ( ! ready ) {
				setReady( true );
				return;
			}

			// Mark editor content as changed
			setEditorContentChanged();

			// Once you start editing, you can't restore the previous draft anymore
			removeNotice( UnpublishedChangesNotice.ID );

			// Update our own state branch
			updateEditorContent( content );
		}, 500 ),
		[ projectId, ready ]
	);
};
