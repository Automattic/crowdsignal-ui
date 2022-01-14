/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../data';
import { Form } from '../components';

export const useValidation = ( { fieldName, validation } ) => {
	const { name: formName, registerValidation } = useContext( Form.Context );

	const { setFieldError } = useDispatch( STORE_NAME );

	const { error, value } = useSelect(
		( select ) => select( STORE_NAME ).getFieldData( formName, fieldName ),
		[ formName, fieldName ]
	);

	const validateField = ( fieldValue ) => {
		if ( ! validation ) {
			return true;
		}

		const err = validation( fieldValue );

		if ( err ) {
			setFieldError( formName, fieldName, err );
		}
		return ! err;
	};

	if ( validation && registerValidation ) {
		registerValidation( fieldName, () => validateField( value ) );
	}

	return {
		error,
		validateField,
	};
};
