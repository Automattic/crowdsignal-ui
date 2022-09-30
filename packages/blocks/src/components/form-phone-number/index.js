/**
 * External dependencies
 */
import PhoneInput from 'react-phone-number-input';
import Input from 'react-phone-number-input/input';

const FormPhoneNumber = ( { flag, ...props } ) => {
	if ( flag ) {
		return <PhoneInput { ...props } />;
	}
	return <Input { ...props } />;
};

export default FormPhoneNumber;
