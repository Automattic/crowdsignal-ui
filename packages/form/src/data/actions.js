/**
 * Internal dependencies
 */
import {
	FIELD_VALUE_SET,
	FORM_SUBMIT_START,
	FORM_SUBMIT_STOP,
} from './action-types';

export const setFieldValue = ( form, field, value ) => ( {
	type: FIELD_VALUE_SET,
	form,
	field,
	value,
} );

export const startSubmit = ( form ) => ( {
	type: FORM_SUBMIT_START,
	form,
} );

export const stopSubmit = ( form ) => ( {
	type: FORM_SUBMIT_STOP,
	form,
} );
