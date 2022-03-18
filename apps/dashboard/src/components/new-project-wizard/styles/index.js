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
`;
