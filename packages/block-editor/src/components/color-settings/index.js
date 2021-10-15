/**
 * External dependencies
 */
import {
	ContrastChecker,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ColorSettings = ( { attributes, setAttributes } ) => {
	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: value,
		} );

	return (
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
					onColorChange: handleChangeAttribute( 'backgroundColor' ),
					onGradientChange: handleChangeAttribute( 'gradient' ),
				},
			] }
		>
			<ContrastChecker
				backgroundColor={ attributes.backgroundColor }
				color={ attributes.textColor }
			/>
		</PanelColorGradientSettings>
	);
};

export default ColorSettings;
