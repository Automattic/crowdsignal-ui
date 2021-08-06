/**
 * Internal dependencies
 */
import { createPoll, updatePoll } from '@crowdsignal/rest-api';
import { POLL_SAVE } from '../action-types';

export default {
	[ POLL_SAVE ]: ( { pollId, poll } ) => {
		if ( ! pollId ) {
			return createPoll( poll );
		}

		return updatePoll( poll );
	},
};
