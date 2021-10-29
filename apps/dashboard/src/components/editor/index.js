// @ts-check

/**
 * External dependencies
 */
import { parse } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import { useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import IsolatedBlockEditor from 'isolated-block-editor'; // eslint-disable-line import/default
import { debounce, noop } from 'lodash';

/**
 * Internal dependencies
 */
import { useStylesheet } from '@crowdsignal/hooks';
import { createProject, updateProjectPage } from '@crowdsignal/types';
import ProjectNavigation from '../project-navigation';
import { STORE_NAME } from '../../data';
import { registerBlocks } from './blocks';
import EditorLoadingPlaceholder from './loading-placeholder';
import BlockLoader from './block-loader';
import DocumentSettings from './document-settings';
import Toolbar from './toolbar';

/**
 * Style dependencies
 */
import './style.scss';

/**
 * @typedef {import("../../../../../packages/types/src/project").Project} Project
 */

const editorSettings = {
	iso: {
		defaultPreferences: {
			fixedToolbar: false,
		},
		toolbar: {
			documentInspector: __( 'Document', 'dashboard' ),
			inspector: true,
			toc: true,
		},
		// documentInspector: __( 'Document', 'dashboard' ),
	},
};

/**
 * @param  {Object} props
 * @param  {number} props.projectId
 */
const Editor = ( { projectId } ) => {
	/** @type {[Project, boolean]} */
	const [ project, isSaved ] = useSelect( ( select ) => {
		return [
			select( STORE_NAME ).getProject( projectId ),
			select( STORE_NAME ).isProjectSaved(),
		];
	} );

	const { saveAndUpdateProject, changeProjectContent } = useDispatch(
		STORE_NAME
	);

	/** @type {(content: string) => void} */
	const debounceSave = useCallback(
		debounce( ( content ) => {
			try {
				const blocks = parse( content );

				const updatedProject = updateProjectPage(
					project || createProject(),
					blocks,
					0
				);

				saveAndUpdateProject( projectId, updatedProject );
			} catch ( error ) {
				// TODO: replace this with some nince notice or something
				// eslint-disable-next-line
				console.error( 'Failed to save project content.' );
				// eslint-disable-next-line
				console.error( error );
			}
		}, 5000 ),
		[ projectId, project ]
	);

	const editorBlocks = ( project.publicContent || project.draftContent )
		.pages[ 0 ];

	useStylesheet(
		'https://app.crowdsignal.com/themes/leven/style-editor.css'
	);

	const handleChangeContent = useCallback(
		( content ) => {
			if ( isSaved ) {
				changeProjectContent( project );
			}
			debounceSave( content );
		},
		[ debounceSave, isSaved ]
	);

	if ( projectId && null === project ) {
		// project is being loaded
		return <EditorLoadingPlaceholder />;
	}

	return (
		<div className="editor">
			<ProjectNavigation
				activeTab={ ProjectNavigation.Tab.EDITOR }
				projectId={ projectId }
			/>

			<IsolatedBlockEditor
				settings={ editorSettings }
				onSaveContent={ handleChangeContent }
				onLoad={ noop }
				onError={ noop }
			>
				<Toolbar projectId={ projectId } />
				<DocumentSettings />

				<BlockLoader blocks={ editorBlocks } />
			</IsolatedBlockEditor>
		</div>
	);
};

registerBlocks();

export default Editor;
