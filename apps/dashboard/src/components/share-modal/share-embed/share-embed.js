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
import { ShareEmbedPreview } from './share-embed-preview';
import { createInterpolateElement } from '@wordpress/element';

const getEmbedCodeSnippet = ( projectUrl ) =>
	'<script type="text/javascript" src="https://app.crowdsignal.com/embed.js" async></script>\n' +
	`<crowdsignal-embed src="${ projectUrl }"></crowdsignal-embed>`;

const docsURL =
	'https://crowdsignal.com/support/embed-your-survey-or-form-via-an-embed-iframe-or-an-embed-card/?embed-iframe#h2-embed-iframe';

export const ShareEmbed = ( { link } ) => {
	return (
		<ShareCard>
			<ShareCardHeader>
				<ShareCardHeaderTitle>
					{ __( 'Embed iFrame', 'dashboard' ) }
				</ShareCardHeaderTitle>
				<a href={ docsURL } target="_blank" rel="noreferrer">
					{ __( 'Learn More', 'dashboard' ) }
				</a>
			</ShareCardHeader>
			<ShareCardBody>
				<ShareCardContent>
					<ShareCardContentText>
						{ createInterpolateElement(
							__(
								'Embed your form or survey into your <a>WordPress site</a> or any <a>other website</a> via <strong>responsive iFrame.</strong>',
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
								strong: <strong />,
							}
						) }
					</ShareCardContentText>
				</ShareCardContent>
				<ShareEmbedPreview />
			</ShareCardBody>
			<ShareCardFooter>
				<SharedCardLink />
				<ShareCardButton
					defaultText={ __( 'Copy WordPress Link', 'dashboard' ) }
					contentCopiedText={ __( 'Link copied!', 'dashboard' ) }
					shareContent={ link }
				/>
				<ShareCardButton
					defaultText={ __( 'Copy JS Code Snippet', 'dashboard' ) }
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
