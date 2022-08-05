/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import HeaderMeta from '../header-meta';
import { blankProjectTemplate } from '../new-project-wizard/templates/blank';
import { STORE_NAME } from '../../data';
import BlockEditor from './editor';
import EditorLoadingPlaceholder from './loading-placeholder';
import { trackEditorLoad } from '../../util/tracking';

const Editor = ( { projectId } ) => {
	const [ project, isLoading ] = useSelect(
		( select ) => {
			if ( ! projectId ) {
				return [ blankProjectTemplate.project, false ];
			}

			return [
				select( STORE_NAME ).getProject( projectId ),
				select( STORE_NAME ).isProjectLoading( projectId ),
			];
		},
		[ projectId ]
	);

	const currentUser = useSelect(
		( select ) => select( STORE_NAME ).getCurrentUser(),
		[]
	);

	useEffect( () => {
		trackEditorLoad( currentUser, projectId );
	}, [ currentUser ] );

	if ( isLoading ) {
		return (
			<>
				<HeaderMeta title={ __( 'Edit Project', 'dashboard' ) } />
				<EditorLoadingPlaceholder />
			</>
		);
	}

	return <BlockEditor project={ project } />;
};

export default Editor;
