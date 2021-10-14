/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import {
	PROJECT_SAVE,
	PROJECT_SAVE_ERROR,
	PROJECT_UPDATE,
	PROJECT_CHANGE,
} from '../action-types';
import * as ProjectStatus from '../../util/project/project-status';

const items = ( state = {}, action ) => {
	if ( action.type === PROJECT_UPDATE ) {
		return {
			...state,
			[ action.projectId ]: action.project,
		};
	}

	return state;
};

const lastUpdatedItemId = ( state = 0, action ) => {
	if ( action.type === PROJECT_UPDATE ) {
		return action.projectId;
	}

	return state;
};

const isSaving = ( state = false, action ) => {
	if ( action.type === PROJECT_SAVE ) {
		return true;
	}

	if (
		action.type === PROJECT_SAVE_ERROR ||
		action.type === PROJECT_UPDATE
	) {
		return false;
	}

	return state;
};

const projectStatus = (
	state = ProjectStatus.DRAFT_WITH_UNSAVED_CHANGES,
	action
) => {
	let newStatus = state;
	const hasBeenPublished = get(
		action,
		[ 'project', 'content', 'published' ],
		null
	);
	if ( action.type === PROJECT_UPDATE ) {
		newStatus = ProjectStatus.DRAFT;
		if (
			hasBeenPublished &&
			action.project.content.published.timestamp <
				action.project.content.draft.timestamp
		) {
			newStatus = ProjectStatus.PUBLIC_WITH_UNPUBLISHED_CHAGES;
		} else if ( hasBeenPublished ) {
			newStatus = ProjectStatus.PUBLIC;
		}
	}

	if ( action.type === PROJECT_CHANGE ) {
		newStatus = ProjectStatus.DRAFT_WITH_UNSAVED_CHANGES;
		if ( hasBeenPublished ) {
			newStatus = ProjectStatus.PUBLIC_WITH_UNSAVED_CHAGES;
		}
	}
	return newStatus;
};

export default combineReducers( {
	items,
	lastUpdatedItemId,
	isSaving,
	projectStatus,
} );
