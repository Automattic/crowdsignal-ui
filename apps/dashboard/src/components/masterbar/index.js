/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { CrowdsignalLogo } from '@crowdsignal/components';
import LoggedIn from './logged-in';
import LoggedOut from './logged-out';

/**
 * Style dependencies
 */
import './styles.scss';

const Masterbar = ( { isAdmin, user } ) => {
	const classes = classnames( 'masterbar', {
		'is-admin': isAdmin,
	} );

	return (
		<header className={ classes }>
			<a href="/" className="masterbar__logo-link">
				<CrowdsignalLogo size={ 48 } />
			</a>

			{ user && <LoggedIn isAdmin={ isAdmin } user={ user } /> }
			{ ! user && <LoggedOut /> }
		</header>
	);
};

export default Masterbar;
