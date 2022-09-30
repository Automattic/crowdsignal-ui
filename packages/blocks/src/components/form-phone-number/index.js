/**
 * External dependencies
 */
import PhoneInput from 'react-phone-number-input';
import Input from 'react-phone-number-input/input';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { ErrorMessage } from '../';

export const PhoneInputWrapper = styled.div`
	input {
		color: var( --wp--preset--color--foreground );
		background-color: transparent;
		border-width: 1px;
		border-style: solid;
		padding: 8px;
	}

	${ ErrorMessage.className } {
		position: absolute;
		left: 0;
		bottom: 0;
		transform: translateY( calc( 100% + 4px ) );
	}
`;

const FormPhoneNumber = ( { flag, ...props } ) => {
	if ( flag ) {
		return (
			<PhoneInputWrapper>
				<PhoneInput { ...props } />
			</PhoneInputWrapper>
		);
	}
	return (
		<PhoneInputWrapper>
			<Input { ...props } />
		</PhoneInputWrapper>
	);
};

export default FormPhoneNumber;
