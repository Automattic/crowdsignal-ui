/**
 * External dependencies
 */
import { parse } from '@wordpress/blocks';
import { useCallback, useEffect, useRef, useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';

const AUTOSAVE_DEBOUNCE_PERIOD = 5000;

// Do something about the timeout - if no project ID should be 500 ?
export const useAutosave = ( projectId, version ) => {
	const [ ready, setReady ] = useState( ! projectId );

	const autosave = useRef();

	const [ isEditorContentSaved ] = useSelect( ( select ) => [
		select( STORE_NAME ).isEditorContentSaved(),
	] );

	const { saveEditorContent, setEditorContentChanged } = useDispatch(
		STORE_NAME
	);

	// If projectId or version changes, reset 'ready'
	useEffect( () => {
		setReady( false );
	}, [ projectId, version ] );

	// Clear autosave timer if changes have already been saved
	useEffect( () => {
		if ( ! isEditorContentSaved ) {
			return;
		}

		clearTimeout( autosave.current );
	}, [ isEditorContentSaved ] );

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

			// Mark editor content as changed
			setEditorContentChanged();

			// Clear any previous autosave timers
			clearTimeout( autosave.current );

			// Set a new timer
			autosave.current = setTimeout( () => {
				saveEditorContent( projectId, parse( content ) );
			}, AUTOSAVE_DEBOUNCE_PERIOD );
		},
		[ autosave, projectId, ready ]
	);
};
