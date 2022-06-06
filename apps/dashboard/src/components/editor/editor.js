/**
 * External dependencies
 */
import { useDispatch } from '@wordpress/data';
import { useMemo, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { cloneDeep, filter, noop, tap } from 'lodash';
import IsolatedBlockEditor from 'isolated-block-editor'; // eslint-disable-line import/default
import { Global } from '@emotion/react';

/**
 * Internal dependencies
 */
import { editorSettings } from './settings';
import { registerBlocks } from './blocks';
import { STORE_NAME } from '../../data';
import { useEditorContent } from './use-editor-content';
import AutoSubmitButton from './auto-submit-button';
import DocumentSettings from './document-settings';
import EditorFeedbackButton from './feedback-button';
import EditorGuide from './guide';
import EditorNotice from './notice';
import EditorStylesResolver from './styles-resolver';
import HeaderMeta from '../header-meta';
import NewProjectWizard from '../new-project-wizard';
import PageNavigation from './page-navigation';
import ProjectNavigation from '../project-navigation';
import ShareModal from '../share-modal';
import ThemesModal from '../themes-modal';
import Toolbar from './toolbar';

/**
 * Style dependencies
 */
import {
	EditorLayout,
	EditorWrapper,
	editorGlobalStyles,
} from './styles/editor';

registerBlocks();

const Editor = ( { project } ) => {
	const [ showWizard, setShowWizard ] = useState( ! project.id );
	const [ showThemesModal, setShowThemesModal ] = useState( false );
	const [ showShareModal, setShowShareModal ] = useState( false );

	const [ showEditorGuide, setShowEditorGuide ] = useState(
		document.cookie.indexOf( 'hide_editor_guide=1' ) === -1
	);

	const { updateEditorTitle } = useDispatch( STORE_NAME );

	const {
		confirmationPage,
		editorId,
		editorTheme,
		loadBlocks,
		saveBlocks,
		restoreDraft,
		setProjectTemplate,
		setProjectTheme,
		version,
	} = useEditorContent( project );

	const handleSelectTemplate = ( template ) => {
		setProjectTemplate( template );
		setShowWizard( false );
	};

	const handleOpenThemesModal = () => {
		setShowThemesModal( true );
	};

	const handleCloseThemesModal = () => {
		setShowThemesModal( false );
	};

	const handleSelectTheme = ( theme ) => {
		const autoSave = ! showWizard;
		setProjectTheme( theme, autoSave );
		setShowThemesModal( false );
	};

	const handleToggleShareModal = () => {
		setShowShareModal( ! showShareModal );
	};

	const handleCloseWelcomeGuide = () => {
		const expirationDate = new Date(
			new Date().getTime() + 356 * 24 * 60 * 60 * 1000
		).toGMTString();
		document.cookie = `hide_editor_guide=1; expires=${ expirationDate }`;

		setShowEditorGuide( false );
	};

	const settings = useMemo( () => {
		if ( ! confirmationPage ) {
			return editorSettings;
		}

		return tap( cloneDeep( editorSettings ), ( { editor, iso } ) => {
			iso.blocks.allowBlocks = filter(
				iso.blocks.allowBlocks,
				( block ) => ! block.match( /^crowdsignal\-forms\/.+/ )
			);
			editor.allowedBlockTypes = iso.blocks.allowBlocks;
		} );
	}, [ confirmationPage ] );

	return (
		<EditorLayout className="editor">
			<Global styles={ editorGlobalStyles } />
			<EditorStylesResolver theme={ editorTheme } />

			<HeaderMeta title={ __( 'Edit Project', 'dashboard' ) } />

			<ProjectNavigation
				activeTab={ ProjectNavigation.Tab.EDITOR }
				onChangeTitle={ updateEditorTitle }
				projectId={ project.id }
			/>

			{ showWizard && (
				<NewProjectWizard
					onSelect={ handleSelectTemplate }
					onChangeThemeClick={ handleOpenThemesModal }
				/>
			) }

			{ showThemesModal && (
				<ThemesModal
					activeTheme={ editorTheme }
					onSelect={ handleSelectTheme }
					onClose={ handleCloseThemesModal }
				/>
			) }

			{ showShareModal && (
				<ShareModal
					project={ project }
					onClose={ handleToggleShareModal }
				/>
			) }

			<PageNavigation key={ `nav_${ editorTheme }` } />
			<EditorWrapper
				as={ IsolatedBlockEditor }
				key={ editorId }
				settings={ settings }
				onSaveBlocks={ saveBlocks }
				onLoad={ loadBlocks }
				onError={ noop }
			>
				<Toolbar
					project={ project }
					onShareClick={ handleToggleShareModal }
				/>
				<DocumentSettings
					project={ project }
					onChangeThemeClick={ handleOpenThemesModal }
				/>

				<AutoSubmitButton />

				<EditorNotice
					project={ project }
					onRestore={ restoreDraft }
					version={ version }
				/>
			</EditorWrapper>

			{ ! showWizard && showEditorGuide && (
				<EditorGuide onFinish={ handleCloseWelcomeGuide } />
			) }
			{ ! showEditorGuide && <EditorFeedbackButton /> }
		</EditorLayout>
	);
};

export default Editor;
