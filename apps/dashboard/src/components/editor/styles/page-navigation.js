/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const PageNavigationWrapper = styled.div`
	background-color: var( --color-surface );
	border-right: 1px solid var( --color-border );
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
	position: absolute;
	bottom: 0;
	left: 0;
	top: 65px;
	transition: width 0.3s;
	width: 88px;

	&.is-expanded {
		width: 180px;
	}
`;

export const PageNavigationHeader = styled.button`
	align-items: center;
	background-color: transparent;
	border: 0;
	border-bottom: 1px solid var( --color-border );
	box-sizing: border-box;
	color: var( --color-text-subtle );
	cursor: pointer;
	display: flex;
	font-size: 11px;
	margin-bottom: 8px;
	padding: 0 16px 0 32px;
	height: 61px;
	text-transform: uppercase;
	width: 100%;

	svg {
		margin-right: 16px;
	}

	span {
		opacity: 0;
		transition: opacity 0.1s, width 0.1s;
		width: 0;

		&.entered {
			opacity: 1;
			width: auto;
		}
	}
`;

export const PageNavigationAddButton = styled.button`
	align-items: center;
	background-color: transparent;
	box-sizing: border-box;
	border: 1px solid var( --color-text );
	border-radius: 2px;
	color: var( --color-text );
	cursor: pointer;
	display: flex;
	height: 40px;
	justify-content: center;
	margin: 16px 24px;
	transition: margin 0.3s, width 0.3s;
	width: 40px;

	${ PageNavigationWrapper }.is-expanded & {
		margin: 16px 16px 0 63px;
		width: 100px;
	}
`;

export const PageNavigationSectionHeader = styled.span`
	color: var( --color-text-subtle );
	display: flex;
	font-size: 11px;
	height: 0;
	margin-top: 8px;
	overflow: hidden;
	opacity: 0;
	padding: 0 16px 0 64px;
	text-transform: uppercase;
	transition: height 0.3s, margin-top: 0.3s, opacity 0.1s;
	width: 100%;

	&.entered {
		opacity: 1;
	}

	${ PageNavigationWrapper }.is-expanded & {
		height: 20px;
		margin-top: 32px;
	}
`;
