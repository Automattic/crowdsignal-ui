/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { Popover } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { EditablePageHeader, TabNavigation } from '@crowdsignal/components';
import { STORE_NAME } from '../../data';

/**
 * Style dependencies
 */
import './style.scss';

const Tab = {
	EDITOR: 'editor',
	RESULTS: 'results',
};
const ProjectNavigation = ( {
	activeTab,
	disableTitleEditor,
	onChangeTitle,
	projectId,
} ) => {
	const [ displayNotice, setDisplayNotice ] = useState( false );
	const [ editorTitle, projectTitle ] = useSelect(
		( select ) => [
			select( STORE_NAME ).getEditorTitle(),
			select( STORE_NAME ).getProjectTitle( projectId ),
		],
		[ projectId ]
	);
	const toggleNotice = () => setDisplayNotice( ! displayNotice );

	return (
		<div className="project-navigation">
			<EditablePageHeader
				onChange={ onChangeTitle }
				text={
					editorTitle ||
					projectTitle ||
					__( 'Untitled Project', 'dashboard' )
				}
				disabled={ disableTitleEditor }
			/>
			<TabNavigation>
				<TabNavigation.Tab
					isSelected={ activeTab === Tab.EDITOR }
					href={ `/project/${ projectId }` }
					isDisabled={ ! projectId }
				>
					{ __( 'Editor', 'dashboard' ) }
				</TabNavigation.Tab>
				<TabNavigation.Tab
					isSelected={ activeTab === Tab.RESULTS }
					isDisabled={ ! projectId }
					onMouseEnter={ toggleNotice }
					onMouseLeave={ toggleNotice }
					href={ `/project/${ projectId }/results` }
				>
					{ displayNotice ? (
						<Popover noArrow={ false }>
							{ __(
								'Please save draft or publish project before viewing results'
							) }
						</Popover>
					) : null }
					{ __( 'Results', 'dashboard' ) }
				</TabNavigation.Tab>
			</TabNavigation>
		</div>
	);
};

ProjectNavigation.Tab = Tab;

export default ProjectNavigation;
