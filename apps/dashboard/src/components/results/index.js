/**
 * Internal dependencies
 */
import IFrame from '../iframe';
import ProjectNavigation from '../project-navigation';

const Results = ( { projectId } ) => {
	return (
		<div className="results">
			<ProjectNavigation
				activeTab={ ProjectNavigation.Tab.RESULTS }
				projectId={ projectId }
			/>

			<IFrame
				src={ `/surveys/${ projectId }/report/overview` }
				width="100%"
			/>
		</div>
	);
};

export default Results;
