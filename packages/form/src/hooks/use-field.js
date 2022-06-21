/**
 * External dependencies
 */
import { useContext, useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { filter, isNil, uniq } from 'lodash';

/**
 * Internal dependencies
 */
import { Form } from '../components';
import { STORE_NAME } from '../data';
import { useValidation } from './use-validation';

export const useField = ( {
	fieldName,
	initialValue,
	isMultiSelect,
	validation,
	defaultValue,
} ) => {
	const { name: formName } = useContext( Form.Context );
	const { setFieldValue } = useDispatch( STORE_NAME );
	const { error, validateField } = useValidation( { fieldName, validation } );
	const fieldValue = useSelect(
		( select ) => {
			const value = select( STORE_NAME ).getFieldValue(
				formName,
				fieldName
			);

			return ! isNil( value ) ? value : defaultValue;
		},
		[ formName, fieldName ]
	);

	useEffect( () => {
		if ( initialValue ) {
			setFieldValue( formName, fieldName, initialValue );
		}
	}, [] );

	const onUpdate = ( value, isSelected ) => {
		let newValue = value;

		if ( isMultiSelect ) {
			newValue = ! isSelected
				? uniq( [ ...fieldValue, value ] )
				: filter( fieldValue, ( v ) => v !== value );
		}

		setFieldValue( formName, fieldName, newValue );
		validateField( newValue );
	};

	return {
		error,
		fieldValue,
		onUpdate,
	};
};
