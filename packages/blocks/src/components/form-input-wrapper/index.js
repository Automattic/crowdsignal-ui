/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { ErrorMessage } from '../';

const FormInputWrapper = styled.div`
	position: relative;

	${ ErrorMessage.className } {
		position: absolute;
		left: 0;
		bottom: 0;
		transform: translateY( calc( 100% + 4px ) );
	}
`;

FormInputWrapper.Label = styled.label`
	margin-bottom: 4px;

	${ FormInputWrapper.className }.is-required & div:last-child::after {
		display: inline;
		content: ' *';
	}
	${ FormInputWrapper.className }.is-inline & {
		margin-bottom: 0px;
		display: flex;
		align-items: center;
	}
`;

export default FormInputWrapper;
