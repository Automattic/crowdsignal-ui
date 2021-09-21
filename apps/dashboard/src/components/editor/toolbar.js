/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ToolbarSlot } from 'isolated-block-editor'; // eslint-disable-line import/named

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import { useDispatch, useSelect } from '@wordpress/data';

const Toolbar = ( { projectId } ) => {
	const { saveAndUpdateProject } = useDispatch( STORE_NAME );

	const [ project, isSaving ] = useSelect( ( select ) => {
		return [
			select( STORE_NAME ).getProject( projectId ),
			select( STORE_NAME ).isProjectSaving(),
		];
	} );

	const syncProject = () => {
		const payload = { title: 'Drafted!' };
		saveAndUpdateProject( projectId, {
			...project,
			...payload,
		} );
	};

	const publishProject = () => {
		const payload = { title: 'Published!', publish: true };
		saveAndUpdateProject( projectId, {
			...project,
			content: {
				...project.content,
				published: {
					...project.content.draft,
				},
			},
			...payload,
		} );
	};
	return (
		<ToolbarSlot className="block-editor__crowdsignal-toolbar">
			<Button className="is-crowdsignal">
				{ __( 'Preview', 'block-editor' ) }
			</Button>
			<Button className="is-crowdsignal" variant="secondary">
				{ __( 'Share', 'block-editor' ) }
			</Button>
			<Button
				className="is-crowdsignal"
				variant="secondary"
				onClick={ syncProject }
				disabled={ isSaving }
			>
				{ __( 'Save draft', 'dashboard' ) }
			</Button>
			<Button
				className="is-crowdsignal"
				variant="primary"
				onClick={ publishProject }
				disabled={ isSaving }
			>
				{ __( 'Publish', 'dashboard' ) }
			</Button>
		</ToolbarSlot>
	);
};

export default Toolbar;
