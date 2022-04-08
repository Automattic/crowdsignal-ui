/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import IFrame from '../iframe';
import HeaderMeta from '../header-meta';
import ProjectNavigation from '../project-navigation';
import { STORE_NAME } from '../../data';

const Results = ( { projectId } ) => {
	const [ project, isLoading ] = useSelect(
		( select ) => {
			return [
				select( STORE_NAME ).getProject( projectId ),
				select( STORE_NAME ).isProjectLoading( projectId ),
			];
		},
		[ projectId ]
	);

	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const updateProjectTitle = ( title ) =>
		saveAndUpdateProject( projectId, { title } );

	return (
		<div className="results">
			<HeaderMeta title={ __( `Project Results`, 'dashboard' ) } />

			{ project && ! isLoading && (
				<>
					<ProjectNavigation
						activeTab={ ProjectNavigation.Tab.RESULTS }
						projectId={ projectId }
						onChangeTitle={ updateProjectTitle }
					/>

					<IFrame
						src={ `/surveys/${ projectId }/report/overview${ window.location.search }` }
						width="100%"
					/>
				</>
			) }
		</div>
	);
};

export default Results;
