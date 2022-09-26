/**
 * External dependencies
 */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { PageNavigationWrapper } from './page-navigation';

export const editorGlobalStyles = css`
	html.interface-interface-skeleton__html-container {
		width: 100% !important;
	}

	html.block-editor-block-preview__content-iframe
		.is-root-container.block-editor-block-list__layout {
		// Value chosen to match
		// https://github.com/WordPress/gutenberg/blob/200a5d700e19d9f5978877cd299d582b1480a8d2/packages/block-editor/src/components/block-preview/auto.js#L20
		max-height: 2000px;
	}
`;

export const EditorLayout = styled.div`
	--wp-admin-theme-color: var( --color-primary-50 );
	--wp-admin-theme-color-darker-10: var( --color-primary-60 );
	--wp-admin-theme-color-darker-20: var( --color-primary-70 );

	flex: 1;
	position: relative;
`;

export const EditorWrapper = styled.div`
	background-color: transparent;
	border: 0;
	color: var( --color-text );
	flex: 1;
	max-height: 100%;
	position: absolute;
	bottom: 0;
	left: 88px;
	right: 0;
	top: 65px;
	transition: left 0.3s, width 0.3s;
	width: calc( 100% - 88px );

	${ PageNavigationWrapper }.is-expanded + div > & {
		left: 180px;
		width: calc( 100% - 180px );
	}

	&.is-tablet-preview,
	&.is-mobile-preview,
	&.is-popup-preview,
	&.is-embed-card-preview {
		.edit-post-visual-editor__content-area {
			background-color: darkgrey;

			.is-tablet-preview {
				margin: auto !important;
			}
		}
	}

	.interface-interface-skeleton__content {
		> .components-notice-list .components-notice {
			margin: 0;
		}

		> div:not( [class] ) {
			height: 100%;
		}
	}

	.edit-post-layout.interface-interface-skeleton {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
	}

	.edit-post-visual-editor {
		background-color: transparent;
		position: relative;
		height: 100%;
	}

	.edit-post-visual-editor__content-area .is-desktop-preview {
		background-color: transparent !important;
	}

	.edit-post-header__settings > .components-button {
		margin-right: 12px;

		&:last-child {
			margin-right: 0;
		}
	}

	.block-editor-block-preview__content > iframe {
		border: 0;
		max-width: initial;
	}

	.components-external-link {
		display: flex;
		align-items: center;

		&__text {
			text-overflow: ellipsis;
			max-width: 100%;
			box-sizing: border-box;
			overflow: hidden;
			display: inline-block;
			white-space: nowrap;
		}

		&__icon {
			margin: 0;
		}
	}

	.components-notice > .components-button {
		align-self: inherit;
	}

	.components-notice__actions {
		display: inline-flex;
		margin-left: 16px;

		.components-button {
			margin-top: 0;
			margin-bottom: 0;
		}
	}

	.components-panel__header.edit-post-sidebar__panel-tabs ul {
		padding: 0;
	}

	.components-panel__body-title {
		.components-panel__body-toggle {
			font-weight: 600;
		}
	}

	.iso-sidebar {
		.project-visibility,
		.project-created-date,
		.project-permalink,
		.project-updated-date {
			span {
				&:first-child {
					margin-right: 5px;
				}

				&:last-child {
					white-space: nowrap;
				}
			}
		}

		a {
			color: var( --color-primary-50 );
		}

		.theme-panel {
			&__actions {
				display: flex;
				justify-content: space-between;
			}
		}

		.components-panel__row.with-gap {
			gap: 16px;
		}
	}

	.components-popover__content {
		.editor__project-dropdown-header {
			display: flex;
			-webkit-box-align: center;
			align-items: center;
			flex-direction: row;
			-webkit-box-pack: center;
			justify-content: center;
			width: 100%;
			padding-bottom: 5%;
			h2 {
				line-height: 1.2;
				font-size: calc( 13px );
				font-weight: 600;
				width: 80%;
			}
		}
	}
	.editor__project-visibility-popover .components-popover__content {
		padding: 8px;
		width: 238px;
	}

	.edit-project-slug span {
		display: block;
		flex-shrink: 0;
		width: 45%;
	}

	.project-permalink-dropdown {
		width: 55%;
		.project-permalink-button {
			height: auto;
			word-break: break-word;
			text-align: left;
			white-space: normal;
		}
	}

	.editor__project-permalink-edit {
		padding: 8px;
		max-width: 300px;
		.components-popover__content {
			width: unset;
		}
		.project-permalink-current-url {
			word-break: break-word;
		}
	}
`;

export const ToggleControlHint = styled.span`
	display: block;
	font-size: 12px;
	font-weight: 400;
	margin-left: 48px;
	margin-top: -4px;
	color: var( --color-neutral-40 );
`;
