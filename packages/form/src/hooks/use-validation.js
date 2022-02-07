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

export const useValidation = ( { fieldClientId, validation } ) => {
	const { name: formName, registerValidation } = useContext( Form.Context );

	const { setFieldError } = useDispatch( STORE_NAME );

	const { error, value, formData } = useSelect(
		( select ) => ( {
			...select( STORE_NAME ).getFieldData( formName, fieldClientId ),
			formData: select( STORE_NAME ).getFormData( formName ),
		} ),
		[ formName, fieldClientId ]
	);

	const validateField = ( fieldValue ) => {
		if ( ! validation ) {
			return true;
		}

		const err = validation( fieldValue, formData );

		if ( err ) {
			setFieldError( formName, fieldClientId, err );
		}
		return ! err;
	};

	if ( validation && registerValidation ) {
		registerValidation( fieldClientId, () => validateField( value ) );
	}

	return {
		error,
		validateField,
	};
};
