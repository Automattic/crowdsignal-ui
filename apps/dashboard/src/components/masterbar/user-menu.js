/**
 * External dependencies
 */
import { useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PopoverMenu } from '@crowdsignal/components';
import {
	hasCapability,
	isJetpackPro,
	isCorporate,
	isEnterprise,
	isVIP,
} from '../../util/user';
import { MANAGE_MULTI_USER } from '../../util/user/capabilities';

const MasterbarUserMenu = ( { user } ) => {
	const [ showUserMenu, setShowUserMenu ] = useState( false );

	const userMenuToggle = useRef();

	const toggleUserMenu = () => setShowUserMenu( ! showUserMenu );

	const showUpgradeLink =
		! isJetpackPro( user ) &&
		! isCorporate( user ) &&
		! isEnterprise( user ) &&
		! isVIP( user );

	return (
		<>
			<button
				ref={ userMenuToggle }
				className="masterbar__navigation-button is-user-toggle"
				onClick={ toggleUserMenu }
			>
				{ user.profile.name }
			</button>

			<PopoverMenu
				className="masterbar__user-menu"
				context={ userMenuToggle }
				isVisible={ showUserMenu }
				onClose={ toggleUserMenu }
			>
				{ showUpgradeLink && (
					<>
						<PopoverMenu.Item
							href={ `/upgrade.php?source=header-link-${ user.accountType }` }
						>
							{ __( 'Upgrade your account', 'dashboard' ) }
						</PopoverMenu.Item>
						<PopoverMenu.Separator />
					</>
				) }

				<PopoverMenu.Item href="/account">
					{ __( 'My Account', 'dashboard' ) }
				</PopoverMenu.Item>
				<PopoverMenu.Item href="/account/whitelist.php">
					{ __( 'Whitelist', 'dashboard' ) }
				</PopoverMenu.Item>
				<PopoverMenu.Item href="/delete-requests">
					{ __( 'Delete Requests', 'dashboard' ) }
				</PopoverMenu.Item>

				{ hasCapability( user, MANAGE_MULTI_USER ) && (
					<PopoverMenu.Item href="/users/list-users.php">
						{ __( 'Users', 'dashboard' ) }
					</PopoverMenu.Item>
				) }

				<PopoverMenu.Separator />
				<PopoverMenu.Item href="https://crowdsignal.com/blog">
					{ __( 'Crowdsignal Blog', 'dashboard' ) }
				</PopoverMenu.Item>
				<PopoverMenu.Item href="https://crowdsignal.com/contact">
					{ __( 'Feedback', 'dashboard' ) }
				</PopoverMenu.Item>
				<PopoverMenu.Item href="/logout.php">
					{ __( 'Sign out', 'dashboard' ) }
				</PopoverMenu.Item>
			</PopoverMenu>
		</>
	);
};

export default MasterbarUserMenu;
