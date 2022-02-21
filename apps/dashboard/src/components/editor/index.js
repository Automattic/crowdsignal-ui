/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { v4 as uuid } from 'uuid';

/**
 * Internal dependencies
 */
import HeaderMeta from '../header-meta';
import { STORE_NAME } from '../../data';
import BlockEditor from './editor';
import EditorLoadingPlaceholder from './loading-placeholder';

const Editor = ( { projectId, theme } ) => {
	const [ project, isLoading ] = useSelect( ( select ) => {
		if ( ! projectId ) {
			return [
				{
					draftContent: {
						pages: [
							[],
							[
								{
									attributes: {
										content: __(
											'Thank you!',
											'dashboard'
										),
										level: 2,
										textAlign: 'center',
									},
									clientId: uuid(),
									innerBlocks: [],
									isValid: true,
									name: 'core/heading',
								},
							],
						],
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

	return <BlockEditor project={ project } theme={ theme } />;
};

export default Editor;
