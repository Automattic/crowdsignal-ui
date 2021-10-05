/**
 * External dependencies
 */
import { get } from 'lodash';

export const getFieldError = ( state, form, field ) =>
	get( state, [ 'error', form, field ] );

export const getFieldValue = ( state, form, field ) =>
	get( state, [ 'value', form, field ] );

export const getFieldData = ( state, form, field ) => ( {
	error: getFieldError( state, form, field ),
	value: getFieldValue( state, form, field ),
} );

export const getFormData = ( state, form ) =>
	get( state, [ 'value', form ], null );

export const isSubmitting = ( state, form ) =>
	get( state, [ 'submitting', form ], false );
