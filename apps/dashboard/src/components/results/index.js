/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import IFrame from '../iframe';
import HeaderMeta from '../header-meta';
import ProjectNavigation from '../project-navigation';

const Results = ( { projectId } ) => {
	return (
		<div className="results">
			<HeaderMeta title={ __( `Project Results`, 'dashboard' ) } />

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
