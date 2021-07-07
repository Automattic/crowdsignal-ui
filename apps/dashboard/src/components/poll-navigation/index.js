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

const PollNavigation = ( { activeTab, pollId } ) => (
	<div className="poll-navigation">
		<PageHeader>My Great New Poll</PageHeader>

		<TabNavigation>
			<TabNavigation.Tab
				isSelected={ activeTab === Tab.EDITOR }
				href={ `/edit/poll/${ pollId }` }
			>
				{ __( 'Edior', 'dashboard' ) }
			</TabNavigation.Tab>
			<TabNavigation.Tab
				isSelected={ activeTab === Tab.RESULTS }
				href={ `/edit/poll/${ pollId }/results` }
			>
				{ __( 'Results', 'dashboard' ) }
			</TabNavigation.Tab>
		</TabNavigation>
	</div>
);

PollNavigation.Tab = Tab;

export default PollNavigation;
