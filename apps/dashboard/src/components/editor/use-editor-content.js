/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { isEmpty } from 'lodash';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import UnpublishedChangesNotice from './unpublished-changes-notice';

export const useEditorContent = ( projectId ) => {
	const [ ready, setReady ] = useState( ! projectId );
	const [ editorId, setEditorId ] = useState();

	const { removeNotice } = useDispatch( 'core/notices' );
	const {
		forceEditorDraftMode,
		insertEditorPage,
		updateEditorPage,
	} = useDispatch( STORE_NAME );

	const [
		currentPage,
		isEditorContentSaved,
		projectContent,
	] = useSelect( ( select ) => [
		select( STORE_NAME ).getEditorCurrentPage(),
		select( STORE_NAME ).isEditorContentSaved(),
		select( STORE_NAME ).getEditorContent(),
	] );

	useEffect( () => {
		if ( ! projectId ) {
			insertEditorPage( 0, [] );
		}
	}, [ projectId ] );

	useEffect( () => {
		setEditorId( `crowdsignal-editor-${ projectId }-${ currentPage }` );
		setReady( false );
	}, [ projectId, currentPage ] );

	useEffect( () => {
		if ( isEditorContentSaved ) {
			return;
		}

		// Once changes have been made, it's impossible to restore the previous draft
		removeNotice( UnpublishedChangesNotice.ID );
	}, [ isEditorContentSaved ] );

	const saveBlocks = useCallback(
		( blocks ) => {
			// Isolated block editor forces a save as soon as the editor content has loaded.
			// Ignore the first save and set 'ready' to true.
			//
			// https://github.com/Automattic/isolated-block-editor/blob/bca504ae1ef98cf1aba136d70e29fc339aa8ec61/src/components/content-saver/index.js#L47
			if ( ! ready ) {
				setReady( true );
				return;
			}

			updateEditorPage( currentPage, blocks );
		},
		[ ready ]
	);

	const restoreDraftContent = () => {
		forceEditorDraftMode();

		// Force the editor to reload
		setEditorId( `${ editorId }*` );
		setReady( false );
	};

	return {
		currentPage,
		editorId,
		isLoading: projectId && isEmpty( projectContent ),
		saveBlocks,
		projectContent,
		restoreDraftContent,
	};
};
