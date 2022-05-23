/**
 * External dependencies
 */
import { PanelBody, ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import BorderSettings from '../components/border-settings';
import ColorSettings from '../components/color-settings';

const Sidebar = ( { attributes, setAttributes } ) => {
	const handleChangeMandatory = ( mandatory ) =>
		setAttributes( {
			mandatory,
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
					onChange={ handleChangeMandatory }
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
