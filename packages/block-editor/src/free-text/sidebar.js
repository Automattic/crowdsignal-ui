/**
 * External dependencies
 */
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
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

	const handleChangeNumberAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: parseInt( value, 10 ),
		} );

	const handleChangeInputHeight = ( value ) =>
		setAttributes( {
			inputHeight: `${ value }px`,
		} );

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Answer Settings', 'blocks' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'The answer is required' ) }
					checked={ attributes.mandatory }
					onChange={ handleChangeAttribute( 'mandatory' ) }
				/>

				<TextControl
					label="Input field height"
					type="number"
					onChange={ handleChangeInputHeight }
				/>
			</PanelBody>

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

			<PanelColorGradientSettings
				title={ __( 'Border', 'blocks' ) }
				settings={ [
					{
						label: __( 'Border color', 'blocks ' ),
						colorValue: attributes.borderColor,
						onColorChange: handleChangeAttribute( 'borderColor' ),
					},
				] }
			>
				<TextControl
					label={ __( 'Border thickness', 'blocks' ) }
					type="number"
					value={ attributes.borderWidth }
					onChange={ handleChangeNumberAttribute( 'borderWidth' ) }
				/>
				<TextControl
					label={ __( 'Corner radius', 'blocks' ) }
					type="number"
					value={ attributes.borderRadius }
					onChange={ handleChangeNumberAttribute( 'borderRadius' ) }
				/>

				<ToggleControl
					label={ __( 'Drop shadow', 'blocks' ) }
					checked={ attributes.boxShadow }
					onChange={ handleChangeAttribute( 'boxShadow' ) }
				/>
			</PanelColorGradientSettings>
		</InspectorControls>
	);
};

export default Sidebar;
