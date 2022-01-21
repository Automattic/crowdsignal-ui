/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { EditablePageHeader, TabNavigation } from '@crowdsignal/components';
import { STORE_NAME } from '../../data';

/**
 * Style dependencies
 */
import './style.scss';

const Tab = {
	EDITOR: 'editor',
	RESULTS: 'results',
};

const ProjectNavigation = ( { activeTab, disableTitleEditor, projectId } ) => {
	const [ editorTitle, projectTitle ] = useSelect(
		( select ) => [
			select( STORE_NAME ).getEditorTitle(),
			select( STORE_NAME ).getProjectTitle( projectId ),
		],
		[ projectId ]
	);

	const { setEditorTitle, updateEditorProjectId } = useDispatch( STORE_NAME );

	useEffect( () => {
		updateEditorProjectId( projectId );
	}, [ projectId ] );

	const updateTitle = ( title ) => {
		if ( title !== projectTitle ) {
			setEditorTitle( title );
		}

		return true;
	};

	return (
		<div className="project-navigation">
			<EditablePageHeader
				onChange={ updateTitle }
				text={
					editorTitle ||
					projectTitle ||
					__( 'Untitled Project', 'dashboard' )
				}
				disabled={ disableTitleEditor }
			/>
			<TabNavigation>
				<TabNavigation.Tab
					isSelected={ activeTab === Tab.EDITOR }
					href={ `/project/${ projectId }` }
					isDisabled={ ! projectId }
				>
					{ __( 'Editor', 'dashboard' ) }
				</TabNavigation.Tab>
				<TabNavigation.Tab
					isSelected={ activeTab === Tab.RESULTS }
					isDisabled={ ! projectId }
					href={ `/project/${ projectId }/results` }
				>
					{ __( 'Results', 'dashboard' ) }
				</TabNavigation.Tab>
			</TabNavigation>
		</div>
	);
};

ProjectNavigation.Tab = Tab;

export default ProjectNavigation;
