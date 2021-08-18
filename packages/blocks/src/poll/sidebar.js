/**
 * External dependencies
 */
import {
	Button,
	CheckboxControl,
	PanelBody,
	SelectControl,
	TextareaControl,
	TextControl,
	TimePicker,
	ToggleControl,
} from '@wordpress/components';
import {
	ContrastChecker,
	InspectorControls,
	PanelColorSettings,
	URLInput,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	AnswerStyle,
	ButtonAlignment,
	ClosedPollState,
	ConfirmMessageType,
	FontFamilyType,
	PollStatus,
} from './constants';

const Sidebar = ( { attributes, setAttributes } ) => {
	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( {
			[ key ]: value,
		} );

	const handleChangeStyle = ( key ) => ( value ) =>
		setAttributes( {
			style: {
				...attributes.style,
				[ key ]: value,
			},
		} );

	const handleChangeButtonStyle = ( key ) => ( value ) =>
		setAttributes( {
			buttonStyle: {
				...attributes.buttonStyle,
				[ key ]: value,
			},
		} );

	const handleChangeRestriction = ( key ) => ( value ) =>
		setAttributes( {
			restrictions: {
				...attributes.restrictions,
				[ key ]: value,
			},
		} );

	const handleResetWidth = () =>
		setAttributes( {
			style: {
				...attributes.style,
				width: 100,
			},
		} );

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Confirmation message', 'blocks' ) }
				initialOpen={ true }
			>
				<SelectControl
					label={ __( 'On submission', 'blocks' ) }
					value={ attributes.confirmMessageType }
					onChange={ handleChangeAttribute( 'confirmMessageType' ) }
					options={ [
						{
							label: __( 'Show results', 'blocks' ),
							value: ConfirmMessageType.RESULTS,
						},
						{
							label: __( 'Show a "Thank You" message', 'blocks' ),
							value: ConfirmMessageType.THANK_YOU,
						},
						{
							label: __( 'Show a custom text message', 'blocks' ),
							value: ConfirmMessageType.CUSTOM_TEXT,
						},
					] }
				/>

				{ ConfirmMessageType.CUSTOM_TEXT ===
					attributes.confirmMessageType && (
					<TextareaControl
						label={ __( 'Message text', 'blocks' ) }
						placeholder={ __( 'Thanks for voting!', 'blocks' ) }
						value={ attributes.customConfirmMessage }
						onChange={ handleChangeAttribute(
							'customConfirmMessage'
						) }
					/>
				) }

				{ ConfirmMessageType.REDIRECT ===
					attributes.confirmMessageType && (
					<URLInput
						label={ __( 'Redirect address', 'blocks' ) }
						value={ attributes.redirectAddres }
						onChange={ handleChangeAttribute( 'redirectAddres' ) }
					/>
				) }
			</PanelBody>

			<PanelBody
				title={ __( 'Settings', 'blocks' ) }
				initialOpen={ false }
			>
				<SelectControl
					label={ __( 'Status', 'blocks' ) }
					value={ attributes.pollStatus }
					onChange={ handleChangeAttribute( 'pollStatus' ) }
					options={ [
						{
							label: __( 'Open', 'blocks' ),
							value: PollStatus.OPEN,
						},
						{
							label: __( 'Close after', 'blocks' ),
							value: PollStatus.CLOSED_AFTER,
						},
						{
							label: __( 'Closed', 'blocks' ),
							value: PollStatus.CLOSED,
						},
					] }
				/>

				{ PollStatus.CLOSED_AFTER === attributes.pollStatus && (
					<TimePicker
						label={ __( 'Close poll on', 'blocks' ) }
						currentTime={ attributes.closedAfterDateTime }
						is12Hour={ true }
						onChange={ handleChangeAttribute(
							'closedAfterDateTime'
						) }
					/>
				) }

				{ PollStatus.OPEN !== attributes.pollStatus && (
					<SelectControl
						label={ __( 'When the poll is closed', 'blocks' ) }
						value={ attributes.closedPollState }
						onChange={ handleChangeAttribute( 'closedPollState' ) }
						options={ [
							{
								label: __( 'Show results', 'blocks' ),
								value: ClosedPollState.SHOW_RESULTS,
							},
							{
								label: __(
									'Display a "Closed" banner',
									'blocks'
								),
								value: ClosedPollState.SHOW_CLOSED_BANNER,
							},
							{
								label: __( 'Hide poll', 'blocks' ),
								value: ClosedPollState.HIDDEN,
							},
						] }
					/>
				) }
			</PanelBody>

			<PanelColorSettings
				title={ __( 'Block styling', 'blocks' ) }
				initialOpen={ false }
				colorSettings={ [
					{
						label: __( 'Text color', 'blocks' ),
						value: attributes.style.color,
						onChange: handleChangeStyle( 'textColor' ),
					},
					{
						label: __( 'Background color', 'blocks' ),
						value: attributes.style.backgroundColor,
						onChange: handleChangeStyle( 'backgroundColor' ),
					},
					{
						label: __( 'Border color', 'blocks' ),
						value: attributes.style.borderColor,
						onChange: handleChangeStyle( 'borderColor' ),
					},
				] }
			>
				<ContrastChecker
					backgroundColor={ attributes.style.backgroundColor }
					textColor={ attributes.style.color }
				/>

				<SelectControl
					label={ __( 'Choose font', 'blocks' ) }
					value={ attributes.style.fontFamily }
					onChange={ handleChangeStyle( 'fontFamily' ) }
					options={ [
						{
							label: __( 'Default theme font', 'blocks' ),
							value: FontFamilyType.THEME_DEFAULT,
						},
						{
							label: 'Alegreya Sans',
							value: FontFamilyType.ALEGREYA_SANS,
						},
						{
							label: 'Arial',
							value: FontFamilyType.ARIAL,
						},
						{
							label: 'Cabin',
							value: FontFamilyType.CABIN,
						},
						{
							label: 'Chivo',
							value: FontFamilyType.CHIVO,
						},
						{
							label: 'Courier',
							value: FontFamilyType.COURIER,
						},
						{
							label: 'Fira Sans',
							value: FontFamilyType.FIRA_SANS,
						},
						{
							label: 'Georgia',
							value: FontFamilyType.GEORGIA,
						},
						{
							label: 'Impact',
							value: FontFamilyType.IMPACT,
						},
						{
							label: 'Josefin Sans',
							value: FontFamilyType.JOSEFIN_SANS,
						},
						{
							label: 'Lato',
							value: FontFamilyType.LATO,
						},
						{
							label: 'Libre Franklin',
							value: FontFamilyType.LIBRE_FRANKLIN,
						},
						{
							label: 'Lucida',
							value: FontFamilyType.LUCIDA,
						},
						{
							label: 'Montserrat',
							value: FontFamilyType.MONTSERRAT,
						},
						{
							label: 'Nunito',
							value: FontFamilyType.NUNITO,
						},
						{
							label: 'Open Sans',
							value: FontFamilyType.OPEN_SANS,
						},
						{
							label: 'Oswald',
							value: FontFamilyType.OSWALD,
						},
						{
							label: 'Overpass',
							value: FontFamilyType.OVERPASS,
						},
						{
							label: 'Palatino',
							value: FontFamilyType.PALATINO,
						},
						{
							label: 'Poppins',
							value: FontFamilyType.POPPINS,
						},
						{
							label: 'Raleway',
							value: FontFamilyType.RALEWAY,
						},
						{
							label: 'Roboto',
							value: FontFamilyType.ROBOTO,
						},
						{
							label: 'Rubik',
							value: FontFamilyType.RUBIK,
						},
						{
							label: 'Tahoma',
							value: FontFamilyType.TAHOMA,
						},
						{
							label: 'Times New Roman',
							value: FontFamilyType.TIMES_NEW_ROMAN,
						},
						{
							label: 'Trebuchet',
							value: FontFamilyType.TREBUCHET,
						},
						{
							label: 'Verdana',
							value: FontFamilyType.VERDANA,
						},
					] }
				/>

				{ attributes.align !== 'full' && (
					<>
						<TextControl
							type="number"
							label={ __( 'Width (%)', 'blocks' ) }
							value={ attributes.style.width }
							onChange={ handleChangeStyle( 'width' ) }
						/>
						<Button isSmall onClick={ handleResetWidth }>
							{ __( 'Reset', 'blocks' ) }
						</Button>
					</>
				) }

				<TextControl
					label={ __( 'Border thickness', 'blocks' ) }
					type="number"
					value={ attributes.style.borderWidth }
					onChange={ handleChangeStyle( 'borderWidth' ) }
				/>
				<TextControl
					label={ __( 'Corner radius', 'blocks' ) }
					type="number"
					value={ attributes.style.borderRadius }
					onChange={ handleChangeStyle( 'borderRadius' ) }
				/>

				<ToggleControl
					label={ __( 'Drop shadow', 'blocks' ) }
					checked={ attributes.style.hasBoxShadow }
					onChange={ handleChangeStyle( 'hasBoxShadow' ) }
				/>
			</PanelColorSettings>

			<PanelColorSettings
				title={ __( 'Button styling', 'blocks' ) }
				initialOpen={ false }
				colorSettings={ [
					{
						label: __( 'Text color', 'blocks' ),
						value: attributes.buttonStyle.color,
						onChange: handleChangeButtonStyle( 'color' ),
					},
					{
						label: __( 'Background color', 'blocks' ),
						value: attributes.buttonStyle.backgroundColor,
						onChange: handleChangeButtonStyle( 'backgroundColor' ),
					},
				] }
			>
				<ContrastChecker
					textColor={ attributes.buttonStyle.color }
					backgroundColor={ attributes.buttonStyle.backgroundColor }
				/>

				{ AnswerStyle.BUTTON === attributes.answerStyle && (
					<SelectControl
						label={ __( 'Alignment', 'blocks' ) }
						value={ attributes.buttonStyle.align }
						onChange={ handleChangeButtonStyle( 'align' ) }
						options={ [
							{
								label: __( 'List', 'blocks' ),
								value: ButtonAlignment.LIST,
							},
							{
								label: __( 'Inline', 'blocks' ),
								value: ButtonAlignment.INLINE,
							},
						] }
					/>
				) }
			</PanelColorSettings>

			<PanelBody
				title={ __( 'Answer settings', 'blocks' ) }
				initialOpen={ true }
			>
				<CheckboxControl
					checked={ attributes.restrictions.oneResponsePerComputer }
					label={ __( 'One response per computer', 'blocks' ) }
					onChange={ handleChangeRestriction(
						'oneResponsePerComputer'
					) }
				/>
				<CheckboxControl
					checked={ attributes.randomizeAnswers }
					label={ __( 'Randomize answer order', 'blocks' ) }
					onChange={ handleChangeAttribute( 'randomizeAnswers' ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Sidebar;