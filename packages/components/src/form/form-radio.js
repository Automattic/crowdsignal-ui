/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const StyledFormRadio = styled.input`
	height: 20px;
	width: 20px;
	vertical-align: bottom;
`;

const FormRadio = ( props ) => <StyledFormRadio type="radio" { ...props } />;

export default FormRadio;
