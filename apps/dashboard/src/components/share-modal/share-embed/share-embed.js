/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import {
	ShareCard,
	ShareCardButton,
	ShareCardBody,
	ShareCardContentText,
	ShareCardFooter,
	ShareCardHeader,
	SharedCardLink,
	ShareCardContent,
} from '../share-card/share-card';
import { ShareLinkPreview } from '../share-link/share-link-preview';
import { CheckIcon } from '@crowdsignal/icons';

const getEmbedCodeSnippet = ( projectUrl ) =>
	'<script type="text/javascript" src="https://app.crowdsignal.com/embed.js" async></script>\n' +
	`<crowdsignal-embed src="${ projectUrl }"></crowdsignal-embed>`;

export const ShareEmbed = ( { link } ) => {
	const [ linkCopied, setLinkCopied ] = useState( false );

	const classes = classnames( {
		'is-link-copied': linkCopied,
	} );

	const handleCopyShareLink = () => {
		if ( link ) {
			window.navigator.clipboard
				.writeText( getEmbedCodeSnippet( link ) )
				.then(
					() => {
						setLinkCopied( true );
						setTimeout( () => setLinkCopied( false ), 3000 );
					},
					( err ) => {
						// eslint-disable-next-line
						window.alert(
							'The embed code snippet could not be copied to clipboard'
						);
						// eslint-disable-next-line
						console.error( err );
					}
				);
		} else {
			// eslint-disable-next-line
			window.alert(
				'The embed code snippet is only available for published projects'
			);
		}
		return false;
	};

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
				<ShareLinkPreview />
			</ShareCardBody>
			<ShareCardFooter>
				<SharedCardLink />
				<ShareCardButton
					onClick={ handleCopyShareLink }
					className={ classes }
				>
					{ ! linkCopied && __( 'Copy code snippet', 'dashboard' ) }
					{ linkCopied && (
						<>
							<CheckIcon />
							<span>
								{ __( 'Code snippet copied!', 'dashboard' ) }
							</span>
						</>
					) }
				</ShareCardButton>
			</ShareCardFooter>
		</ShareCard>
	);
};
