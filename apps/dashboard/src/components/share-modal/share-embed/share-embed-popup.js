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
import { ShareEmbedPopupPreview } from './share-embed-popup-preview';
import { createInterpolateElement } from '@wordpress/element';

const getEmbedCodeSnippet = ( projectUrl ) =>
	'<script type="text/javascript" src="https://app.crowdsignal.com/embed.js" async></script>\n' +
	`<crowdsignal-popup src="${ projectUrl }"></crowdsignal-popup>`;

const docsURL =
	'https://crowdsignal.com/support/embed-your-survey-or-form-via-an-embed-iframe-or-an-embed-card/?embed-iframe#h2-embed-popup';

export const ShareEmbedPopup = ( { link } ) => {
	return (
		<ShareCard>
			<ShareCardHeader>
				{ __( 'Embed Popup', 'dashboard' ) }
				<a href={ docsURL } target="_blank" rel="noreferrer">
					{ __( 'Learn More', 'dashboard' ) }
				</a>
			</ShareCardHeader>
			<ShareCardBody>
				<ShareCardContent>
					<ShareCardContentText>
						{ createInterpolateElement(
							__(
								'Embed your form or survey into your <a>WordPress site</a> or any <a>other website</a> via a popup window on page load.',
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
				<ShareEmbedPopupPreview />
			</ShareCardBody>
			<ShareCardFooter>
				<SharedCardLink />
				<ShareCardButton
					contentCopiedText={ __( 'Link copied!', 'dashboard' ) }
					defaultText={ __( 'Copy WordPress Link', 'dashboard' ) }
					shareContent={ `${ link }?type=popup` }
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
