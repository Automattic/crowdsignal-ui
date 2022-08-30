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
	ShareCardHeaderTitle,
} from '../share-card/share-card';
import { ShareCardButton } from '../share-card/share-card-button';
import { ShareLinkPreview } from './share-link-preview';

export const ShareLink = ( { link } ) => {
	return (
		<ShareCard>
			<ShareCardHeader>
				<ShareCardHeaderTitle>
					{ __( 'Link - Full Page', 'dashboard' ) }
				</ShareCardHeaderTitle>
			</ShareCardHeader>
			<ShareCardBody>
				<ShareCardContent>
					<ShareCardContentText>
						{ __(
							'Share your form via a link, and present it on its own page.',
							'dashboard'
						) }
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
