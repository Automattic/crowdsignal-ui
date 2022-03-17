/**
 * External dependencies
 */
import {
	Button,
	ButtonGroup,
	PanelBody,
	ToggleControl,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { MultipleChoiceQuestion } from '@crowdsignal/blocks';
import ColorSettings from '../components/color-settings';

const Sidebar = ( { attributes, blockStyle, setAttributes } ) => {
	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: value,
		} );

	const handleChangeWidth = ( value ) =>
		setAttributes( {
			width: attributes.width === value ? undefined : value,
		} );

	return (
		<InspectorControls>
			<ColorSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>

			{ blockStyle === MultipleChoiceQuestion.Style.BUTTON && (
				<PanelBody title={ __( 'Width settings', 'block-editor' ) }>
					<ButtonGroup
						aria-label={ __( 'Button width', 'block-editor' ) }
					>
						{ [ 25, 50, 75, 100 ].map( ( width ) => (
							<Button
								isSmall
								key={ width }
								variant={
									width === attributes.width
										? 'primary'
										: undefined
								}
								onClick={ () => handleChangeWidth( width ) }
							>
								{ width }%
							</Button>
						) ) }
					</ButtonGroup>
				</PanelBody>
			) }

			<PanelBody title={ __( 'Style settings', 'block-editor' ) }>
				<ToggleControl
					label={ __(
						'Sync style settings for all answers',
						'block-editor'
					) }
					checked={ attributes.shareSiblingAttributes }
					onChange={ handleChangeAttribute(
						'shareSiblingAttributes'
					) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Sidebar;
