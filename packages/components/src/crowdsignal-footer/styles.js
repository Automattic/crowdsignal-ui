/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

/**
 * Internal dependencies
 */
import { color } from '@crowdsignal/styles';

export const Footer = styled.div`
	align-items: center;
	display: flex;
	margin-top: 16px;
	width: 100%;
`;

export const FooterLink = styled.div( ( { style } ) => {
	return css`
		display: inline-flex;
		text-decoration: none;
		text-transform: uppercase;
		vertical-align: middle;

		&:not( :hover ) {
			color: ${ style.color || color( 'text' ) };
			opacity: 0.4;
		}
	`;
} );

export const UpgradeTooltip = styled.span`
	background-color: #a4a4a4;
	border: 0;
	border-radius: 2px;
	box-shadow: none;
	color: ${ color( 'text-inverted' ) };
	cursor: pointer;
	display: inline-flex;
	font-family: sans-serif;
	font-size: 10px;
	margin-left: 16px;
	padding: 2px 8px;
	text-decoration: none;
	vertical-align: middle;
`;

export const Logo = styled.div`
	display: inline-flex;
`;
