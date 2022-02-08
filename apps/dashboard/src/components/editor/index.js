/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import HeaderMeta from '../header-meta';
import { STORE_NAME } from '../../data';
import BlockEditor from './editor';
import EditorLoadingPlaceholder from './loading-placeholder';

const Editor = ( { projectId } ) => {
	const [ project, isLoading ] = useSelect( ( select ) => {
		if ( ! projectId ) {
			return [
				{
					draftContent: {
						pages: [ [] ],
					},
				},
				false,
			];
		}

		return [
			select( STORE_NAME ).getProject( projectId ),
			select( STORE_NAME ).isProjectLoading( projectId ),
		];
	} );

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
