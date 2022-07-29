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
import { trackContentInsert, trackThemeChange } from '../../util/tracking';

const getEditorProjectData = ( project, draft = true ) => ( {
	title: project.title,
	pages: draft ? project.draftContent.pages : project.publicContent.pages,
	theme: draft ? project.draftTheme : project.publicTheme,
	embedCard: draft ? project.draftEmbedCard : project.publicEmbedCard,
	navigation: draft ? project.draftNavigation : project.publicNavigation,
} );

export const useEditorContent = ( project ) => {
	const [ forceDraft, setForceDraft ] = useState( false );
	const [ ready, setReady ] = useState( false );

	const [ editorId, setEditorId ] = useState();

	const { removeNotice } = useDispatch( 'core/notices' );

	const {
		initializeEditor,
		updateEditorPage,
		updateEditorTemplate,
		updateEditorTheme,
		saveEditorChanges,
	} = useDispatch( STORE_NAME );

	const [
		confirmationPage,
		currentPage,
		totalPages,
		currentPageContent,
		editorProjectId,
		isEditorContentSaved,
		editorTheme,
		navigationSettings,
		currentUser,
	] = useSelect( ( select ) => [
		select( STORE_NAME ).isEditingConfirmationPage(),
		select( STORE_NAME ).getEditorCurrentPageIndex(),
		select( STORE_NAME ).getEditorPages().length,
		select( STORE_NAME ).getEditorCurrentPage(),
		select( STORE_NAME ).getEditorProjectId(),
		select( STORE_NAME ).isEditorContentSaved(),
		select( STORE_NAME ).getEditorTheme(),
		select( STORE_NAME ).getEditorNavigationSettings(),
		select( STORE_NAME ).getCurrentUser(),
	] );

	useEffect( () => {
		initializeEditor(
			project.id || 0,
			getEditorProjectData( project, ! isPublic( project ) || forceDraft )
		);
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

	const setProjectTemplate = ( template ) => {
		const pages = template.project.draftContent.pages;
		initializeEditor( 0, { pages, theme: editorTheme } );
		updateEditorTemplate( template.name );

		if ( pages[ 0 ].length ) {
			trackContentInsert( currentUser );
		}

		// Force IsolatedBlockEditor to reload
		setEditorId( `${ editorId }*` );
		setReady( false );
	};

	const setProjectTheme = ( theme, autoSave = true ) => {
		updateEditorTheme( theme );

		if ( autoSave ) {
			saveEditorChanges();
		}

		trackThemeChange( currentUser, theme, project.id );
	};

	return {
		editorId,
		editorTheme,
		confirmationPage,
		currentPage,
		totalPages,
		navigationSettings,
		loadBlocks,
		saveBlocks,
		restoreDraft,
		setProjectTemplate,
		setProjectTheme,
		version: forceDraft ? 'draft' : 'auto',
	};
};
