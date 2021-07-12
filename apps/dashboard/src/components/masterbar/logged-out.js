/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

const LoggedOutMasterbar = () => (
	<nav className="masterbar__navigation">
		<ul className="masterbar__navigation-list">
			<li>
				<a
					className="masterbar__navigation-button"
					href="https://crowdsignal.com/features"
				>
					{ __( 'Features', 'dashboard' ) }
				</a>
			</li>
			<li>
				<a
					className="masterbar__navigation-button"
					href="https://crowdsignal.com/pricing"
				>
					{ __( 'Pricing', 'dashboard' ) }
				</a>
			</li>
		</ul>
	</nav>
);

export default LoggedOutMasterbar;
