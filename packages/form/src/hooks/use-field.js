/**
 * External dependencies
 */
import { useContext, useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { filter, includes, map, uniq } from 'lodash';

/**
 * Internal dependencies
 */
import { Form } from '../components';
import { STORE_NAME } from '../data';
import { useValidation } from './use-validation';

export const useField = ( {
	name: fieldName,
	type,
	value,
	validation,
	initialValue,
} ) => {
	const { name: formName } = useContext( Form.Context );
	const { setFieldValue } = useDispatch( STORE_NAME );
	const { error, validateField } = useValidation( { fieldName, validation } );
	const { value: currentValue } = useSelect(
		( select ) => select( STORE_NAME ).getFieldData( formName, fieldName ),
		[ formName, fieldName ]
	);

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
	};

	const onBlur = () => {
		validateField( currentValue );
	};

	const onSort = ( items ) => {
		const values = map( items, ( item ) => item.props.attributes.clientId );
		setFieldValue( formName, fieldName, values );
	};

	const inputProps = {
		name: fieldName,
		onBlur,
		onChange,
		value:
			type === 'checkbox' || type === 'radio'
				? value
				: currentValue || '',
	};

	if ( type === 'checkbox' ) {
		inputProps.checked = includes( currentValue, value );
		inputProps.type = type;
	}

	if ( type === 'radio' ) {
		inputProps.checked = currentValue === value;
		inputProps.type = type;
	}

	useEffect( () => {
		if ( initialValue ) {
			setFieldValue( formName, fieldName, initialValue );
		}
	}, [] );

	return {
		error,
		inputProps,
		onSort,
	};
};
