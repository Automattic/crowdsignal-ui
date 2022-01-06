/**
 * External dependencies
 */
import { useContext } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { filter, includes, uniq } from 'lodash';

/**
 * Internal dependencies
 */
import { Form } from '../components';
import { STORE_NAME } from '../data';

export const useField = ( { name: fieldName, type, value, validation } ) => {
	const { name: formName, registerValidation } = useContext( Form.Context );

	const { setFieldValue, setFieldError } = useDispatch( STORE_NAME );

	const { error, value: currentValue } = useSelect(
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

	const onChange = ( event ) => {
		let newValue = event.target.value;

		if ( type === 'checkbox' ) {
			newValue = event.target.checked
				? uniq( [ ...( currentValue || [] ), event.target.value ] )
				: filter(
						currentValue || [],
						( v ) => v !== event.target.value
				  );
		}

		setFieldValue( formName, fieldName, newValue );
		validateField( newValue );
	};

	const inputProps = {
		name: fieldName,
		onChange,
		value:
			type === 'checkbox' || type === 'radio'
				? value
				: currentValue || '',
	};

	if ( validation ) {
		registerValidation( fieldName, () => validateField( currentValue ) );
	}

	if ( type === 'checkbox' ) {
		inputProps.checked = includes( currentValue, value );
		inputProps.type = type;
	}

	if ( type === 'radio' ) {
		inputProps.checked = currentValue === value;
		inputProps.type = type;
	}

	return {
		error,
		inputProps,
	};
};
