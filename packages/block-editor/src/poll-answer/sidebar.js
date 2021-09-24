/**
 * External dependencies
 */
import { Button, ButtonGroup, PanelBody } from '@wordpress/components';
import {
	ContrastChecker,
	InspectorControls,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Sidebar = ( { attributes, setAttributes } ) => {
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
			<PanelColorGradientSettings
				title={ __( 'Color', 'blocks' ) }
				disableCustomGradients={ false }
				settings={ [
					{
						label: __( 'Text color', 'blocks' ),
						colorValue: attributes.textColor,
						onColorChange: handleChangeAttribute( 'textColor' ),
					},
					{
						label: __( 'Background color', 'blocks' ),
						colorValue: attributes.backgroundColor,
						gradientValue: attributes.gradient,
						onColorChange: handleChangeAttribute(
							'backgroundColor'
						),
						onGradientChange: handleChangeAttribute( 'gradient' ),
					},
				] }
			>
				<ContrastChecker
					backgroundColor={ attributes.backgroundColor }
					color={ attributes.textColor }
				/>
			</PanelColorGradientSettings>

			<PanelBody title={ __( 'Width settings', 'blocks' ) }>
				<ButtonGroup aria-label={ __( 'Button width' ) }>
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
		</InspectorControls>
	);
};

export default Sidebar;
