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
	const widthOptions = [ 25, 50, 75, 100 ];

	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: value,
		} );

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Field Settings', 'blocks' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'The field is required' ) }
					checked={ attributes.mandatory }
					onChange={ handleChangeAttribute( 'mandatory' ) }
				/>
				<TextControl
					label="Input field height"
					type="number"
					value={ attributes.inputHeight }
					onChange={ handleChangeAttribute( 'inputHeight' ) }
				/>
				<ToggleGroupControl
					onChange={ handleChangeAttribute( 'width' ) }
					value={ attributes.width }
					label={ __( 'Field Width' ) }
				>
					{ widthOptions.map( ( option ) => (
						<ToggleGroupControlOption
							key={ option }
							value={ option }
							label={ `${ option }%` }
						/>
					) ) }
				</ToggleGroupControl>
			</PanelBody>
			<ColorSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</InspectorControls>
	);
};
