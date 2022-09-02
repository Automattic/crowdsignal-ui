/**
 * External dependencies
 */
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
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
				title={ __( 'Field Settings', 'blocks' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'Field is Required' ) }
					checked={ attributes.mandatory }
					onChange={ handleChangeAttribute( 'mandatory' ) }
				/>

				<TextControl
					label={ __( 'Checked Value', 'block-editor' ) }
					value={ attributes.checkedText }
					onChange={ handleChangeAttribute( 'checkedText' ) }
					help={ __( 'TBD', 'block-editor' ) }
				/>
				<TextControl
					label={ __( 'Unchecked Value', 'block-editor' ) }
					value={ attributes.uncheckedText }
					onChange={ handleChangeAttribute( 'uncheckedText' ) }
					help={ __( 'TBD', 'block-editor' ) }
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
		</InspectorControls>
	);
};

export default Sidebar;
