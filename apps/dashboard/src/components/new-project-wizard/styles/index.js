/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { ModalDialog } from '../../modal';

/**
 * Project Wizard styled components were turned into Modal generic components
 * Whenever we need specific styles, we can extend a Modal component and override the styles
 */
export const ProjectWizardDialog = styled( ModalDialog )`
	padding: 72px 60px;
	flex-direction: row;
	align-items: flex-end;
	height: 100%;
`;

export const ProjectWizardContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const BackButton = styled.a`
	color: var( --color-text-subtle );
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
		Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
	font-size: 14px;
	padding: 16px;
	position: absolute;
	top: 10px;
	right: 10px;
	text-decoration: none;

	&:hover {
		color: var( --color-text-subtle );
	}
`;
