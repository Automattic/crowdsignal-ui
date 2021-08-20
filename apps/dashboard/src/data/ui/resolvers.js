/**
 * Internal dependencies
 */
import { fetchUser } from '@crowdsignal/rest-api';
import { dispatchAsync } from 'data/actions';
import { updateAccount, updateAccountSignalCount } from 'data/accounts/actions';
import {
	updateUserAccount,
	updateUserCapabilities,
	updateUserProfile,
} from 'data/users/actions';
import { updateCurrentUser } from 'data/ui/actions';

function* getCurrentUser() {
	try {
		const response = yield dispatchAsync( fetchUser, [ 'me' ] );

		const {
			account,
			capabilities,
			id: userId,
			profile,
			signalCount,
		} = response.data;

		yield updateUserAccount( userId, account.id );
		yield updateUserCapabilities( userId, capabilities );
		yield updateUserProfile( userId, profile );

		yield updateAccount(
			account.id,
			account.type,
			account.users,
			account.domain,
			signalCount.userLimit
		);

		yield updateAccountSignalCount( signalCount.count );

		yield updateCurrentUser( userId );
	} catch ( error ) {
		// The user is not logged in, no action required
	}
}

export default {
	getCurrentUser,
};
