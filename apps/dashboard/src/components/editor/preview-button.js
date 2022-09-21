/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { DropdownMenu, MenuGroup, MenuItem } from '@wordpress/components';
import { check, external } from '@wordpress/icons';
import { useDispatch, useSelect } from '@wordpress/data';
import { map, snakeCase, values } from 'lodash';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import { useEffect } from '@wordpress/element';
import { PREVIEW_TYPES } from '../../data/editor/util';

const PreviewButton = ( { disabled, previewURL } ) => {
	const { setIsIframePreview, setDeviceType, setCanvasStyles } = useDispatch(
		'isolated/editor'
	);

	const {
		currentPageIndex,
		editorSettings,
		embedCardStyle,
		embedPopupStyle,
		currentPreviewType,
	} = useSelect( ( select ) => {
		const {
			getEditorCurrentPageIndex,
			getEditorSettings,
			getEditorEmbedCardPreviewStyle,
			getEditorEmbedPopupPreviewStyle,
			getEditorPreviewType,
		} = select( STORE_NAME );

		return {
			currentPageIndex: getEditorCurrentPageIndex(),
			editorSettings: getEditorSettings(),
			embedCardStyle: getEditorEmbedCardPreviewStyle(),
			embedPopupStyle: getEditorEmbedPopupPreviewStyle(),
			currentPreviewType: getEditorPreviewType(),
		};
	} );

	const { updateEditorPreviewType, updateEditorSettings } = useDispatch(
		STORE_NAME
	);

	const setFixedToolbar = ( isFixedToolbar ) => {
		updateEditorSettings( {
			iso: {
				defaultPreferences: {
					...editorSettings?.iso?.defaultPreferences,
					fixedToolbar: isFixedToolbar,
				},
			},
		} );
	};

	const setPreviewType = ( preview ) => {
		let canvasStyles;

		if ( preview === PREVIEW_TYPES.EMBED_CARD ) {
			canvasStyles = embedCardStyle;
		} else if ( preview === PREVIEW_TYPES.POPUP ) {
			canvasStyles = embedPopupStyle;
		}

		updateEditorPreviewType( preview.type );
		setIsIframePreview( preview.isIframe );
		setDeviceType( preview.type );
		setCanvasStyles( canvasStyles );
		setFixedToolbar( preview.fixedToolbar );
	};

	useEffect( () => {
		if ( currentPreviewType === PREVIEW_TYPES.EMBED_CARD.type ) {
			setCanvasStyles( embedCardStyle );
		} else if ( currentPreviewType === PREVIEW_TYPES.POPUP.type ) {
			setCanvasStyles( embedPopupStyle );
		}
	}, [ embedCardStyle, embedPopupStyle ] );

	useEffect( () => {
		const preview =
			PREVIEW_TYPES[ snakeCase( currentPreviewType ).toUpperCase() ];
		setPreviewType( preview );
	}, [ currentPageIndex ] );

	return (
		<DropdownMenu
			popoverProps={ {
				position: 'bottom left',
			} }
			toggleProps={ {
				children: __( 'Preview', 'dashboard' ),
				disabled,
				variant: 'tertiary',
			} }
			menuProps={ {
				'aria-label': __( 'Preview options' ),
			} }
			icon={ null }
		>
			{ ( { onClose } ) => (
				<>
					<MenuGroup>
						{ map( values( PREVIEW_TYPES ), ( preview ) => (
							<MenuItem
								icon={
									currentPreviewType === preview.type && check
								}
								key={ preview.type }
								onClick={ () => {
									setPreviewType( preview );
									onClose();
								} }
							>
								{ preview.name }
							</MenuItem>
						) ) }
					</MenuGroup>
					<MenuGroup>
						<MenuItem
							href={ previewURL }
							icon={ external }
							target="_blank"
							onClick={ () => onClose() }
						>
							{ __( 'Preview in new tab' ) }
						</MenuItem>
					</MenuGroup>
				</>
			) }
		</DropdownMenu>
	);
};

export default PreviewButton;
