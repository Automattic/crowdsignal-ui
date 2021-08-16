/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Button } from '@crowdsignal/components';
import { STORE_NAME } from 'data';
import { useDispatch, withSelect } from '@wordpress/data';
/**
 * Style dependencies
 */
import './style.scss';

const ProjectTools = ( { projectId, isFetching } ) => {
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const syncProject = () => {
		saveAndUpdateProject( projectId, {
			title: 'this is here to create a the mock project',
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
			<Button onClick={ syncProject } disabled={ isFetching }>
				{ __( 'Save draft', 'dashboard' ) }
			</Button>
			<Button primary onClick={ publishProject } disabled={ isFetching }>
				{ __( 'Publish', 'dashboard' ) }
			</Button>
		</div>
	);
};

export default withSelect( ( select ) => {
	return {
		isFetching: select( STORE_NAME ).isFetching(),
	};
} )( ProjectTools );
