/**
 * External dependencies
 */
import { useCallback, useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { noop } from 'lodash';
import IsolatedBlockEditor from 'isolated-block-editor'; // eslint-disable-line import/default
import { Global } from '@emotion/core';

/**
 * Internal dependencies
 */
import HeaderMeta from '../header-meta';
import ProjectNavigation from '../project-navigation';
import { STORE_NAME } from '../../data';
import AutoSubmitButton from './auto-submit-button';
import { registerBlocks } from './blocks';
import DocumentSettings from './document-settings';
import EditorLoadingPlaceholder from './loading-placeholder';
import EditorStylesResolver from './styles-resolver';
import PageNavigation from './page-navigation';
import { editorSettings } from './settings';
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

const Editor = ( { projectId, theme = 'leven' } ) => {
	const {
		initalizeEditor,
		saveEditorChangeset,
		updateEditorTitle,
	} = useDispatch( STORE_NAME );

	const project = useSelect( ( select ) =>
		select( STORE_NAME ).getProject( projectId )
	);

	useEffect( () => {
		initalizeEditor( projectId );

		return () => saveEditorChangeset();
	}, [] );

	const {
		currentPage,
		editorId,
		isLoading,
		projectContent,
		saveBlocks,
		restoreDraftContent,
	} = useEditorContent( projectId );

	const loadEditorContent = useCallback(
		() => projectContent[ currentPage ],
		[ editorId, isLoading ]
	);

	if ( isLoading ) {
		// project is being loaded
		return (
			<>
				<HeaderMeta title={ __( 'Edit Project', 'dashboard' ) } />
				<EditorLoadingPlaceholder />
			</>
		);
	}

	return (
		<EditorLayout className="editor">
			<Global styles={ editorGlobalStyles } />
			<EditorStylesResolver theme={ theme } />

			<HeaderMeta title={ __( 'Edit Project', 'dashboard' ) } />

			<ProjectNavigation
				activeTab={ ProjectNavigation.Tab.EDITOR }
				onChangeTitle={ updateEditorTitle }
				projectId={ projectId }
			/>

			<PageNavigation
				currentPage={ currentPage }
				projectContent={ projectContent }
			/>

			<EditorWrapper
				as={ IsolatedBlockEditor }
				key={ editorId }
				settings={ editorSettings }
				onSaveBlocks={ saveBlocks }
				onLoad={ loadEditorContent }
				onError={ noop }
			>
				<Toolbar project={ project } />
				<DocumentSettings project={ project } />

				<AutoSubmitButton />

				<UnpublishedChangesNotice
					project={ project }
					onRestore={ restoreDraftContent }
				/>
			</EditorWrapper>
		</EditorLayout>
	);
};

registerBlocks();

export default Editor;
