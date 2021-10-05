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

export const useField = ( { name: fieldName, type, value } ) => {
	const form = useContext( Form.Context );

	const { setFieldValue } = useDispatch( STORE_NAME );

	const { error, value: currentValue } = useSelect(
		( select ) => select( STORE_NAME ).getFieldData( form, fieldName ),
		[ form, fieldName ]
	);

	const onChange = ( event ) => {
		if ( type === 'checkbox' ) {
			setFieldValue(
				form,
				fieldName,
				event.target.checked
					? uniq( [ ...( currentValue || [] ), event.target.value ] )
					: filter(
							currentValue || [],
							( v ) => v !== event.target.value
					  )
			);
			return;
		}

		setFieldValue( form, fieldName, event.target.value );
	};

	const inputProps = {
		name: fieldName,
		onChange,
		value: type === 'checkbox' || type === 'radio' ? value : currentValue,
	};

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
