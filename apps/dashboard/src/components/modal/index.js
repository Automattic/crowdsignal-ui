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
	padding: 50px 50px 70px;
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
	max-height: 100%;
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
	grid-gap: 40px 24px;
	overflow-y: auto;
`;

export const ModalButton = styled.a`
	font-size: 14px;
	background-color: transparent;
	border: 1px solid var( --color-neutral-10 );
	border-radius: 2px;
	padding: 12px;
	text-align: center;
	color: var( --color-text );

	&:hover {
		color: var( --color-text );
	}
`;

const CloseButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background: none;
	cursor: pointer;
	padding: 0;
`;

export const ModalCloseButton = ( { onClick } ) => (
	<CloseButton onClick={ onClick }>
		<CloseArrow />
	</CloseButton>
);

ModalCloseButton.className = CloseButton;
