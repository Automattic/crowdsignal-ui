/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import UserMenu from './user-menu';

const LoggedInMasterbar = ( { isAdmin, user } ) => {
	return (
		<>
			<nav className="masterbar__navigation">
				<ul className="masterbar__navigation-list">
					<li>
						<a
							className="masterbar__navigation-button"
							href="/dashboard"
						>
							{ __( 'Dashboard', 'dashboard' ) }
						</a>
					</li>
					<li>
						<a
							className="masterbar__navigation-button"
							href="/contact-groups"
						>
							{ __( 'Contacts', 'dashboard' ) }
						</a>
					</li>
					<li>
						<a
							className="masterbar__navigation-button"
							href="https://crowdsignal.com/support"
							target="blank"
							rel="noopener noreferrer"
						>
							{ __( 'Help', 'dashboard' ) }
						</a>
					</li>

					{ isAdmin && (
						<li>
							<a
								className="masterbar__navigation-button"
								href="/admin"
							>
								{ __( 'Admin', 'dashboard' ) }
							</a>
						</li>
					) }

					{ isAdmin && window.BILLING_DEBUG && (
						<li>
							<a
								className="masterbar__navigation-button"
								href="/dashboard"
							>
								{ __( 'Billing', 'dashboard' ) }
							</a>
						</li>
					) }
				</ul>
			</nav>

			<UserMenu user={ user } />
		</>
	);
};

export default LoggedInMasterbar;
