/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { CloseArrow } from '@crowdsignal/icons';

export const ModalWrapper = styled.div`
	align-items: center;
	background-color: var( --color-backdrop );
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	padding: 100px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	z-index: 100010;
`;

export const ModalDialog = styled.div`
	position: relative;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
		Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
	line-height: normal;
	color: var( --color-text );
	background-color: var( --color-surface );
	box-shadow: 5px 5px 15px var( --color-shadow );
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 90%;
	max-width: 1600px;
	padding: 40px 60px;
`;

export const ModalNavigation = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;
	display: flex;
	justify-content: flex-end;
`;

export const ModalHeader = styled.h2`
	color: var( --color-text );
	font-family: 'Recoleta';
	font-size: 42px;
	font-weight: 400;
	letter-spacing: initial;
	margin: 0;
`;

export const ModalHeaderNote = styled.p`
	color: var( --color-text-subtle );
	line-height: normal;
	margin-bottom: 40px;

	&&& {
		font-size: 16px;
	}
`;

export const ModalTemplateGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 24px;
`;

const CloseButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background: none;
	cursor: pointer;
`;

export const ModalCloseButton = ( { onClick } ) => (
	<CloseButton onClick={ onClick }>
		<CloseArrow />
	</CloseButton>
);
