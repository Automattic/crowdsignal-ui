/**
 * External dependencies
 */
import styled from '@emotion/styled';

const FormTextInputWrapper = styled.div`
	pointer-events: none;
`;

const FormTextInput = ( { className, ...props } ) => {
	return (
		<div className={ className }>
			<input type="text" { ...props } />
		</div>
	);
};

FormTextInput.Preview = ( props ) => (
	<FormTextInputWrapper>
		<FormTextInput { ...props } />
	</FormTextInputWrapper>
);

export default FormTextInput;
