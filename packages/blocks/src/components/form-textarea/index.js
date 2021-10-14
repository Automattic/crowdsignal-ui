/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * FormTextarea must be rendered in enabled state in the preview
 * for theme styles to be applied correctly, hence the need for an additional
 * wrapper to disable editing its contents.
 */
const FormTextarePreviewWrapper = styled.div`
	height: 100%;
	margin: 0;
	padding: 0;
	pointer-events: none;
	width: 100%;
`;

const FormTextarea = styled.textarea`
	border-style: solid;
	border-width: 1px;
	box-sizing: border-box;
	width: 100%;
`;

FormTextarea.Preview = ( { style, ...props } ) => (
	<FormTextarePreviewWrapper>
		<FormTextarea
			style={ {
				...style,
				height: '100%',
			} }
			{ ...props }
		/>
	</FormTextarePreviewWrapper>
);

export default FormTextarea;
