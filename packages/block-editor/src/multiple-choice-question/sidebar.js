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
	const handleChangeMandatory = ( isMandatory ) => {
		setAttributes( {
			mandatory: isMandatory,
		} );

		if ( isMandatory && attributes.minimumChoices < 1 ) {
			setAttributes( {
				minimumChoices: 1,
			} );
		} else if ( ! isMandatory ) {
			setAttributes( {
				minimumChoices: 0,
			} );
		}
	};

	const handleMinChoices = ( value ) => {
		if ( value < 0 ) {
			return;
		}

		setAttributes( {
			minimumChoices: parseInt( value ),
		} );

		setAttributes( {
			mandatory: value >= 1,
		} );

		if ( value > attributes.maximumChoices ) {
			setAttributes( {
				maximumChoices: parseInt( value ),
			} );
		}
	};

	const handleMaxChoices = ( value ) => {
		if ( value < 1 ) {
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

				{ attributes.mandatory && (
					<TextControl
						label={ __( 'Min. choices', 'blocks' ) }
						type="number"
						value={ attributes.minimumChoices }
						onChange={ handleMinChoices }
					/>
				) }

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
