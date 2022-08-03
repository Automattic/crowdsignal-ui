/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import classnames from 'classnames';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { CheckIcon } from '@crowdsignal/icons';

const StyledShareCardButton = styled.button`
	min-height: 36px;
	font-size: 13px;
	font-weight: 400;
	line-height: normal;
	color: var( --wp-admin-theme-color );
	border: 1px solid currentColor;
	border-radius: 2px;
	background-color: transparent;
	cursor: pointer;
	display: flex;
	align-items: center;
	flex-shrink: 0;

	&.is-link-copied {
		border: none;
		outline: none;
		cursor: default;
		pointer-events: none;
	}

	svg {
		width: 16px;

		path {
			stroke: currentColor;
		}
	}
`;

export const ShareCardButton = ( {
	contentCopiedText,
	defaultText,
	shareContent,
} ) => {
	const [ linkCopied, setLinkCopied ] = useState( false );

	const handleCopyShareContent = () => {
		window.navigator.clipboard.writeText( shareContent ).then(
			() => {
				setLinkCopied( true );
				setTimeout( () => setLinkCopied( false ), 3000 );
			},
			( err ) => {
				// eslint-disable-next-line
				window.alert( 'The content could not be copied to clipboard' );
				// eslint-disable-next-line
				console.error( err );
			}
		);

		return false;
	};

	const classes = classnames( {
		'is-link-copied': linkCopied,
	} );

	return (
		<StyledShareCardButton
			onClick={ handleCopyShareContent }
			className={ classes }
		>
			{ ! linkCopied && defaultText }
			{ linkCopied && (
				<>
					<CheckIcon />
					<span>{ contentCopiedText }</span>
				</>
			) }
		</StyledShareCardButton>
	);
};
