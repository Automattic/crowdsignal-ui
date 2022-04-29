/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const EditorGuideWrapper = styled.div`
	&&& {
		max-width: 345px;
		position: absolute;
		bottom: 20px;
		left: 20px;
		max-height: 475px;
	}

	.components-guide__page-control {
		.components-button {
			border: 0 !important;
			box-shadow: none !important;
			outline: 0 !important;
		}

		li[aria-current='step'] svg circle {
			fill: var( --color-primary );
		}
	}

	.components-guide__footer {
		height: 40px;

		.components-button {
			border: 0 !important;
			box-shadow: none !important;
			outline: 0 !important;

			&:hover {
				border: 0;
				color: var( --color-primary );
			}
		}

		.components-button.components-guide__forward-button,
		.components-button.components-guide__finish-button {
			background-color: var( --color-primary );
			box-shadow: 0;
			color: var( --color-text-inverted );
			display: inline-block;
			height: 40px;
			padding: 12px 16px;
			text-align: center;
			width: 80px;

			&:hover {
				background-color: var( --color-primary-60 );
				color: var( --color-text-inverted );
				text-decoration: none;
			}
		}
	}
`;

export const EditorGuidePageContent = styled.div`
	padding: 32px;
`;

export const EditorGuideHeading = styled.h2`
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	margin-bottom: 4px;
`;

export const EditorGuideText = styled.p`
	font-size: 14px;
	line-height: 24px;
`;
