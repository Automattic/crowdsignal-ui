/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { EDITOR_PREVIEW_TYPE_SET } from '../action-types';

const previewType = ( state = '', action ) => {
	if ( action.type === EDITOR_PREVIEW_TYPE_SET ) {
		return action.previewType;
	}

	return state;
};

export default combineReducers( {
	previewType,
} );
