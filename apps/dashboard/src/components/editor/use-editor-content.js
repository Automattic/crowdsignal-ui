/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { useClientId } from '@crowdsignal/hooks';
import { isPublic } from '@crowdsignal/project';
import { STORE_NAME } from '../../data';
import { NOTICE_UNPUBLISHED } from './notice';
import { trackThemeChanged } from '../../util/tracking';

export const useEditorContent = ( project ) => {
	const [ forceDraft, setForceDraft ] = useState( false );
	const [ ready, setReady ] = useState( false );

	const [ editorId, setEditorId ] = useState();

	const { removeNotice } = useDispatch( 'core/notices' );

	const {
		initializeEditor,
		updateEditorPage,
		updateEditorTheme,
		saveEditorChanges,
	} = useDispatch( STORE_NAME );

	const [
		confirmationPage,
		currentPage,
		currentPageContent,
		editorProjectId,
		isEditorContentSaved,
		editorTheme,
		currentUser,
	] = useSelect( ( select ) => [
		select( STORE_NAME ).isEditingConfirmationPage(),
		select( STORE_NAME ).getEditorCurrentPageIndex(),
		select( STORE_NAME ).getEditorCurrentPage(),
		select( STORE_NAME ).getEditorProjectId(),
		select( STORE_NAME ).isEditorContentSaved(),
		select( STORE_NAME ).getEditorTheme(),
		select( STORE_NAME ).getCurrentUser(),
	] );

	useEffect( () => {
		const usePublic = isPublic( project ) && ! forceDraft;
		const content = usePublic
			? project.publicContent.pages
			: project.draftContent.pages;
		const theme = usePublic ? project.publicTheme : project.draftTheme;

		initializeEditor( project.id || 0, project.title, content, theme );
	}, [ forceDraft ] );

	useEffect( () => {
		setEditorId(
			`crowdsignal-editor-${ editorProjectId }-${ currentPage }${
				confirmationPage ? 'confirm' : ''
			}`
		);
		setReady( false );
	}, [ editorProjectId, confirmationPage, currentPage ] );

	useEffect( () => {
		if ( isEditorContentSaved ) {
			return;
		}

		// Once changes have been made, it's impossible to restore the previous draft
		removeNotice( NOTICE_UNPUBLISHED );
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
		useClientId.resetRegistry();
	};

	const setProjectTemplate = ( projectTemplate ) => {
		initializeEditor(
			0,
			undefined,
			projectTemplate.draftContent.pages,
			editorTheme
		);

		// Force IsolatedBlockEditor to reload
		setEditorId( `${ editorId }*` );
		setReady( false );
	};

	const setProjectTheme = ( theme, autoSave = true ) => {
		updateEditorTheme( theme );

		if ( autoSave ) {
			saveEditorChanges();
		}

		trackThemeChanged( currentUser, theme, project.id );
	};

	return {
		editorId,
		editorTheme,
		confirmationPage,
		loadBlocks,
		saveBlocks,
		restoreDraft,
		setProjectTemplate,
		setProjectTheme,
		version: forceDraft ? 'draft' : 'auto',
	};
};
