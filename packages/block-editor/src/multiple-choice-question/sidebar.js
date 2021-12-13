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

	const handleChangeNumberAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: parseInt( value, 10 ),
		} );

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Answer Settings', 'blocks' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'An answer is required' ) }
					checked={ attributes.mandatory }
					onChange={ handleChangeAttribute( 'mandatory' ) }
				/>

				{ attributes.mandatory && (
					<TextControl
						label={ __( 'Min. choices', 'blocks' ) }
						type="number"
						value={ attributes.minimumChoices }
						onChange={ handleChangeNumberAttribute(
							'minimumChoices'
						) }
					/>
				) }

				<TextControl
					label={ __( 'Max. choices', 'blocks' ) }
					type="number"
					value={ attributes.maximumChoices }
					onChange={ handleChangeNumberAttribute( 'maximumChoices' ) }
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
