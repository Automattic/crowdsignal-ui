/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { FormInputWrapper } from '../';

const FormTextInputWapper = styled.div`
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Input = styled.input`
	width: 100%;
	height: 100%;
	min-height: 40px;
	padding: 8px;
	box-sizing: border-box;

	${ FormInputWrapper }.is-error & {
		border: 1px solid var( --color-error ) !important;
	}
`;

const FormTextInput = ( { onChange, style = {}, value, ...props } ) => (
	<Input
		onChange={ ( event ) => onChange( event.target.value ) }
		style={ { ...style } }
		type="text"
		value={ value }
		{ ...props }
	/>
);

FormTextInput.Preview = ( { className, ...props } ) => (
	<FormTextInputWapper className={ className }>
		<FormTextInput { ...props } />
	</FormTextInputWapper>
);

export default FormTextInput;
