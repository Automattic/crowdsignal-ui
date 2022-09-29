/**
 * External dependencies
 */
import { useDispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { kebabCase, noop } from 'lodash';
import IsolatedBlockEditor, {
	EditorHeadingSlot,
	FooterSlot,
} from '@automattic/isolated-block-editor'; // eslint-disable-line import/default
import { Global } from '@emotion/react';

/**
 * Internal dependencies
 */
import {
	CrowdsignalFooter,
	NavigationBar,
	StickyFooter,
} from '@crowdsignal/components';
import { registerBlocks } from './blocks';
import { registerPatterns } from './patterns';
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

	const {
		updateEditorTitle,
		setEditorCurrentPage,
		updateEditorSettings,
	} = useDispatch( STORE_NAME );

	const { updateSettings } = useDispatch( 'core/block-editor' );

	const {
		currentPreviewType,
		editorId,
		editorSettings,
		editorTheme,
		loadBlocks,
		saveBlocks,
		restoreDraft,
		setProjectTemplate,
		setProjectTheme,
		version,
		currentPage,
		totalPages,
		navigationSettings,
	} = useEditorContent( project );

	const editorClass = `is-${ kebabCase( currentPreviewType ) }-preview`;

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

	useEffect( () => {
		if ( ! window.isoInitialisedBlocks ) {
			return;
		}

		updateEditorSettings( registerPatterns() );
	}, [ window.isoInitialisedBlocks ] );

	useEffect( () => {
		updateSettings( editorSettings.editor );
	}, [ editorSettings ] );

	if ( ! editorSettings ) {
		return null;
	}

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
				className={ editorClass }
				key={ editorId }
				settings={ editorSettings }
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
				<EditorHeadingSlot>
					<NavigationBar
						currentPageIndex={ currentPage }
						onBackButtonClick={ setEditorCurrentPage }
						settings={ navigationSettings }
						totalPages={ totalPages }
					/>
				</EditorHeadingSlot>

				<AutoSubmitButton />

				<EditorNotice
					project={ project }
					onRestore={ restoreDraft }
					version={ version }
				/>
				<FooterSlot>
					<StickyFooter>
						<CrowdsignalFooter
							logo
							upgradeLink
							source="editor-footer"
							message={ __(
								'Collect your own feedback with Crowdsignal',
								'dashboard'
							) }
						/>
					</StickyFooter>
				</FooterSlot>
			</EditorWrapper>

			{ ! showWizard && showEditorGuide && (
				<EditorGuide onFinish={ handleCloseWelcomeGuide } />
			) }
			{ ! showEditorGuide && <EditorFeedbackButton /> }
		</EditorLayout>
	);
};

export default Editor;
