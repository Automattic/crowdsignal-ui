/**
 * External dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import polls from './polls/reducer';
import projects from './projects/reducer';
import ui from './ui/reducer';

export default combineReducers( {
	polls,
	projects,
	ui,
} );
