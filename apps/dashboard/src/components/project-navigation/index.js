/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PageHeader, TabNavigation } from '@crowdsignal/components';

/**
 * Style dependencies
 */
import './style.scss';

const Tab = {
	EDITOR: 'editor',
	RESULTS: 'results',
};

const ProjectNavigation = ( { activeTab, projectId } ) => (
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
	</div>
);

ProjectNavigation.Tab = Tab;

export default ProjectNavigation;
