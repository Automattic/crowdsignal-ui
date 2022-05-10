/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const TemplatePreviewWrapper = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const TemplatePreviewFrame = styled.button`
	background-color: var( --color-surface );
	background-color: var( --color-page-background );
	border: 1px solid var( --color-border );
	border-radius: 2px;
	box-sizing: border-box;
	cursor: pointer;
	margin-bottom: 16px;
	padding: 0;
	position: relative;
	overflow: hidden;
	width: 100%;

	&::before {
		content: '';
		display: block;
		float: left;
		padding: 67% 0 0;
	}

	.block-editor-block-preview__container {
		position: absolute;
	}

	.block-editor-block-preview__content > iframe {
		border: 0;
		max-width: initial;
	}
`;

export const TemplatePreviewName = styled.h3`
	color: var( --color-text );
	font-size: 16px;
	font-family: inherit;
	font-weight: bold;
	margin-bottom: 8px;
`;

export const TemplatePreviewDescription = styled.p`
	color: var( --color-text-subtle );
	font-size: 16px;
	margin: 0;
`;
