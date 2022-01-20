/**
 * External dependencies
 */
import { useCallback, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { get, noop } from 'lodash';
import IsolatedBlockEditor from 'isolated-block-editor'; // eslint-disable-line import/default
import { Global } from '@emotion/core';

/**
 * Internal dependencies
 */
import HeaderMeta from '../header-meta';
import ProjectNavigation from '../project-navigation';
import { STORE_NAME } from '../../data';
import { isPublic } from '../../util/project';
import AutoSubmitButton from './auto-submit-button';
import { registerBlocks } from './blocks';
import DocumentSettings from './document-settings';
import EditorLoadingPlaceholder from './loading-placeholder';
import EditorStylesResolver from './styles-resolver';
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
	const [ forceDraft, setForceDraft ] = useState( false );

	const [ project, isEditorDisabled ] = useSelect( ( select ) => {
		const dashboard = select( STORE_NAME );

		return [
			dashboard.getProject( projectId ),
			dashboard.isEditorSaving() &&
				dashboard.getLastUpdatedProjectId() === 0,
		];
	} );

	const editorView = forceDraft ? 'draft' : 'auto';
	const content =
		isPublic( project ) && ! forceDraft
			? project?.publicContent
			: project?.draftContent;
	const blocks = get( content, [ 'pages', 0 ], [] );

	const loadEditorContent = useCallback( () => blocks, [ blocks ] );

	const updateEditorContent = useEditorContent( projectId );

	if ( projectId && null === project ) {
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
				disableTitleEditor={ isEditorDisabled }
				projectId={ projectId }
			/>

			<EditorWrapper
				as={ IsolatedBlockEditor }
				key={ `${ projectId }-${ editorView }` }
				settings={ editorSettings }
				onSaveContent={ updateEditorContent }
				onLoad={ loadEditorContent }
				onError={ noop }
			>
				<Toolbar project={ project } />
				<DocumentSettings project={ project } />

				<AutoSubmitButton />

				{ ! forceDraft && (
					<UnpublishedChangesNotice
						project={ project }
						onRestore={ () => setForceDraft( true ) }
					/>
				) }
			</EditorWrapper>
		</EditorLayout>
	);
};

registerBlocks();

export default Editor;
