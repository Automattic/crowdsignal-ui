/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const DialogOverlay = styled.div`
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
	z-index: 1000000;
`;

export const DialogWrapper = styled.div`
	background-color: var( --color-surface );
	box-shadow: 5px 5px 15px var( --color-shadow );
	box-sizing: border-box;
	color: var( --color-text );
	display: flex;
	flex-direction: column;
	position: relative;
`;
