import SingleStatPoller from '../stat-poller';

const App = () => {
	return (
		<div
			className="app"
			style={ { display: 'flex', justifyContent: 'center' } }
		>
			<SingleStatPoller
				description="API requests"
				statName="api"
				statValue="crowdsignal-api-request"
			/>
			<SingleStatPoller
				description="Counted Votes"
				statName="voting"
				statValue="vote"
				interval="60000"
			/>
		</div>
	);
};

export default App;
