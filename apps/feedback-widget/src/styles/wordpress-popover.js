/**
 * External dependencies
 */
import { css } from '@emotion/core';

export const wpPopoverStyles = () => {
	return css`
		& .components-popover {
			position: fixed;
			z-index: 1000000;
			top: 0;
			left: 0;
			opacity: 0;
		}

		& .components-popover.is-expanded, .components-popover[data-x-axis][data-y-axis] {
			opacity: 1;
		}

		& .components-popover.is-expanded {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1000000 !important;
		}

		& .components-popover:not(.is-without-arrow) {
			margin-left: 2px;
		}

		& .components-popover:not(.is-without-arrow)::before {
			border: 8px solid #ccc;
		}

		& .components-popover:not(.is-without-arrow).is-alternate::before {
			border-color: #1e1e1e;
		}

		& .components-popover:not(.is-without-arrow)::after {
			border: 8px solid #fff;
		}

		& .components-popover:not(.is-without-arrow)::before, .components-popover:not(.is-without-arrow)::after {
			content: "";
			position: absolute;
			height: 0;
			width: 0;
			line-height: 0;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=top] {
			margin-top: -8px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=top]::before {
			bottom: -8px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=top]::after {
			bottom: -6px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=top]::before, .components-popover:not(.is-without-arrow)[data-y-axis=top]::after {
			border-bottom: none;
			border-left-color: transparent;
			border-right-color: transparent;
			border-top-style: solid;
			margin-left: -10px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=bottom] {
			margin-top: 8px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=bottom]::before {
			top: -8px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=bottom]::after {
			top: -6px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=bottom]::before, .components-popover:not(.is-without-arrow)[data-y-axis=bottom]::after {
			border-bottom-style: solid;
			border-left-color: transparent;
			border-right-color: transparent;
			border-top: none;
			margin-left: -10px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=middle][data-x-axis=left] {
			margin-left: -8px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=middle][data-x-axis=left]::before {
			right: -8px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=middle][data-x-axis=left]::after {
			right: -6px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=middle][data-x-axis=left]::before, .components-popover:not(.is-without-arrow)[data-y-axis=middle][data-x-axis=left]::after {
			border-bottom-color: transparent;
			border-left-style: solid;
			border-right: none;
			border-top-color: transparent;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=middle][data-x-axis=right] {
			margin-left: 8px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=middle][data-x-axis=right]::before {
			left: -8px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=middle][data-x-axis=right]::after {
			left: -6px;
		}

		& .components-popover:not(.is-without-arrow)[data-y-axis=middle][data-x-axis=right]::before, .components-popover:not(.is-without-arrow)[data-y-axis=middle][data-x-axis=right]::after {
			border-bottom-color: transparent;
			border-left: none;
			border-right-style: solid;
			border-top-color: transparent;
		}

		& .components-popover[data-y-axis=top] {
			bottom: 100%;
		}

		& .components-popover[data-y-axis=bottom] {
			top: 100%;
		}

		& .components-popover[data-y-axis=middle] {
			align-items: center;
			display: flex;
		}

		& .components-popover.is-from-top {
			margin-top: 12px;
		}

		& .components-popover.is-from-bottom {
			margin-top: -12px;
		}

		& .components-popover.is-from-left:not(.is-from-top):not(.is-from-bottom) {
			margin-left: 12px;
		}

		& .components-popover.is-from-right:not(.is-from-top):not(.is-from-bottom) {
			margin-right: 12px;
		}

		& .components-popover__content {
			height: 100%;
			background: #fff;
			border: 1px solid #ccc;
			box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
			border-radius: 2px;
		}

		& .is-alternate .components-popover__content {
			border: 1px solid #1e1e1e;
			box-shadow: none;
		}

		& .components-popover .components-popover__content {
			position: absolute;
			height: auto;
			overflow-y: auto;
		}

		& .components-popover.is-expanded .components-popover__content {
			position: static;
			height: calc(100% - 48px);
			overflow-y: visible;
			min-width: auto;
			border: none;
			border-top: 1px solid #1e1e1e;
		}

		& .components-popover[data-y-axis=top] .components-popover__content {
			bottom: 100%;
		}

		& .components-popover[data-x-axis=center] .components-popover__content {
			left: 50%;
			transform: translateX(-50%);
		}

		& .components-popover[data-x-axis=right] .components-popover__content {
			position: absolute;
			left: 100%;
		}

		& .components-popover:not([data-y-axis=middle])[data-x-axis=right] .components-popover__content {
			margin-left: -25px;
		}

		& .components-popover[data-x-axis=left] .components-popover__content {
			position: absolute;
			right: 100%;
		}

		& .components-popover:not([data-y-axis=middle])[data-x-axis=left] .components-popover__content {
			margin-right: -25px;
		}

		& .components-popover__header {
			align-items: center;
			background: #fff;
			display: flex;
			height: 48px;
			justify-content: space-between;
			padding: 0 8px 0 16px;
		}

		& .components-popover__header-title {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 100%;
		}

		& .components-popover__close.components-button {
			z-index: 5;
		}
	`;
};
