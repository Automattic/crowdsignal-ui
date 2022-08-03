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
import { ShareEmbedCardPreview } from './share-embed-card-preview';

const getEmbedCodeSnippet = ( projectUrl ) =>
	'<script type="text/javascript" src="https://app.crowdsignal.com/embed.js" async></script>\n' +
	`<crowdsignal-card src="${ projectUrl }"></crowdsignal-card>`;

export const ShareEmbedCard = ( { link } ) => {
	return (
		<ShareCard>
			<ShareCardHeader>
				{ __( 'Embed Card', 'dashboard' ) }
			</ShareCardHeader>
			<ShareCardBody>
				<ShareCardContent>
					<ShareCardContentText>
						{ __(
							'Embed your form or survey onto your website using a card with a fixed format.',
							'dashboard'
						) }
					</ShareCardContentText>
				</ShareCardContent>
				<ShareEmbedCardPreview />
			</ShareCardBody>
			<ShareCardFooter>
				<SharedCardLink />
				<ShareCardButton
					contentCopiedText={ __(
						'Embed link copied!',
						'dashboard'
					) }
					defaultText={ __( 'Copy Embed Link', 'dashboard' ) }
					shareContent={ `${ link }?type=card` }
				/>
				<ShareCardButton
					contentCopiedText={ __(
						'Code snippet copied!',
						'dashboard'
					) }
					defaultText={ __( 'Copy Javascript Code', 'dashboard' ) }
					shareContent={ getEmbedCodeSnippet( link ) }
				/>
			</ShareCardFooter>
		</ShareCard>
	);
};
