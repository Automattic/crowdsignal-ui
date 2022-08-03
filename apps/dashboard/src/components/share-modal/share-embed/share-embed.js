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
import { ShareEmbedPreview } from './share-embed-preview';

const getEmbedCodeSnippet = ( projectUrl ) =>
	'<script type="text/javascript" src="https://app.crowdsignal.com/embed.js" async></script>\n' +
	`<crowdsignal-embed src="${ projectUrl }"></crowdsignal-embed>`;

export const ShareEmbed = ( { link } ) => {
	return (
		<ShareCard>
			<ShareCardHeader>
				{ __( 'Embed iFrame', 'dashboard' ) }
			</ShareCardHeader>
			<ShareCardBody>
				<ShareCardContent>
					<ShareCardContentText>
						{ __(
							'Embed your form via a responsive iFrame. Your form will expand and responsively adjust to the available space on your page.',
							'dashboard'
						) }
					</ShareCardContentText>
				</ShareCardContent>
				<ShareEmbedPreview />
			</ShareCardBody>
			<ShareCardFooter>
				<SharedCardLink />
				<ShareCardButton
					defaultText={ __( 'Copy embed link', 'dashboard' ) }
					contentCopiedText={ __(
						'Embed link copied!',
						'dashboard'
					) }
					shareContent={ link }
				/>
				<ShareCardButton
					defaultText={ __( 'Copy Javascript Code', 'dashboard' ) }
					contentCopiedText={ __(
						'Code snippet copied!',
						'dashboard'
					) }
					shareContent={ getEmbedCodeSnippet( link ) }
				/>
			</ShareCardFooter>
		</ShareCard>
	);
};
