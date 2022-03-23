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
import { ShareLinkPreview } from './share-link-preview';
import { CheckIcon } from '@crowdsignal/icons';

export const ShareLink = ( { link } ) => {
	const [ linkCopied, setLinkCopied ] = useState( false );

	const classes = classnames( {
		'is-link-copied': linkCopied,
	} );

	const handleCopyShareLink = () => {
		if ( link ) {
			window.navigator.clipboard.writeText( link ).then(
				() => {
					setLinkCopied( true );
					setTimeout( () => setLinkCopied( false ), 3000 );
				},
				( err ) => {
					// eslint-disable-next-line
					window.alert(
						'Share URL could not be copied to clipboard'
					);
					// eslint-disable-next-line
					console.error( err );
				}
			);
		} else {
			// eslint-disable-next-line
			window.alert(
				'Share URL will is only available for published projects'
			);
		}
		return false;
	};

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
					onClick={ handleCopyShareLink }
					className={ classes }
				>
					{ ! linkCopied && __( 'Copy Link', 'dashboard' ) }
					{ linkCopied && (
						<>
							<CheckIcon />
							<span>{ __( 'Link copied!', 'dashboard' ) }</span>
						</>
					) }
				</ShareCardButton>
			</ShareCardFooter>
		</ShareCard>
	);
};
