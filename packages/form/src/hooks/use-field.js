/**
 * External dependencies
 */
import { useContext, useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { isNil } from 'lodash';

/**
 * Internal dependencies
 */
import { Form } from '../components';
import { STORE_NAME } from '../data';
import { useValidation } from './use-validation';

export const useField = ( {
	defaultValue = '',
	fieldName,
	initialValue,
	validation,
} ) => {
	const { name: formName } = useContext( Form.Context );
	const { setFieldValue } = useDispatch( STORE_NAME );
	const { error, validateField } = useValidation( { fieldName, validation } );
	const currentValue = useSelect(
		( select ) => select( STORE_NAME ).getFieldValue( formName, fieldName ),
		[ formName, fieldName ]
	);

	useEffect( () => {
		if ( initialValue && isNil( currentValue ) ) {
			setFieldValue( formName, fieldName, initialValue );
		}
	}, [] );

	const onChange = ( value ) => {
		setFieldValue( formName, fieldName, value );
		validateField( value );
	};

	const fieldValue = ! isNil( currentValue ) ? currentValue : defaultValue;

	return {
		error,
		fieldValue,
		onChange,
	};
};
