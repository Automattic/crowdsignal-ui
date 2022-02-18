/**
 * External dependencies
 */
import {
	// eslint-disable-next-line
	__experimentalToggleGroupControl as ToggleGroupControl,
	// eslint-disable-next-line
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	PanelBody,
	TextControl,
	ToggleControl,
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

	const handleChangeNumericAttribute = ( key ) => ( value ) =>
		handleChangeAttribute( key )( parseInt( value ) );

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
				<TextControl
					label="Placeholder"
					value={ attributes.placeholder }
					onChange={ handleChangeAttribute( 'placeholder' ) }
				/>
				<TextControl
					label={ __( 'Input field height', 'block-editor' ) }
					type="number"
					value={ attributes.inputHeight }
					onChange={ handleChangeNumericAttribute( 'inputHeight' ) }
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
