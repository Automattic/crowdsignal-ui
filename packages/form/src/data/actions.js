/**
 * Internal dependencies
 */
import { FIELD_VALUE_SET } from './action-types';

export const setFieldValue = ( form, field, value ) => ( {
	type: FIELD_VALUE_SET,
	form,
	field,
	value,
} );
