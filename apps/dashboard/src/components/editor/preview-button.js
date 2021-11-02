/**
 * External dependencies
 */
import {
	Button,
	DropdownMenu,
	Icon,
	MenuItem,
	MenuGroup,
} from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { check, external } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PreviewType } from './constants';
import { STORE_NAME } from '../../data';

/**
 * Style dependencies
 */
import { ExternalPreviewLink } from './styles/preview-button';

const PreviewButton = ( { projectId } ) => {
	const { setEditorPreviewType } = useDispatch( STORE_NAME );

	const previewType = useSelect(
		( select ) =>
			select( STORE_NAME ).getEditorPreviewType() || PreviewType.DESKTOP
	);

	return (
		<DropdownMenu
			icon={ null }
			toggleProps={ {
				isTertiary: true,
				className: 'is-crowdsignal',
				children: __( 'Preview', 'dashboard' ),
			} }
		>
			{ () => (
				<>
					<MenuGroup>
						<MenuItem
							onClick={ () =>
								setEditorPreviewType( PreviewType.DESKTOP )
							}
							icon={
								previewType === PreviewType.DESKTOP && check
							}
						>
							{ __( 'Desktop', 'dashboard' ) }
						</MenuItem>
						<MenuItem
							onClick={ () =>
								setEditorPreviewType( PreviewType.TABLET )
							}
							icon={ previewType === PreviewType.TABLET && check }
						>
							{ __( 'Tablet', 'dashboard' ) }
						</MenuItem>
						<MenuItem
							onClick={ () =>
								setEditorPreviewType( PreviewType.MOBILE )
							}
							icon={ previewType === PreviewType.MOBILE && check }
						>
							{ __( 'Mobile', 'dashboard' ) }
						</MenuItem>
					</MenuGroup>

					{ projectId && (
						<MenuGroup>
							<ExternalPreviewLink
								as={ Button }
								className={ ExternalPreviewLink }
								variant="tertiary"
								href={ `/project/${ projectId }/preview` }
								target="_blank"
							>
								{ __( 'Preview in a new tab', 'dashboard' ) }
								<Icon icon={ external } />
							</ExternalPreviewLink>
						</MenuGroup>
					) }
				</>
			) }
		</DropdownMenu>
	);
};

export default PreviewButton;
