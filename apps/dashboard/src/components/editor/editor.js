/**
 * External dependencies
 */
import { useDispatch } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { map, noop, tap } from 'lodash';
import IsolatedBlockEditor from 'isolated-block-editor'; // eslint-disable-line import/default
import { Global } from '@emotion/core';

/**
 * Internal dependencies
 */
import * as crowdsignalBlocks from '@crowdsignal/block-editor';
import HeaderMeta from '../header-meta';
import ProjectNavigation from '../project-navigation';
import { STORE_NAME } from '../../data';
import AutoSubmitButton from './auto-submit-button';
import { registerBlocks } from './blocks';
import DocumentSettings from './document-settings';
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

registerBlocks();

const Editor = ( { project, theme = 'leven' } ) => {
	const { updateEditorTitle } = useDispatch( STORE_NAME );

	const {
		confirmationPage,
		editorId,
		loadBlocks,
		saveBlocks,
		restoreDraft,
		version,
	} = useEditorContent( project );

	const settings = useMemo(
		() =>
			tap( { ...editorSettings }, ( { iso } ) => {
				if ( confirmationPage ) {
					iso.blocks.disallowBlocks = [
						...iso.blocks.disallowBlocks,
						...map( crowdsignalBlocks, 'name' ),
					];
				}
			} ),
		[ editorId ]
	);

	return (
		<EditorLayout className="editor">
			<Global styles={ editorGlobalStyles } />
			<EditorStylesResolver theme={ theme } />

			<HeaderMeta title={ __( 'Edit Project', 'dashboard' ) } />

			<ProjectNavigation
				activeTab={ ProjectNavigation.Tab.EDITOR }
				onChangeTitle={ updateEditorTitle }
				projectId={ project.id }
			/>

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
				<DocumentSettings project={ project } />

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
