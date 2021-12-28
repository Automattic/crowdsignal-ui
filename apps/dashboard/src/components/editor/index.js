/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { get, noop } from 'lodash';
import IsolatedBlockEditor from 'isolated-block-editor'; // eslint-disable-line import/default

/**
 * Internal dependencies
 */
import { useStylesheet } from '@crowdsignal/hooks';
import HeaderMeta from '../header-meta';
import ProjectNavigation from '../project-navigation';
import { STORE_NAME } from '../../data';
import { hasUnpublishedChanges, isPublic } from '../../util/project';
import AutoSubmitButton from './auto-submit-button';
import { registerBlocks } from './blocks';
import { unpublishedChangesNotice } from './constants';
import DocumentSettings from './document-settings';
import EditorLoadingPlaceholder from './loading-placeholder';
import { editorSettings } from './settings';
import Toolbar from './toolbar';
import { useAutosave } from './use-autosave';

/**
 * Style dependencies
 */
import './style.scss';

const Editor = ( { projectId } ) => {
	const [ forceDraft, setForceDraft ] = useState( false );

	const { createWarningNotice, removeNotice } = useDispatch( 'core/notices' );

	const [ project, isEditorDisabled ] = useSelect( ( select ) => {
		const dashboard = select( STORE_NAME );

		return [
			dashboard.getProject( projectId ),
			dashboard.isEditorSaving() &&
				dashboard.getLastUpdatedProjectId() === 0,
		];
	} );

	useEffect( () => {
		if (
			forceDraft ||
			! isPublic( project ) ||
			! hasUnpublishedChanges( project )
		) {
			return;
		}

		createWarningNotice(
			__(
				'You have unpublished changes for this project, do you want to restore the draft version?',
				'dashboard'
			),
			{
				id: unpublishedChangesNotice,
				isDismissible: true,
				actions: [
					{
						label: __( 'Restore', 'dashboard' ),
						onClick: () => {
							removeNotice( unpublishedChangesNotice );
							setForceDraft( true );
						},
					},
				],
			}
		);
	}, [
		createWarningNotice,
		forceDraft,
		project,
		removeNotice,
		setForceDraft,
	] );

	const editorView = forceDraft ? 'draft' : 'auto';
	const content =
		isPublic( project ) && ! forceDraft
			? project?.publicContent
			: project?.draftContent;
	const blocks = get( content, [ 'pages', 0 ], [] );

	const loadEditorContent = useCallback( () => blocks, [ blocks ] );
	const saveEditorContent = useAutosave( projectId, editorView );

	useStylesheet(
		'https://app.crowdsignal.com/themes/leven/style-editor.css'
	);
	useStylesheet( '/ui/stable/theme-compatibility/leven.min.css' );
	useStylesheet( '/ui/stable/theme-compatibility/leven-editor.min.css' );

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
		<div className="editor">
			<HeaderMeta title={ __( 'Edit Project', 'dashboard' ) } />

			<ProjectNavigation
				activeTab={ ProjectNavigation.Tab.EDITOR }
				disableTitleEditor={ isEditorDisabled }
				projectId={ projectId }
			/>

			<IsolatedBlockEditor
				key={ `${ projectId }-${ editorView }` }
				settings={ editorSettings }
				onSaveContent={ saveEditorContent }
				onLoad={ loadEditorContent }
				onError={ noop }
			>
				<Toolbar project={ project } />
				<DocumentSettings project={ project } />

				<AutoSubmitButton />
			</IsolatedBlockEditor>
		</div>
	);
};

registerBlocks();

export default Editor;
