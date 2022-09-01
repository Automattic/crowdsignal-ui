/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';
import { filter, map, omit, slice, tap } from 'lodash';

/**
 * Internal dependencies
 */
import {
	EDITOR_CURRENT_PAGE_INDEX_SET,
	EDITOR_EMBED_CARD_VIEWPORT_UPDATE,
	EDITOR_EMBED_POPUP_SETTINGS_UPDATE,
	EDITOR_EMBED_SETTINGS_SAVE_SUCCESS,
	EDITOR_INIT,
	EDITOR_NAVIGATION_SETTINGS_UPDATE,
	EDITOR_PAGE_DELETE,
	EDITOR_PAGE_DUPLICATE,
	EDITOR_PAGE_INSERT,
	EDITOR_PAGE_ORDER_UPDATE,
	EDITOR_PAGE_UPDATE,
	EDITOR_SAVE,
	EDITOR_SAVE_ERROR,
	EDITOR_SAVE_SUCCESS,
	EDITOR_SLUG_UPDATE,
	EDITOR_TEMPLATE_UPDATE,
	EDITOR_THEME_UPDATE,
	EDITOR_TITLE_UPDATE,
} from '../action-types';
import { clonePage, errors } from './util';

/**
 * Tracks which project properties have changed since the last save.
 *
 * @param  {Object} state  Editor state.
 * @param  {Object} action Action object.
 * @return {Object}        Updated properties.
 */
// eslint-disable-next-line complexity
const changes = ( state = {}, action ) => {
	if ( action.type === EDITOR_SAVE ) {
		return {};
	}

	if ( action.type === EDITOR_INIT ) {
		return action.projectId > 0
			? {}
			: {
					content: true,
					theme: true,
			  };
	}

	if ( action.type === EDITOR_SAVE_ERROR ) {
		return {
			...state,
			...action.changes,
		};
	}

	if (
		action.type === EDITOR_PAGE_INSERT ||
		action.type === EDITOR_PAGE_DELETE ||
		action.type === EDITOR_PAGE_DUPLICATE ||
		action.type === EDITOR_PAGE_UPDATE ||
		action.type === EDITOR_PAGE_ORDER_UPDATE
	) {
		return {
			...state,
			content: true,
		};
	}

	if ( action.type === EDITOR_SLUG_UPDATE ) {
		return {
			...state,
			slug: true,
		};
	}

	if ( action.type === EDITOR_TITLE_UPDATE ) {
		return {
			...state,
			title: true,
		};
	}

	if ( action.type === EDITOR_THEME_UPDATE ) {
		return {
			...state,
			theme: true,
		};
	}

	if ( action.type === EDITOR_EMBED_CARD_VIEWPORT_UPDATE ) {
		return {
			...state,
			embedCard: true,
		};
	}

	if ( action.type === EDITOR_EMBED_POPUP_SETTINGS_UPDATE ) {
		return {
			...state,
			embedPopup: true,
		};
	}

	if ( action.type === EDITOR_EMBED_SETTINGS_SAVE_SUCCESS ) {
		return omit( state, action.savedSettings );
	}

	if ( action.type === EDITOR_NAVIGATION_SETTINGS_UPDATE ) {
		return {
			...state,
			navigation: true,
		};
	}

	return state;
};

/**
 * Currently edited page index.
 *
 * @param  {number} state  App state.
 * @param  {Object} action Action object.
 * @return {number}        Page index.
 */
const currentPage = ( state = 0, action ) => {
	if ( action.type === EDITOR_INIT ) {
		return 0;
	}

	if ( action.type === EDITOR_CURRENT_PAGE_INDEX_SET ) {
		return action.pageIndex;
	}

	if ( action.type === EDITOR_PAGE_DUPLICATE ) {
		return action.pageIndex + 1;
	}

	if (
		action.type === EDITOR_PAGE_DELETE &&
		action.pageIndex === state &&
		state > 0
	) {
		return state - 1;
	}

	if ( action.type === EDITOR_PAGE_ORDER_UPDATE ) {
		return action.order.indexOf( state );
	}

	return state;
};

/**
 * Marks if the current editor poject has been edited.
 * Not the same as state.editor.changes which tracks yet unsaved changes.
 *
 * @param  {boolean} state  App state.
 * @param  {Object}  action Action object.
 * @return {boolean}        Edited flag.
 */
const edited = ( state = false, action ) => {
	if ( action.type === EDITOR_INIT ) {
		return false;
	}

	if (
		action.type === EDITOR_PAGE_INSERT ||
		action.type === EDITOR_PAGE_DELETE ||
		action.type === EDITOR_PAGE_UPDATE ||
		action.type === EDITOR_PAGE_ORDER_UPDATE ||
		action.type === EDITOR_SLUG_UPDATE ||
		action.type === EDITOR_TITLE_UPDATE ||
		action.type === EDITOR_THEME_UPDATE
	) {
		return true;
	}

	return state;
};

/**
 * Tracks settings for the project's embed card.
 *
 * @param  {Object} state  App state.
 * @param  {Object} action Action object.
 * @return {Object}        Updated embed card settings.
 */
const embedCard = ( state = {}, action ) => {
	if ( action.type === EDITOR_INIT ) {
		return action.embedCard;
	}

	if ( action.type === EDITOR_EMBED_CARD_VIEWPORT_UPDATE ) {
		return {
			...state,
			viewport: action.viewport,
		};
	}

	return state;
};

/**
 * Tracks settings for the project's embed popup.
 *
 * @param  {Object} state  App state.
 * @param  {Object} action Action object.
 * @return {Object}        Updated embed popup settings.
 */
const embedPopup = ( state = {}, action ) => {
	if ( action.type === EDITOR_INIT ) {
		return action.embedPopup;
	}

	if ( action.type === EDITOR_EMBED_POPUP_SETTINGS_UPDATE ) {
		return {
			...action.settings,
		};
	}

	return state;
};

/**
 * Flag that gets tagged whenever a save request has failed.
 *
 * @param  {string} state  App state.
 * @param  {Object} action Action object.
 * @return {string}        Error flag.
 */
const error = ( state = '', action ) => {
	if ( action.type === EDITOR_INIT || action.type === EDITOR_SAVE ) {
		return '';
	}

	if ( action.type === EDITOR_SAVE_ERROR ) {
		return errors.SAVE_ERROR;
	}

	return state;
};

/**
 * True when editor is saving.
 *
 * @param  {boolean} state  App state.
 * @param  {Object}  action Action object.
 * @return {boolean}        Saving flag.
 */
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

/**
 * Tracks whether the user has interacted with the editor since it was laoded.
 * Used for triggering behaviors like displaying the inserter for new projects.
 *
 * @param  {boolean} state  App state.
 * @param  {Object}  action Action object.
 * @return {boolean}         Pristine flag.
 */
const isPristine = ( state = false, action ) => {
	if ( action.type === EDITOR_INIT ) {
		return true;
	}

	if (
		action.type === EDITOR_CURRENT_PAGE_INDEX_SET ||
		action.type === EDITOR_PAGE_UPDATE ||
		action.type === EDITOR_SAVE
	) {
		return false;
	}

	return state;
};

/**
 * Project title.
 *
 * @param  {Object} state  App state.
 * @param  {Object} action Action object.
 * @return {Object}        Navigation Settings.
 */
const navigation = ( state = null, action ) => {
	if (
		action.type === EDITOR_INIT ||
		action.type === EDITOR_NAVIGATION_SETTINGS_UPDATE
	) {
		return action.navigation;
	}

	return state;
};

/**
 * Project's pages.
 *
 * @param  {Array}  state  App state.
 * @param  {Object} action Action object.
 * @return {Array}         Pages.
 */
const pages = ( state = [], action ) => {
	if ( action.type === EDITOR_INIT ) {
		return action.pages;
	}

	if ( action.type === EDITOR_PAGE_INSERT ) {
		return [
			...slice( state, 0, action.pageIndex ),
			action.pageContent,
			...slice( state, action.pageIndex ),
		];
	}

	if ( action.type === EDITOR_PAGE_DUPLICATE ) {
		return [
			...slice( state, 0, action.pageIndex ),
			clonePage( state[ action.pageIndex ] ),
			...slice( state, action.pageIndex ),
		];
	}

	if ( action.type === EDITOR_PAGE_DELETE && 1 < state.length ) {
		return filter( state, ( _, index ) => index !== action.pageIndex );
	}

	if ( action.type === EDITOR_PAGE_UPDATE ) {
		return tap(
			[ ...state ],
			( pageArray ) =>
				( pageArray[ action.pageIndex ] = action.pageContent )
		);
	}

	if ( action.type === EDITOR_PAGE_ORDER_UPDATE ) {
		return map( action.order, ( originalIndex ) => state[ originalIndex ] );
	}

	return state;
};

/**
 * Project ID of the project that's currently loaded into the editor.
 * '0' means the a new/non-existing project.
 *
 * @param  {number} state  App state.
 * @param  {Object} action Action object.
 * @return {number}        Project ID.
 */
const projectId = ( state = 0, action ) => {
	if ( action.type === EDITOR_INIT || action.type === EDITOR_SAVE_SUCCESS ) {
		return action.projectId;
	}

	return state;
};

/**
 * Project template.
 *
 * @param  {string} state  App state.
 * @param  {Object} action Action object.
 * @return {string}        Template.
 */
const slug = ( state = '', action ) => {
	if ( action.type === EDITOR_SLUG_UPDATE || action.type === EDITOR_INIT ) {
		return action.slug;
	}

	return state;
};

/**
 * Project title.
 *
 * @param  {string} state  App state.
 * @param  {Object} action Action object.
 * @return {string}        Title.
 */
const title = ( state = '', action ) => {
	if ( action.type === EDITOR_INIT || action.type === EDITOR_TITLE_UPDATE ) {
		return action.title;
	}

	return state;
};

/**
 * Project theme.
 *
 * @param  {string} state  App state.
 * @param  {Object} action Action object.
 * @return {string}        Theme.
 */
const theme = ( state = '', action ) => {
	if ( action.type === EDITOR_INIT || action.type === EDITOR_THEME_UPDATE ) {
		return action.theme;
	}

	return state;
};

/**
 * Project template.
 *
 * @param  {string} state  App state.
 * @param  {Object} action Action object.
 * @return {string}        Template.
 */
const template = ( state = '', action ) => {
	if ( action.type === EDITOR_TEMPLATE_UPDATE ) {
		return action.template;
	}

	return state;
};

export default combineReducers( {
	changes,
	currentPage,
	edited,
	embedCard,
	embedPopup,
	error,
	isSaving,
	isPristine,
	navigation,
	pages,
	projectId,
	slug,
	template,
	theme,
	title,
} );
