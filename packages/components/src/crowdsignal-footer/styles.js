/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoint } from '@crowdsignal/styles';

export const Footer = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
	margin-top: 16px;
	width: 100%;
`;

export const FooterLink = styled.div( () => {
	return css`
		display: inline-flex;
		text-decoration: none;
		text-transform: uppercase;
		vertical-align: middle;
		line-height: normal;

		&:not( :hover ) {
			opacity: 0.7;
		}

		${ breakpoint( '<480px' ) } {
			text-align: center;
		}
	`;
} );

export const UpgradeWrapper = styled.div`
	position: relative;
	margin-left: 16px;
	display: flex;
	justify-content: center;
`;

export const UpgradeLink = styled.a`
	position: relative;
	background-color: var( --color-neutral-50 );
	display: inline-flex;
	justify-content: center;
	font-size: 10px;
	text-decoration: none;
	color: var( --color-text-inverted );
	border-radius: 2px;
	padding: 4px 8px;

	&:hover {
		color: var( --color-text-inverted );
	}
`;

export const UpgradeTooltip = styled.div`
	width: 120px;
	position: absolute;
	bottom: calc( 100% + 8px );
	background-color: var( --color-neutral-50 );
	border-radius: 2px;
	color: var( --color-text-inverted );
	display: block;
	justify-content: center;
	font-size: 10px;
	padding: 4px 8px;
	text-align: center;

	${ breakpoint( '<480px' ) } {
		right: 0;
	}
`;

export const Logo = styled.div`
	display: inline-flex;
`;
