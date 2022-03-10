/**
 * External dependencies
 */
import { useDispatch } from '@wordpress/data';
import { useMemo, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { cloneDeep, filter, noop, tap } from 'lodash';
import IsolatedBlockEditor from 'isolated-block-editor'; // eslint-disable-line import/default
import { Global } from '@emotion/core';

/**
 * Internal dependencies
 */
import HeaderMeta from '../header-meta';
import NewProjectWizard from '../new-project-wizard';
import ProjectNavigation from '../project-navigation';
import { STORE_NAME } from '../../data';
import AutoSubmitButton from './auto-submit-button';
import { registerBlocks } from './blocks';
import DocumentSettings from './document-settings';
import EditorStylesResolver from './styles-resolver';
import PageNavigation from './page-navigation';
import { editorSettings } from './settings';
import ThemesModal from '../themes-modal';
import Toolbar from './toolbar';
import UnpublishedChangesNotice from './unpublished-changes-notice';
import { useEditorContent } from './use-editor-content';

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

	const { updateEditorTitle } = useDispatch( STORE_NAME );

	const {
		confirmationPage,
		editorId,
		loadBlocks,
		saveBlocks,
		restoreDraft,
		setProjectTemplate,
		setProjectTheme,
		version,
	} = useEditorContent( project );

	const handleSelectTemplate = ( projectTemplate ) => {
		setProjectTemplate( projectTemplate );
		setShowWizard( false );
	};

	const handleOpenThemesModal = () => {
		setShowThemesModal( true );
	};

	const handleSelectTheme = ( theme ) => {
		setProjectTheme( theme );
		setShowThemesModal( false );
	};

	const settings = useMemo( () => {
		if ( ! confirmationPage ) {
			return editorSettings;
		}

		return tap( cloneDeep( editorSettings ), ( { iso } ) => {
			iso.blocks.allowBlocks = filter(
				iso.blocks.allowBlocks,
				( block ) => ! block.match( /^crowdsignal\-forms\/.+/ )
			);
		} );
	}, [ confirmationPage ] );

	return (
		<EditorLayout className="editor">
			<Global styles={ editorGlobalStyles } />
			<EditorStylesResolver theme={ project.theme } />

			<HeaderMeta title={ __( 'Edit Project', 'dashboard' ) } />

			<ProjectNavigation
				activeTab={ ProjectNavigation.Tab.EDITOR }
				onChangeTitle={ updateEditorTitle }
				projectId={ project.id }
			/>

			{ showWizard && (
				<NewProjectWizard onSelect={ handleSelectTemplate } />
			) }

			{ showThemesModal && (
				<ThemesModal
					activeTheme={ project.theme }
					onSelect={ handleSelectTheme }
				/>
			) }

			<PageNavigation />
			<EditorWrapper
				as={ IsolatedBlockEditor }
				key={ editorId }
				settings={ settings }
				onSaveBlocks={ saveBlocks }
				onLoad={ loadBlocks }
				onError={ noop }
			>
				<Toolbar project={ project } />
				<DocumentSettings
					project={ project }
					onChangeThemeClick={ handleOpenThemesModal }
				/>

				<AutoSubmitButton />

				<UnpublishedChangesNotice
					project={ project }
					onRestore={ restoreDraft }
					version={ version }
				/>
			</EditorWrapper>
		</EditorLayout>
	);
};

export default Editor;
