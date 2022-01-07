import styled from '@emotion/styled';

const FormInputWrapper = styled.div`
	margin-bottom: 24px;
`;

FormInputWrapper.Label = styled.div`
	margin-bottom: 4px;

	${ FormInputWrapper.className }.is-required & div::after {
		display: inline;
		content: ' *';
	}
`;

export default FormInputWrapper;
