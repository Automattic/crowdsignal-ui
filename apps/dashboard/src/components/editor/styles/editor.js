/**
 * External dependencies
 */
import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const editorGlobalStyles = css`
	html.interface-interface-skeleton__html-container {
		width: 100% !important;
	}
`;

export const EditorLayout = styled.div`
	flex: 1;
	position: relative;
`;

export const EditorWrapper = styled.div`
	--wp-admin-theme-color: var( --color-neutral-80 );
	--wp-admin-theme-color-darker-10: var( --color-neutral-90 );
	--wp-admin-theme-color-darker-20: var( --color-neutral-100 );

	background-color: transparent;
	border: 0;
	color: var( --color-text );
	flex: 1;
	max-height: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	top: 65px;
	width: calc( 100% - 180px );

	.interface-interface-skeleton__content
		> .components-notice-list
		.components-notice {
		margin: 0;
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
	}

	.editor__project-visibility-popover .components-popover__content {
		padding: 8px;
		width: 250px;
	}
`;
