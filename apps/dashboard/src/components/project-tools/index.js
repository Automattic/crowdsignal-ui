/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Button } from '@crowdsignal/components';
import { STORE_NAME } from 'data';
import { useDispatch } from '@wordpress/data';
/**
 * Style dependencies
 */
import './style.scss';

const ProjectTools = ( { projectId, isSaving } ) => {
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const syncProject = () => {
		saveAndUpdateProject( projectId, {
			title: 'Drafted!',
		} );
	};

	const publishProject = () => {
		saveAndUpdateProject( projectId, {
			title: 'Published!',
			publish: true,
		} );
	};

	return (
		<div className="project-tools">
			<Button onClick={ syncProject } disabled={ isSaving }>
				{ __( 'Save draft', 'dashboard' ) }
			</Button>
			<Button primary onClick={ publishProject } disabled={ isSaving }>
				{ __( 'Publish', 'dashboard' ) }
			</Button>
		</div>
	);
};

export default ProjectTools;
