/**
 * External dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import ColorSettings from '../components/color-settings';
import { __ } from '@wordpress/i18n';
import {
	// eslint-disable-next-line
	__experimentalToggleGroupControl as ToggleGroupControl,
	// eslint-disable-next-line
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	Button,
	Flex,
	FlexItem,
	PanelBody,
	ToggleControl,
} from '@wordpress/components';

const Sidebar = ( { attributes, setAttributes } ) => {
	const widthOptions = [ '25%', '50%', '75%', '100%' ];

	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: value,
		} );

	const handleChangeInputWidth = ( value ) => {
		setAttributes( {
			inputWidth: value,
		} );
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
				<Flex style={ { marginBottom: '12px' } }>
					<FlexItem>{ __( 'Field Width', 'block-editor' ) }</FlexItem>
					<FlexItem>
						<Button
							onClick={ () =>
								handleChangeInputWidth( undefined )
							}
							isSecondary
							isSmall
						>
							{ __( 'Auto', 'block-editor' ) }
						</Button>
					</FlexItem>
				</Flex>
				<ToggleGroupControl
					label={ __( 'Field Width', 'block-editor' ) }
					value={ attributes.inputWidth }
					onChange={ handleChangeInputWidth }
					style={ { width: '100%' } }
					hideLabelFromVision
				>
					{ widthOptions.map( ( option ) => (
						<ToggleGroupControlOption
							key={ option }
							value={ option }
							label={ option }
						/>
					) ) }
				</ToggleGroupControl>
			</PanelBody>
			<ColorSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		</InspectorControls>
	);
};

export default Sidebar;
