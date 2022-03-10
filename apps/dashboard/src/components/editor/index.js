/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import HeaderMeta from '../header-meta';
import { blankProjectTemplate } from '../new-project-wizard/templates';
import { STORE_NAME } from '../../data';
import BlockEditor from './editor';
import EditorLoadingPlaceholder from './loading-placeholder';

const Editor = ( { projectId, theme } ) => {
	const [ project, isLoading ] = useSelect(
		( select ) => {
			if ( ! projectId ) {
				return [
					{ ...blankProjectTemplate.project, theme: 'leven' },
					false,
				];
			}

			return [
				select( STORE_NAME ).getProject( projectId ),
				select( STORE_NAME ).isProjectLoading( projectId ),
			];
		},
		[ projectId ]
	);

	if ( isLoading ) {
		return (
			<>
				<HeaderMeta title={ __( 'Edit Project', 'dashboard' ) } />
				<EditorLoadingPlaceholder />
			</>
		);
	}

	return <BlockEditor project={ project } theme={ theme } />;
};

export default Editor;
