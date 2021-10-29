// @ts-check

/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { EditablePageHeader, TabNavigation } from '@crowdsignal/components';
import { updateProjectTitle } from '@crowdsignal/types';
import { STORE_NAME } from '../../data';

/**
 * Style dependencies
 */
import './style.scss';

/**
 * @typedef {import("../../../../../packages/types/src/project").Project} Project
 */

/**
 * @enum {string}
 */
const Tab = {
	EDITOR: 'editor',
	RESULTS: 'results',
};

/**
 * @param {Object} props
 * @param {string} props.activeTab
 * @param {number} props.projectId
 */
const ProjectNavigation = ( { activeTab, projectId } ) => {
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	/** @type {Project} */
	const project = useSelect(
		( select ) => select( STORE_NAME ).getProject( projectId ),
		[ projectId ]
	);

	/** @type {(title: string) => void} */
	const updateTitle = ( title ) =>
		saveAndUpdateProject( projectId, updateProjectTitle( project, title ) );

	return (
		<div className="project-navigation">
			<EditablePageHeader
				onChange={ updateTitle }
				text={ project?.title || __( 'Untitled Project', 'dashboard' ) }
			/>
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
};

ProjectNavigation.Tab = Tab;

export default ProjectNavigation;
