/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
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

const ProjectNavigation = ( { activeTab, projectId } ) => {
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const project = useSelect(
		( select ) => select( STORE_NAME ).getProject( projectId ),
		[ projectId ]
	);

	const updateTitle = ( title ) =>
		saveAndUpdateProject( projectId, {
			name: title,
			title,
		} );

	return (
		<div className="project-navigation">
			<EditablePageHeader
				onChange={ updateTitle }
				text={ project?.title || __( 'Untitled Project', 'dashboard' ) }
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
