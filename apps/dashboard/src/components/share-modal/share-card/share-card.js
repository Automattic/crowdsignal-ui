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

	a {
		color: var( --wp-admin-theme-color );
		text-decoration: underline;
		text-underline-offset: initial;
	}
`;

export const ShareCardHeader = styled.h1`
	position: relative;
	font-size: 16px;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 12px;

	a {
		position: absolute;
		right: 0;
		font-size: 11px;
		text-decoration: none;
		font-weight: normal;
	}
`;

export const ShareCardBody = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 32px;
	margin-bottom: 32px;
	flex-grow: 1;

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
`;

export const ShareCardFooter = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const SharedCardLink = styled.span`
	font-size: 10px;
	color: var( --color-neutral-60 );
	overflow: hidden;
	text-overflow: ellipsis;
	flex-grow: 1;
	white-space: nowrap;
`;
