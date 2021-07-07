/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

/**
 * Internal dependencies
 */
import { color } from '@crowdsignal/styles';

const baseButton = css`
	align-items: center;
	background-color: ${ color( 'neutral', 0 ) };
	border-color: ${ color( 'border' ) };
	border-radius: 5px;
	border-style: solid;
	border-width: 1px 1px 2px;
	box-sizing: border-box;
	cursor: pointer;
	color: var( --color-text );
	display: inline-flex;
	font-size: 14px;
	height: 32px;
	justify-content: center;
	line-height: 24px;
	outline: 0;
	padding: 3px 15px 2px;
	position: relative;
	text-align: center;
	transition: background-color 0.1s ease-out, border-color 0.1s ease-out;
	white-space: nowrap;
	width: fit-content;

	&:hover {
		border-color: ${ color( 'text' ) };
	}

	&:disabled,
	&:disabled:hover {
		background-color: ${ color( 'surface' ) };
		color: ${ color( 'text-subtle' ) };
	}
`;

const borderlessButton = css`
	border: 0;
	background-color: transparent;
`;

const primaryButton = ( isBorderless ) => css`
	background-color: ${ color( 'primary' ) };
	border-color: ${ color( 'primary', 'dark' ) };
	color: ${ isBorderless ? color( 'primary' ) : color( 'text-inverted' ) };

	&:hover {
		background-color: ${ color( 'primary', 'light' ) };
	}

	&:disabled,
	&:disabled:hover {
		background-color: ${ color( 'primary', 10 ) };
		border-color: ${ color( 'primary', 20 ) };
	}
`;

const secondaryButton = ( isBorderless ) => css`
	background-color: ${ color( 'secondary' ) };
	border-color: ${ color( 'secondary', 'dark' ) };
	color: ${ isBorderless ? color( 'secondary' ) : color( 'text-inverted' ) };

	&:hover {
		background-color: ${ color( 'secondary', 'light' ) };
	}

	&:disabled,
	&:disabled:hover {
		background-color: ${ color( 'secondary', 10 ) };
		border-color: ${ color( 'secondary', 20 ) };
	}
`;

const highlightButton = ( isBorderless ) => css`
	background-color: ${ color( 'highlight' ) };
	border-color: ${ color( 'highlight', 'dark' ) };
	color: ${ isBorderless ? color( 'highlight' ) : color( 'text-inverted' ) };

	&:hover {
		background-color: ${ color( 'highlight', 'light' ) };
	}

	&:disabled,
	&:disabled:hover {
		background-color: ${ color( 'highlight', 10 ) };
		border-color: ${ color( 'highlight', 20 ) };
	}
`;

const scaryButton = ( isBorderless ) => css`
	background-color: ${ color( 'error' ) };
	border-color: ${ color( 'error', 'dark' ) };
	color: ${ isBorderless ? color( 'error' ) : color( 'text-inverted' ) };

	&:hover {
		background-color: ${ color( 'error', 'light' ) };
	}

	&:disabled,
	&:disabled:hover {
		background-color: ${ color( 'error', 10 ) };
		border-color: ${ color( 'error', 20 ) };
	}
`;

const compactButton = () => css``;

const largeButton = () => css`
	font-size: 12px;
	height: 45px;
	padding: 9px 30px;
`;

export const Button = styled.button(
	( {
		borderless,
		compact,
		highlight,
		large,
		primary,
		scary,
		secondary,
	} ) => {
		return css`
			${ baseButton };

			${ scary && scaryButton( borderless ) };
			${ highlight && highlightButton( borderless ) };
			${ secondary && secondaryButton( borderless ) };
			${ primary && primaryButton( borderless ) };

			${ borderless && borderlessButton };

			${ compact && compactButton( borderless ) };
			${ large && largeButton( borderless ) };
		`;
	}
);
