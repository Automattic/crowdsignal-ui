/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PageHeader, TabNavigation } from '@crowdsignal/components';
import ProjectTools from '../project-tools';
import { STORE_NAME } from '../../data';
import { useSelect } from '@wordpress/data';

/**
 * Style dependencies
 */
import './style.scss';

const Tab = {
	EDITOR: 'editor',
	RESULTS: 'results',
};

const ProjectNavigation = ( { activeTab, projectId } ) => {
	const isSaving = useSelect( ( select ) =>
		select( STORE_NAME ).isProjectSaving()
	);
	return (
		<div className="project-navigation">
			<PageHeader>My Great New Poll</PageHeader>
			<TabNavigation>
				<TabNavigation.Tab
					isSelected={ activeTab === Tab.EDITOR }
					href={ `/edit/poll/${ projectId }` }
				>
					{ __( 'Editor', 'dashboard' ) }
				</TabNavigation.Tab>
				<TabNavigation.Tab
					isSelected={ activeTab === Tab.RESULTS }
					href={ `/edit/poll/${ projectId }/results` }
				>
					{ __( 'Results', 'dashboard' ) }
				</TabNavigation.Tab>
			</TabNavigation>
			<ProjectTools projectId={ projectId } isSaving={ isSaving } />
		</div>
	);
};

ProjectNavigation.Tab = Tab;

export default ProjectNavigation;
