/**
 * External dependencies
 */
import { useCallback } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { debounce, get, noop } from 'lodash';
import IsolatedBlockEditor from 'isolated-block-editor'; // eslint-disable-line import/default
import { parse } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { useStylesheet } from '@crowdsignal/hooks';
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

const Editor = ( { projectId } ) => {
	const project = useSelect( ( select ) =>
		select( STORE_NAME ).getProject( projectId )
	);

	const projectContent = get( project, [ 'content' ], {} );

	// TODO: need to compare draft/published, offer "restore" drafted content
	const draftedBlocks = get( projectContent, [ 'draft', 'pages', 0 ], [] );

	const displayedBlocks = get(
		projectContent,
		[ 'published', 'pages', 0 ],
		draftedBlocks
	);

	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const handleChangeContent = useCallback(
		debounce( ( content ) => {
			try {
				const blocks = parse( content );
				const currentProject = project || {};
				saveAndUpdateProject( projectId, {
					...currentProject,
					content: {
						...currentProject.content,
						draft: {
							pages: [ [ ...blocks ] ],
						},
					},
				} );
			} catch ( error ) {
				// TODO: replace this with some nince notice or something
				// eslint-disable-next-line
				console.error( 'Failed to save project content.' );
				// eslint-disable-next-line
				console.error( error );
			}
		}, 1000 ),
		[ projectId, project ]
	);

	useStylesheet(
		'https://app.crowdsignal.com/themes/leven/style-editor.css'
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

				<BlockLoader blocks={ displayedBlocks } />
			</IsolatedBlockEditor>
		</div>
	);
};

registerBlocks();

export default Editor;
