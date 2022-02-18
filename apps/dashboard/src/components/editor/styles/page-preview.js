/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const PagePreviewWrapper = styled.div`
	display: flex;
	margin: 0;
	padding: 0;
	position: relative;
	width: 100%;

	&:hover {
		background-color: var( --color-neutral-0 );
	}
`;

export const PagePreviewButton = styled.button`
	align-items: center;
	background: transparent;
	border: 0;
	box-sizing: border-box;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	height: 56px;
	justify-content: flex-start;
	padding: 8px 32px;
	transition: height 0.3s, padding-right 0.3s;
	width: 100%;

	${ PagePreviewWrapper }.is-expanded & {
		height: 96px;
		padding-right: 123px;
	}
`;

export const PagePreviewFrame = styled.div`
	background-color: var( --color-surface );
	background-color: var( --color-page-background );
	border: 1px solid var( --color-border );
	border-radius: 2px;
	box-sizing: border-box;
	height: 80px;
	position: absolute;
	right: 16px;
	top: 8px;
	overflow: hidden;
	transition: opacity 0.3s, transform 0.3s;
	width: 100px;

	&.exiting,
	&.exited {
		opacity: 0;
		transform: scale( 0.3 );
	}

	&.entering,
	&.entered {
		opacity: 1;
	}

	${ PagePreviewWrapper }.is-active & {
		box-shadow: 0 0 0 2px var( --color-primary );
	}

	.block-editor-block-preview__content > iframe {
		border: 0;
		max-width: initial;
	}
`;

export const PagePreviewPageNumber = styled.span`
	color: var( --color-text-subtle );
	display: flex;
	flex: 1;
	font-size: 11px;
	font-weight: bold;
	justify-content: center;
	transition: flex 0.3s;

	${ PagePreviewWrapper }.is-active & {
		color: var( --color-primary );
	}

	${ PagePreviewWrapper }.is-dragging & {
		opacity: 0;
	}

	${ PagePreviewWrapper }.is-expanded & {
		flex: 0;
	}
`;

export const PagePreviewMoreMenu = styled.div`
	align-items: center;
	background: var( --color-surface );
	border: 1px solid var( --color-text );
	border-radius: 2px;
	height: 36px;
	justify-content: center;
	padding: 0;
	position: absolute;
	bottom: 15px;
	right: 23px;
	width: 36px;

	&& {
		display: none;
	}

	${ PagePreviewWrapper }:hover && {
		display: flex;
	}

	&.interface-more-menu-dropdown .components-button {
		width: 100%;
	}
`;
