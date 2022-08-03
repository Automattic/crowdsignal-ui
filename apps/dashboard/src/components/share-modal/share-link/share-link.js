/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	ShareCard,
	ShareCardBody,
	ShareCardContentText,
	ShareCardFooter,
	ShareCardHeader,
	SharedCardLink,
	ShareCardContent,
} from '../share-card/share-card';
import { ShareCardButton } from '../share-card/share-card-button';
import { ShareLinkPreview } from './share-link-preview';

export const ShareLink = ( { link } ) => {
	return (
		<ShareCard>
			<ShareCardHeader>{ __( 'Link', 'dashboard' ) }</ShareCardHeader>
			<ShareCardBody>
				<ShareCardContent>
					<ShareCardContentText>
						{ __(
							'Share your form or survey via a link.',
							'dashboard'
						) }
					</ShareCardContentText>
					<ShareCardContentText>
						<span>
							{ __( '(Customize the link with ', 'dashboard' ) }
						</span>
						<a
							href="https://crowdsignal.com/support/domain-mapping/"
							target="_blank"
							rel="noreferrer"
						>
							{ __( 'your own domain', 'dashboard' ) }
						</a>
						<span>.)</span>
					</ShareCardContentText>
				</ShareCardContent>
				<ShareLinkPreview />
			</ShareCardBody>
			<ShareCardFooter>
				<SharedCardLink>{ link }</SharedCardLink>
				<ShareCardButton
					contentCopiedText={ __( 'Link copied!', 'dashboard' ) }
					defaultText={ __( 'Copy Link', 'dashboard' ) }
					shareContent={ link }
				/>
			</ShareCardFooter>
		</ShareCard>
	);
};
