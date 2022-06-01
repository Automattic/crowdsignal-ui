/**
 * External dependencies
 */
import { filter, isArray } from 'lodash';
import { InspectorControls } from '@wordpress/block-editor';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import ColorSettings from '../components/color-settings';
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

const FileFormatWrapper = styled.div`
	div.components-toggle-control {
		margin-bottom: 0;
	}
`;

const FileSizeHint = styled.span`
	color: var( --color-neutral-40 );
`;

const Sidebar = ( { attributes, setAttributes } ) => {
	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: value,
		} );

	const handleChangeAllowedFiles = ( extension ) => ( value ) => {
		let allowedTypes = [ ...attributes.allowedTypes ];
		const extensions = isArray( extension ) ? extension : [ extension ];

		if ( value ) {
			allowedTypes = [ ...allowedTypes, ...extensions ];
		} else {
			allowedTypes = filter(
				allowedTypes,
				( type ) => ! extension.includes( type )
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
				<FileFormatWrapper>
					<ToggleControl
						label=".pdf"
						checked={ attributes.allowedTypes.includes( 'pdf' ) }
						onChange={ handleChangeAllowedFiles( 'pdf' ) }
					/>
					<ToggleControl
						label=".jpg"
						checked={ attributes.allowedTypes.includes( 'jpg' ) }
						onChange={ handleChangeAllowedFiles( [
							'jpg',
							'jpeg',
						] ) }
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
					<FileSizeHint>
						{ __(
							'The maximum upload size per file is 5mb.',
							'block-editor'
						) }
					</FileSizeHint>
				</FileFormatWrapper>
			</PanelBody>
			<ColorSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</InspectorControls>
	);
};

export default Sidebar;
