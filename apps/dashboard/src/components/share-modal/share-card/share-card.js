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

export const ShareCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;

	a,
	button {
		font-size: 11px;
		font-weight: normal;
		text-decoration: none;
	}

	button {
		background: none;
		border: none;
		color: var( --wp-admin-theme-color );
		display: flex;
		padding: 0;
	}
`;

export const ShareCardHeaderTitle = styled.h1`
	font-size: 16px;
	font-weight: 700;
	margin: 0;
`;

export const ShareCardBody = styled.div`
	display: flex;
	align-items: center;
	gap: 32px;
	margin-bottom: 32px;
	flex-grow: 1;

	> * {
		flex: 1;
	}

	svg {
		height: 100px;
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
		font-size: 11px;
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
