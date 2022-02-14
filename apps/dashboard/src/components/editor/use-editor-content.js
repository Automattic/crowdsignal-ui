/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import { isPublic } from '../../util/project';
import UnpublishedChangesNotice from './unpublished-changes-notice';

export const useEditorContent = ( project ) => {
	const [ forceDraft, setForceDraft ] = useState( false );
	const [ ready, setReady ] = useState( false );

	const [ editorId, setEditorId ] = useState();

	const { removeNotice } = useDispatch( 'core/notices' );

	const { initializeEditor, updateEditorPage } = useDispatch( STORE_NAME );

	const [
		confirmationPage,
		currentPage,
		currentPageContent,
		editorProjectId,
		isEditorContentSaved,
	] = useSelect( ( select ) => [
		select( STORE_NAME ).isEditingConfirmationPage(),
		select( STORE_NAME ).getEditorCurrentPageIndex(),
		select( STORE_NAME ).getEditorCurrentPage(),
		select( STORE_NAME ).getEditorProjectId(),
		select( STORE_NAME ).isEditorContentSaved(),
	] );

	useEffect( () => {
		if ( ! project ) {
			return;
		}

		initializeEditor(
			project.id,
			project.title,
			isPublic( project ) && ! forceDraft
				? project.publicContent.pages
				: project.draftContent.pages
		);
	}, [ forceDraft ] );

	useEffect( () => {
		setEditorId(
			`crowdsignal-editor-${ editorProjectId }-${ currentPage }`
		);
		setReady( false );
	}, [ editorProjectId, currentPage ] );

	useEffect( () => {
		if ( isEditorContentSaved ) {
			return;
		}

		// Once changes have been made, it's impossible to restore the previous draft
		removeNotice( UnpublishedChangesNotice.ID );
	}, [ isEditorContentSaved ] );

	const loadBlocks = () => currentPageContent;

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

	const restoreDraft = () => {
		setForceDraft( true );

		// Force IsolatedBlockEditor to reload
		setEditorId( `${ editorId }*` );
		setReady( false );
	};

	return {
		editorId,
		confirmationPage,
		loadBlocks,
		saveBlocks,
		restoreDraft,
		version: forceDraft ? 'draft' : 'auto',
	};
};
