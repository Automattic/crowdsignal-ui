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
import { createInterpolateElement } from '@wordpress/element';

const getEmbedCodeSnippet = ( projectUrl ) =>
	'<script type="text/javascript" src="https://app.crowdsignal.com/embed.js" async></script>\n' +
	`<crowdsignal-card src="${ projectUrl }"></crowdsignal-card>`;

const docsURL =
	'https://crowdsignal.com/support/embed-your-survey-or-form-via-an-embed-iframe-or-an-embed-card/?embed-iframe#h2-embed-card';

export const ShareEmbedCard = ( { link } ) => {
	return (
		<ShareCard>
			<ShareCardHeader>
				{ __( 'Embed Card', 'dashboard' ) }
				<a href={ docsURL } target="_blank" rel="noreferrer">
					{ __( 'Lean More', 'dashboard' ) }
				</a>
			</ShareCardHeader>
			<ShareCardBody>
				<ShareCardContent>
					<ShareCardContentText>
						{ createInterpolateElement(
							__(
								'Embed your form or survey into your <a>WordPress site</a> or any <a>other website</a> via a card with a fixed format.',
								'dashboard'
							),
							{
								a: (
									<a
										href={ docsURL }
										target="_blank"
										rel="noopener noreferrer"
									/>
								),
							}
						) }
					</ShareCardContentText>
				</ShareCardContent>
				<ShareEmbedCardPreview />
			</ShareCardBody>
			<ShareCardFooter>
				<SharedCardLink />
				<ShareCardButton
					contentCopiedText={ __( 'Link copied!', 'dashboard' ) }
					defaultText={ __( 'Copy WordPress Link', 'dashboard' ) }
					shareContent={ `${ link }?type=card` }
				/>
				<ShareCardButton
					contentCopiedText={ __(
						'Code snippet copied!',
						'dashboard'
					) }
					defaultText={ __( 'Copy JS Code Snippet', 'dashboard' ) }
					shareContent={ getEmbedCodeSnippet( link ) }
				/>
			</ShareCardFooter>
		</ShareCard>
	);
};
