/**
 * Internal dependencies
 */
import PollNavigation from '../poll-navigation';

const PollResults = ( { pollId } ) => {
	return (
		<div className="poll-results">
			<PollNavigation
				activeTab={ PollNavigation.Tab.RESULTS }
				pollId={ pollId }
			/>
			Poll Results
		</div>
	);
};

export default PollResults;
