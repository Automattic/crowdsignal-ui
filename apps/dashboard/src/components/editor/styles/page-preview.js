/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const PagePreviewWrapper = styled.button`
	align-items: center;
	background: transparent;
	border: 0;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 8px;
	padding: 8px 16px;
	width: 100%;

	&:hover {
		background-color: var( --color-neutral-0 );
	}
`;

export const PagePreviewFrame = styled.div`
	background-color: var( --color-surface );
	border: 1px solid var( --color-border );
	border-radius: 2px;
	box-sizing: border-box;
	height: 80px;
	position: relative;
	overflow: hidden;
	width: 100px;

	${ PagePreviewWrapper }.is-active & {
		box-shadow: 0 0 0 2px var( --color-primary );
	}

	.block-editor-block-preview__content > iframe {
		border: 0;
		max-width: initial;
	}
`;

export const PagePreviewPageNumber = styled.span`
	flex: 1;
	color: var( --color-text-subtle );
	display: flex;
	font-size: 11px;
	font-weight: bold;
	justify-content: center;

	${ PagePreviewWrapper }.is-active & {
		color: var( --color-primary );
	}
`;
