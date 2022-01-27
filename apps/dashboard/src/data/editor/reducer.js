/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';
import { findIndex, map, reduce } from 'lodash';

/**
 * Internal dependencies
 */
import {
	EDITOR_CHANGESET_RESET,
	EDITOR_CURRENT_PAGE_SET,
	EDITOR_INIT,
	EDITOR_MODE_SET,
	EDITOR_PAGE_INSERT,
	EDITOR_PAGE_ORDER_UPDATE,
	EDITOR_PAGE_UPDATE,
	EDITOR_PROJECT_ID_UPDATE,
	EDITOR_SAVE,
	EDITOR_SAVE_ERROR,
	EDITOR_SAVE_SUCCESS,
	EDITOR_TITLE_UPDATE,
} from '../action-types';

const content = ( state = {}, action ) => {
	if (
		action.type === EDITOR_INIT ||
		action.type === EDITOR_CHANGESET_RESET
	) {
		return {};
	}

	if ( action.type === EDITOR_PAGE_UPDATE ) {
		return {
			...state,
			[ action.index ]: action.blocks,
		};
	}

	if ( action.type === EDITOR_PAGE_INSERT ) {
		return {
			...state,
			[ action.index ]: action.blocks,
		};
	}

	if ( action.type === EDITOR_PAGE_ORDER_UPDATE ) {
		return reduce(
			action.order,
			( result, fromIndex, toIndex ) => {
				if ( state[ fromIndex ] ) {
					result[ toIndex ] = state[ fromIndex ];
				}

				return result;
			},
			{}
		);
	}

	return state;
};

const currentPage = ( state = 0, action ) => {
	if ( action.type === EDITOR_CURRENT_PAGE_SET ) {
		return action.page;
	}

	if ( action.type === EDITOR_PAGE_INSERT ) {
		return action.index;
	}

	if ( action.type === EDITOR_PAGE_ORDER_UPDATE ) {
		const index = findIndex(
			action.order,
			( oldIndex ) => oldIndex === state
		);

		if ( index >= 0 ) {
			return index;
		}

		if ( state >= action.order.length ) {
			return action.order.length - 1;
		}
	}

	return state;
};

const hasUnsavedChanges = ( state = false, action ) => {
	if ( action.type === EDITOR_INIT || action.type === EDITOR_SAVE ) {
		return false;
	}

	if (
		action.type === EDITOR_PAGE_INSERT ||
		action.type === EDITOR_PAGE_ORDER_UPDATE ||
		action.type === EDITOR_PAGE_UPDATE ||
		action.type === EDITOR_TITLE_UPDATE ||
		action.type === EDITOR_SAVE_ERROR
	) {
		return true;
	}

	return state;
};

const isSaving = ( state = false, action ) => {
	if ( action.type === EDITOR_SAVE ) {
		return true;
	}

	if (
		action.type === EDITOR_SAVE_SUCCESS ||
		action.type === EDITOR_SAVE_ERROR
	) {
		return false;
	}

	return state;
};

const mode = ( state = 'auto', action ) => {
	if ( action.type === EDITOR_INIT ) {
		return 'auto';
	}

	if ( action.type === EDITOR_MODE_SET ) {
		return action.mode;
	}

	return state;
};

const projectId = ( state = 0, action ) => {
	if (
		action.type === EDITOR_INIT ||
		action.type === EDITOR_PROJECT_ID_UPDATE
	) {
		return action.projectId;
	}

	return state;
};

/**
 * Returns an array which will be used to sort original project content
 * according to any changes that have been made since the last save.
 *
 * Note: This affects the original content and NOT the editor changeset (which is already sorted),
 *       hence it needs to be reset when the underlying project updates which isn't necessarily
 *       when there aren't any more changes. Hence the use of EDITOR_SAVE_SUCCESS instead of
 *       EDITOR_CHANGESET_RESET used elsewhere.
 *       This is also the reason why adding, moving or deleting pages must be disabled during a save.
 *
 * @param  {Array|null} state  Current state.
 * @param  {Object}     action Action object.
 * @return {Array|null}        Updated page order.
 */
const pageOrder = ( state = null, action ) => {
	if ( action.type === EDITOR_INIT || action.type === EDITOR_SAVE_SUCCESS ) {
		return null;
	}

	if ( action.type === EDITOR_PAGE_INSERT && state ) {
		return [ ...state, action.index ];
	}

	if ( action.type === EDITOR_PAGE_ORDER_UPDATE ) {
		if ( ! state ) {
			return action.order;
		}

		return map( action.order, ( index ) => state[ index ] );
	}

	return state;
};

const title = ( state = '', action ) => {
	if (
		action.type === EDITOR_INIT ||
		action.type === EDITOR_CHANGESET_RESET
	) {
		return '';
	}

	if ( action.type === EDITOR_TITLE_UPDATE ) {
		return action.title;
	}

	return state;
};

export default combineReducers( {
	content,
	currentPage,
	hasUnsavedChanges,
	isSaving,
	mode,
	pageOrder,
	projectId,
	title,
} );
