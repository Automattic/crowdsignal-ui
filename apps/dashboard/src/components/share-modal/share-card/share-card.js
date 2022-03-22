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

export const ShareCardContent = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 32px;
	margin-bottom: 32px;

	> * {
		flex: 1;
	}
`;

export const ShareCardContentText = styled.p`
	color: var( --color-neutral-60 );
	margin: 0;

	&&& {
		font-size: 12px;
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
	color: #007cba;
	border: 1px solid currentColor;
	border-radius: 2px;
	background-color: transparent;
	cursor: pointer;
	flex-shrink: 0;
`;
