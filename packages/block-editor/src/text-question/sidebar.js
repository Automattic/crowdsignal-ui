/**
 * External dependencies
 */
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
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

			<ColorSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<BorderSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</InspectorControls>
	);
};

export default Sidebar;
