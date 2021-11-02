/**
 * External dependencies
 */
import {
	Button,
	Icon,
	MenuGroup,
	MenuItem,
	Popover,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { check, external } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PreviewType } from './constants';
import { STORE_NAME } from '../../data';

const PreviewButton = ( { projectId } ) => {
	const [ showDropdown, setShowDropdown ] = useState( false );

	const { setEditorPreviewType } = useDispatch( STORE_NAME );

	const previewType = useSelect(
		( select ) =>
			select( STORE_NAME ).getEditorPreviewType() || PreviewType.DESKTOP
	);

	const toggleDropdown = () => setShowDropdown( ! showDropdown );

	return (
		<div>
			<Button
				className="is-crowdsignal"
				variant="tertiary"
				onClick={ toggleDropdown }
			>
				{ __( 'Preview', 'block-editor' ) }
			</Button>

			{ showDropdown && (
				<Popover onClose={ toggleDropdown }>
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
							<Button
								variant="tertiary"
								href={ `/project/${ projectId }/preview` }
								target="_blank"
							>
								{ __( 'Preview in a new tab', 'dashboard' ) }
								<Icon icon={ external } />
							</Button>
						</MenuGroup>
					) }
				</Popover>
			) }
		</div>
	);
};

export default PreviewButton;
