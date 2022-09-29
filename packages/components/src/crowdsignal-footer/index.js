/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	Footer,
	FooterLink,
	Logo,
	UpgradeLink,
	UpgradeTooltip,
	UpgradeWrapper,
} from './styles.js';

const CrowdsignalFooter = ( {
	logo,
	message,
	source,
	style = {},
	upgradeLink,
} ) => {
	const [ showUpgradeTooltip, setShowUpgradeTooltip ] = useState( false );

	return (
		<Footer>
			<FooterLink
				as="a"
				href={ `https://crowdsignal.com?ref=${ source }` }
				target="_blank"
				rel="noopener noreferrer"
				style={ style }
			>
				{ message }
			</FooterLink>

			{ upgradeLink && (
				<UpgradeWrapper>
					<UpgradeLink
						href={ `https://crowdsignal.com/pricing?ref=${ source }` }
						target="_blank"
						rel="noopener noreferrer"
						onMouseOver={ () => setShowUpgradeTooltip( true ) }
						onMouseLeave={ () => setShowUpgradeTooltip( false ) }
					>
						{ __( 'Hide', 'components' ) }
					</UpgradeLink>
					{ showUpgradeTooltip && (
						<UpgradeTooltip>
							{ __(
								'Hide Crowdsignal ads and get unlimited signals',
								'components'
							) }
						</UpgradeTooltip>
					) }
				</UpgradeWrapper>
			) }

			{ logo && (
				<Logo
					href={ `https://crowdsignal.com?ref=${ source }` }
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://app.crowdsignal.com/images/svg/cs-logo-dots.svg"
						alt="Crowdsignal"
					/>
				</Logo>
			) }
		</Footer>
	);
};

CrowdsignalFooter.Wrapper = Footer;

export default CrowdsignalFooter;
