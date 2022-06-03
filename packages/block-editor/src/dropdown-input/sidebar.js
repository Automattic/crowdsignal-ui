/**
 * External dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import ColorSettings from '../components/color-settings';
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';

const Sidebar = ( { attributes, setAttributes } ) => {
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
					label={ __( 'The answer is required', 'block-editor' ) }
					checked={ attributes.mandatory }
					onChange={ handleChangeAttribute( 'mandatory' ) }
				/>
			</PanelBody>
			<ColorSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</InspectorControls>
	);
};

export default Sidebar;
