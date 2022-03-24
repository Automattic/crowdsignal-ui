/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const ShareCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 16px;
	border: 1px solid var( --color-border );
`;

export const ShareCardHeader = styled.h1`
	font-size: 16px;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 12px;
`;

export const ShareCardBody = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 32px;
	margin-bottom: 32px;

	> * {
		flex: 1;
	}
`;

export const ShareCardContent = styled.div`
	> *:not( :first-child ) {
		margin-top: 20px;
	}
`;

export const ShareCardContentText = styled.p`
	color: var( --color-neutral-60 );
	line-height: 1.5;
	margin: 0;

	&&& {
		font-size: 12px;
	}

	a {
		color: var( --color-primary-50 );
		text-decoration: underline;
		text-underline-offset: initial;
	}
`;

export const ShareCardFooter = styled.div`
	display: flex;
	align-items: center;
	gap: 32px;
`;

export const SharedCardLink = styled.span`
	font-size: 10px;
	color: var( --color-neutral-60 );
	overflow: hidden;
	text-overflow: ellipsis;
	flex-grow: 1;
`;

export const ShareCardButton = styled.button`
	min-height: 36px;
	font-size: 13px;
	font-weight: 400;
	line-height: normal;
	color: var( --color-secondary-40 );
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
	}
`;
