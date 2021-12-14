/**
 * External dependencies
 */
import { TextControl, ToggleControl } from '@wordpress/components';
import {
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const BorderSettings = ( { attributes, setAttributes, initialOpen } ) => {
	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: value,
		} );

	const handleChangeNumberAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: parseInt( value, 10 ),
		} );

	return (
		<PanelColorGradientSettings
			title={ __( 'Border', 'blocks' ) }
			initialOpen={ initialOpen }
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
	);
};

export default BorderSettings;
