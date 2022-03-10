/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const ThemePreviewWrapper = styled.div`
	max-width: 360px;
	display: flex;
	flex-direction: column;
`;

export const ThemePreviewContent = styled.div`
	position: relative;
	display: flex;
`;

export const ThemePreviewOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba( 0, 0, 0, 0.3 );
	transition: opacity 0.3s ease;

	${ ThemePreviewWrapper }:not(.is-active) & {
		:hover {
			opacity: 1;
		}
	}
`;

export const ThemePreviewButton = styled.button`
	font-size: 14px;
	color: var( --color-surface );
	background: var( --color-primary-40 );
	border-radius: 4px;
	border: none;
	padding: 10px 16px;

	&:disabled {
		cursor: default;
	}
`;

export const ThemePreviewImg = styled.img`
	width: 100%;
`;

export const ThemePreviewFooter = styled.div`
	box-sizing: border-box;
	min-height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 0;

	${ ThemePreviewWrapper }.is-active & {
		background-color: var( --color-primary-40 );
		padding: 8px 16px;
	}
`;

export const ThemePreviewName = styled.span`
	color: var( --color-neutral-100 );
	font-size: 14px;
	letter-spacing: 0.2px;

	${ ThemePreviewWrapper }.is-active & {
		color: var( --color-surface );
		font-weight: 600;
	}
`;

export const ThemePreviewActive = styled( ThemePreviewName )`
	display: none;

	${ ThemePreviewWrapper }.is-active & {
		display: block;
	}
`;
