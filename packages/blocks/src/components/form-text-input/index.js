/**
 * External dependencies
 */
import styled from '@emotion/styled';

const FormTextInputWapper = styled.div(
	{
		width: '100%',
		height: '100%',
	},
	( props ) => ( {
		pointerEvents: props.isPreview && 'none',
	} )
);

const Input = styled.input`
	width: 100%;
	height: 100%;
	min-height: 40px;
`;

const FormTextInput = ( { className, isPreview, ...props } ) => {
	return (
		<FormTextInputWapper className={ className } isPreview={ isPreview }>
			<Input type="text" { ...props } />
		</FormTextInputWapper>
	);
};

FormTextInput.Preview = ( props ) => (
	<FormTextInput isPreview={ true } { ...props } />
);

export default FormTextInput;
