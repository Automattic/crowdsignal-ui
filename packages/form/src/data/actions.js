/**
 * Internal dependencies
 */
import {
	FIELD_ERROR_SET,
	FIELD_VALUE_SET,
	FORM_INIT,
	FORM_SUBMIT_START,
	FORM_SUBMIT_STOP,
} from './action-types';

export const setFieldValue = ( form, field, value ) => ( {
	type: FIELD_VALUE_SET,
	form,
	field,
	value,
} );

export const setFieldError = ( form, field, error ) => ( {
	type: FIELD_ERROR_SET,
	form,
	field,
	error,
} );

export const startSubmit = ( form ) => ( {
	type: FORM_SUBMIT_START,
	form,
} );

export const stopSubmit = ( form ) => ( {
	type: FORM_SUBMIT_STOP,
	form,
} );

export const initForm = ( form, values ) => ( {
	type: FORM_INIT,
	form,
	values,
} );
