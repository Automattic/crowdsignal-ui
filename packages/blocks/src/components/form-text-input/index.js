/**
 * External dependencies
 */
import styled from '@emotion/styled';

const FormTextInputWapper = styled.div`
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Input = styled.input`
	width: 100%;
	height: 100%;
	min-height: 40px;
`;

const FormTextInput = ( { style = {}, ...props } ) => (
	<Input type="text" style={ { ...style } } { ...props } />
);

FormTextInput.Preview = ( { className, ...props } ) => (
	<FormTextInputWapper className={ className }>
		<FormTextInput { ...props } />
	</FormTextInputWapper>
);

export default FormTextInput;
