/**
 * External dependencies
 */
import { dispatch } from '@wordpress/data';
import { doAction } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import {
	AUTOSAVE_TIMER_CANCEL,
	AUTOSAVE_TIMER_START,
	EDITOR_SAVE_ACTION_EXECUTE,
} from './action-types';

/**
 * Autosave delay in ms.
 *
 * @type {number}
 */
const AUTOSAVE_DELAY = 5000;

/**
 * Contains the current autosave timer ID.
 *
 * @type {number|null}
 */
let timer = null;

export default {
	[ AUTOSAVE_TIMER_CANCEL ]: () => {
		clearInterval( timer );

		return true;
	},
	[ AUTOSAVE_TIMER_START ]: () => {
		clearInterval( timer );

		timer = setTimeout( () => {
			dispatch( 'crowdsignal/editor' ).saveChanges();
		}, AUTOSAVE_DELAY );

		return true;
	},
	[ EDITOR_SAVE_ACTION_EXECUTE ]: ( { data, projectId } ) => {
		try {
			return doAction( 'crowdsignal.editor.save', projectId, data );
		} catch ( error ) {
			return 0;
		}
	},
};
