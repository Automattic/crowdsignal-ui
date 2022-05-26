/**
 * External dependencies
 */
import { filter } from 'lodash';
import { InspectorControls } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import ColorSettings from '../components/color-settings';
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

const Sidebar = ( { attributes, setAttributes } ) => {
	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: value,
		} );

	const handleChangeAllowedFiles = ( extension ) => ( value ) => {
		let allowedTypes = [ ...attributes.allowedTypes ];

		if ( value ) {
			allowedTypes.push( extension );
		} else {
			allowedTypes = filter(
				allowedTypes,
				( type ) => type !== extension
			);
		}

		setAttributes( { allowedTypes } );
	};

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
			<PanelBody
				title={ __( 'File Formats', 'block-editor' ) }
				initialOpen={ true }
				className="file-format-panel"
			>
				<PanelRow>
					<span>
						{ __(
							'Choose supported formats for upload',
							'block-editor'
						) }
					</span>
				</PanelRow>
				<ToggleControl
					label=".pdf"
					checked={ attributes.allowedTypes.includes( 'pdf' ) }
					onChange={ handleChangeAllowedFiles( 'pdf' ) }
				/>
				<ToggleControl
					label=".jpg"
					checked={ attributes.allowedTypes.includes( 'jpg' ) }
					onChange={ handleChangeAllowedFiles( 'jpg' ) }
				/>
				<ToggleControl
					label=".png"
					checked={ attributes.allowedTypes.includes( 'png' ) }
					onChange={ handleChangeAllowedFiles( 'png' ) }
				/>
				<ToggleControl
					label=".svg"
					checked={ attributes.allowedTypes.includes( 'svg' ) }
					onChange={ handleChangeAllowedFiles( 'svg' ) }
				/>
				<ToggleControl
					label=".mp4"
					checked={ attributes.allowedTypes.includes( 'mp4' ) }
					onChange={ handleChangeAllowedFiles( 'mp4' ) }
				/>
				<span>
					{ __(
						'The maximum upload size per file is 5mb.',
						'block-editor'
					) }
				</span>
			</PanelBody>
			<ColorSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</InspectorControls>
	);
};

export default Sidebar;
