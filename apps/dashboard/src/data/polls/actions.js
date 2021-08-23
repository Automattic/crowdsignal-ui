/**
 * Internal dependencies
 */
import { POLL_SAVE, POLL_UPDATE } from '../action-types';

export function savePoll( pollId, poll ) {
	return {
		type: POLL_SAVE,
		pollId,
		poll,
	};
}

export function updatePoll( pollId, poll ) {
	return {
		type: POLL_UPDATE,
		pollId,
		poll,
	};
}

export function* saveAndUpdatePoll( pollId, poll ) {
	try {
		const response = yield savePoll( pollId, poll );
		const id = pollId || response.data.id;

		return updatePoll( id, {
			...poll,
			id,
		} );
	} catch ( error ) {
		// Save failed
		throw error;
	}
}
