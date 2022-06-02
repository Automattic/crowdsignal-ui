/**
 * External dependencies
 */
import { PanelBody, ToggleControl } from '@wordpress/components';
import {
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import BorderSettings from '../components/border-settings';
import ColorSettings from '../components/color-settings';

const Sidebar = ( { attributes, setAttributes } ) => {
	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: value,
		} );

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Answer Settings', 'block-editor' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'An answer is required', 'block-editor' ) }
					checked={ attributes.mandatory }
					onChange={ handleChangeAttribute( 'mandatory' ) }
				/>
			</PanelBody>

			<ColorSettings
				initialOpen={ false }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<BorderSettings
				initialOpen={ false }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>

			<PanelColorGradientSettings
				title={ __( 'Table border', 'block-editor' ) }
				initialOpen={ false }
				settings={ [
					{
						label: __( 'Border color', 'block-editor' ),
						colorValue: attributes.tableBorderColor,
						onColorChange: handleChangeAttribute(
							'tableBorderColor'
						),
					},
				] }
			/>
		</InspectorControls>
	);
};

export default Sidebar;
