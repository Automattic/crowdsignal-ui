/**
 * External dependencies
 */
import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import IFrame from '../iframe';
import HeaderMeta from '../header-meta';
import ProjectNavigation from '../project-navigation';
import { STORE_NAME } from '../../data';

const Results = ( { projectId } ) => {
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const updateProjectTitle = ( title ) =>
		saveAndUpdateProject( projectId, { title } );

	return (
		<div className="results">
			<HeaderMeta title={ __( `Project Results`, 'dashboard' ) } />

			<ProjectNavigation
				activeTab={ ProjectNavigation.Tab.RESULTS }
				projectId={ projectId }
				onChangeTitle={ updateProjectTitle }
			/>

			<IFrame
				src={ `/surveys/${ projectId }/report/overview` }
				width="100%"
			/>
		</div>
	);
};

export default Results;
