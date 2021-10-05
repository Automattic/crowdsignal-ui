/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	FIELD_VALUE_SET,
	FORM_INIT,
	FORM_SUBMIT_START,
	FORM_SUBMIT_STOP,
} from './action-types';
import { keyedReducer } from './util';

const error = ( state = {}, action ) => {
	if ( action.type === FORM_INIT ) {
		return {};
	}

	if ( action.type === FIELD_VALUE_SET ) {
		return {
			...state,
			[ action.field ]: null,
		};
	}

	return state;
};

const submitting = ( state = false, action ) => {
	if ( action.type === FORM_SUBMIT_START ) {
		return true;
	}

	if ( action.type === FORM_SUBMIT_STOP ) {
		return false;
	}

	return state;
};

const value = ( state, action ) => {
	if ( action.type === FORM_INIT ) {
		return action.values;
	}

	if ( action.type === FIELD_VALUE_SET ) {
		return {
			...state,
			[ action.field ]: action.value,
		};
	}

	return state;
};

export default combineReducers( {
	error: keyedReducer( 'form', error ),
	submitting: keyedReducer( 'form', submitting ),
	value: keyedReducer( 'form', value ),
} );
