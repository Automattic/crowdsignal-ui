/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import accounts from './accounts/reducer';
import editor from './editor/reducer';
import polls from './polls/reducer';
import projects from './projects/reducer';
import ui from './ui/reducer';
import users from './users/reducer';

export default combineReducers( {
	accounts,
	editor,
	polls,
	projects,
	ui,
	users,
} );
