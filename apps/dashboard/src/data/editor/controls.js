/**
 * External depencencies
 */
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	EDITOR_AUTOSAVE_TIMER_CANCEL,
	EDITOR_AUTOSAVE_TIMER_RESET,
} from '../action-types';
import { STORE_NAME } from '../';

const AUTOSAVE_WAIT_PERIOD = 5000;

let timer = null;

export default {
	[ EDITOR_AUTOSAVE_TIMER_CANCEL ]: () => {
		clearInterval( timer );

		return true;
	},
	[ EDITOR_AUTOSAVE_TIMER_RESET ]: () => {
		clearInterval( timer );

		timer = setTimeout( () => {
			dispatch( STORE_NAME ).saveEditorChanges();
		}, AUTOSAVE_WAIT_PERIOD );

		return true;
	},
};
