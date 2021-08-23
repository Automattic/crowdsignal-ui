/**
 * External dependencies
 */
import { withSelect } from '@wordpress/data';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { CrowdsignalLogo } from '@crowdsignal/components';
import { STORE_NAME } from '../../data';
import LoggedIn from './logged-in';
import LoggedOut from './logged-out';

/**
 * Style dependencies
 */
import './styles.scss';

export const Masterbar = ( { isAdmin, user } ) => {
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

export default withSelect( ( select ) => ( {
	user: select( STORE_NAME ).getCurrentUser(),
} ) )( Masterbar );
