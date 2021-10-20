/**
 * External dependencies
 */
import { Button, ButtonGroup, PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { MultipleChoiceQuestion } from '@crowdsignal/blocks';
import ColorSettings from '../components/color-settings';

const Sidebar = ( { attributes, blockStyle, setAttributes } ) => {
	const handleChangeWidth = ( value ) =>
		setAttributes( {
			width: attributes.width === value ? undefined : value,
		} );

	return (
		<InspectorControls>
			<ColorSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>

			{ blockStyle === MultipleChoiceQuestion.Style.BUTTON && (
				<PanelBody title={ __( 'Width settings', 'blocks' ) }>
					<ButtonGroup aria-label={ __( 'Button width' ) }>
						{ [ 25, 50, 75, 100 ].map( ( width ) => (
							<Button
								isSmall
								key={ width }
								variant={
									width === attributes.width
										? 'primary'
										: undefined
								}
								onClick={ () => handleChangeWidth( width ) }
							>
								{ width }%
							</Button>
						) ) }
					</ButtonGroup>
				</PanelBody>
			) }
		</InspectorControls>
	);
};

export default Sidebar;
