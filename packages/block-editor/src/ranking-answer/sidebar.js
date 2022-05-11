/**
 * External dependencies
 */
import { PanelBody, ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import ColorSettings from '../components/color-settings';

const Sidebar = ( { attributes, setAttributes } ) => {
	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: value,
		} );

	return (
		<InspectorControls>
			<ColorSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>

			<PanelBody title={ __( 'Style settings' ) }>
				<ToggleControl
					label={ __(
						'Sync style settings for all answers',
						'block-editor'
					) }
					checked={ attributes.shareSiblingAttributes }
					onChange={ handleChangeAttribute(
						'shareSiblingAttributes'
					) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Sidebar;
