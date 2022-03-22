/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	ShareCard,
	ShareCardButton,
	ShareCardContent,
	ShareCardContentText,
	ShareCardFooter,
	ShareCardHeader,
	SharedCardLink,
} from '../share-card/share-card';
import { ShareLinkPreview } from './share-link-preview';

export const ShareLink = ( { link, onCopyLinkClick } ) => (
	<ShareCard>
		<ShareCardHeader>{ __( 'Link', 'dashboard' ) }</ShareCardHeader>
		<ShareCardContent>
			<ShareCardContentText>
				{ __(
					'Share your form or survey via a link, and present it on its own page.',
					'dashboard'
				) }
			</ShareCardContentText>
			<ShareLinkPreview />
		</ShareCardContent>
		<ShareCardFooter>
			<SharedCardLink>{ link }</SharedCardLink>
			<ShareCardButton onClick={ onCopyLinkClick }>
				{ __( 'Copy Link', 'dashboard' ) }
			</ShareCardButton>
		</ShareCardFooter>
	</ShareCard>
);
