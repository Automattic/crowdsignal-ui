/**
 * External dependencies
 */
import {
	// eslint-disable-next-line
	__experimentalToggleGroupControl as ToggleGroupControl,
	// eslint-disable-next-line
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	PanelBody,
	ToggleControl,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import ColorSettings from '../components/color-settings';

export default ( { attributes, setAttributes } ) => {
	const widthOptions = [ '25%', '50%', '75%', '100%' ];

	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: value,
		} );

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Field Settings', 'block-editor' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'The field is required', 'block-editor' ) }
					checked={ attributes.mandatory }
					onChange={ handleChangeAttribute( 'mandatory' ) }
				/>
				<ToggleControl
					label={ __( 'Enable flag drop down', 'block-editor' ) }
					checked={ attributes.flag }
					onChange={ handleChangeAttribute( 'flag' ) }
				/>
				<TextControl
					label={ __( 'Set a Default Country', 'block-editor' ) }
					value={ attributes.country.toUpperCase() }
					onChange={ handleChangeAttribute( 'country' ) }
					help={ __( 'Use country two letter code', 'block-editor' ) }
				/>
				<ToggleGroupControl
					label={ __( 'Field Width', 'block-editor' ) }
					value={ attributes.inputWidth }
					onChange={ handleChangeAttribute( 'inputWidth' ) }
				>
					{ widthOptions.map( ( option ) => (
						<ToggleGroupControlOption
							key={ option }
							value={ option }
							label={ option }
						/>
					) ) }
				</ToggleGroupControl>
			</PanelBody>
			<ColorSettings
				initialOpen={ false }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</InspectorControls>
	);
};
