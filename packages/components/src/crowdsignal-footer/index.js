/**
 * External dependencies
 */
import { createInterpolateElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Footer, FooterLink, Logo, UpgradeTooltip } from './styles.js';

export const CrowdsignalFooterUpgradeLink = ( { source } ) => (
	<UpgradeTooltip>
		{ createInterpolateElement(
			__(
				'Hide Crowdsignal ads <br />and get unlimited <br /> signals - <a>Upgrade</a>',
				'components'
			),
			{
				br: <br />,
				a: (
					<a
						href={ `https://crowdsignal.com/pricing?ref=${ source }` }
						target="_blank"
						rel="noopener noreferrer"
					/>
				),
			}
		) }
	</UpgradeTooltip>
);

const CrowdsignalFooter = ( {
	logo,
	message,
	source,
	style = {},
	upgradeLink,
} ) => (
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
			<>
				<UpgradeTooltip source={ source } />
				<a
					href={ `https://crowdsignal.com/pricing?ref=${ source }` }
					target="_blank"
					rel="noopener noreferrer"
				>
					{ __( 'Hide', 'components' ) }
				</a>
			</>
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

export default CrowdsignalFooter;
