import SingleStatPoller from '../stat-poller';

const rowStyle = {
	padding: '16px',
	display: 'flex',
	justifyContent: 'center',
};

const App = () => {
	return (
		<div className="app">
			<div style={ rowStyle }>
				<SingleStatPoller
					description="API requests"
					statName="api"
					statValue="crowdsignal-api-request"
				/>
				<SingleStatPoller
					description="Form responses (Browser)"
					statName="response-type"
					statValue="Browser"
					interval="60000"
				/>
				<SingleStatPoller
					description="Form responses (Mobile)"
					statName="response-type"
					statValue="Mobile Device"
					interval="60000"
				/>
				<SingleStatPoller
					description="Form responses (Mobile App)"
					statName="response-type"
					statValue="Mobile App"
					interval="60000"
				/>
				<SingleStatPoller
					description="Poll Votes"
					statName="voting"
					statValue="vote"
					interval="60000"
				/>
			</div>

			<div style={ rowStyle }>
				<SingleStatPoller
					description="SUP Poll Results"
					statName="single-user-partner"
					statValue="poll-results"
				/>
				<SingleStatPoller
					description="SUP Poll Votes"
					statName="single-user-partner"
					statValue="poll-vote"
				/>
				<SingleStatPoller
					description="SUP Poll Archive"
					statName="single-user-partner"
					statValue="poll-archive"
				/>
				<SingleStatPoller
					description="SUP Poll Create"
					statName="single-user-partner"
					statValue="poll-create"
				/>
				<SingleStatPoller
					description="SUP Poll Edit"
					statName="single-user-partner"
					statValue="poll-edit"
				/>
			</div>
		</div>
	);
};

export default App;
