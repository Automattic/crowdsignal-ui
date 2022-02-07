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
import { isEmpty } from 'lodash';

const Sidebar = ( { attributes, setAttributes } ) => {
	const handleChangeMandatory = ( isMandatory ) => {
		setAttributes( {
			mandatory: isMandatory,
			minimumChoices: isMandatory ? 1 : 0,
		} );
	};

	const handleMaxChoices = ( value ) => {
		if ( ! isEmpty( value ) && value < 1 ) {
			return;
		}

		setAttributes( {
			maximumChoices: parseInt( value ),
		} );

		if ( value < attributes.minimumChoices ) {
			setAttributes( {
				minimumChoices: parseInt( value ),
			} );
		}
	};

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Answer Settings', 'blocks' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'An answer is required' ) }
					checked={ attributes.mandatory }
					onChange={ handleChangeMandatory }
				/>

				<TextControl
					label={ __( 'Max. choices', 'blocks' ) }
					type="number"
					value={ attributes.maximumChoices }
					onChange={ handleMaxChoices }
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
