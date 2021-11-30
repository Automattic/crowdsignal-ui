/**
 * External dependencies
 */
import styled from '@emotion/styled';

const FormTextInputWapper = styled.div`
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const FormTextInput = ( { style = {}, ...props } ) => (
	<input
		type="text"
		style={ {
			width: '100%',
			height: '100%',
			minHeight: '40px',
			...style,
		} }
		{ ...props }
	/>
);

FormTextInput.Preview = ( { className, ...props } ) => (
	<FormTextInputWapper className={ className }>
		<FormTextInput { ...props } />
	</FormTextInputWapper>
);

export default FormTextInput;
