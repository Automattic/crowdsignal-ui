/**
 * Internal dependencies
 */
import Masterbar from '../';
import * as Type from '../../../util/user/account-types';

export default {
	title: 'Dashboard/Components/Masterbar',
	component: Masterbar,
};

const user = {
	id: 123456,
	signalCount: 15,
	type: 7,
	profile: {
		name: 'Muriel Cooper',
	},
	account: {
		type: Type.FREE,
	},
};

export const LoggedIn = () => <Masterbar user={ user } />;

export const LoggedOut = () => <Masterbar />;

export const Admin = () => <Masterbar isAdmin user={ user } />;
