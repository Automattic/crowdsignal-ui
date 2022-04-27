/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const Wrapper = styled.div`
	font-size: 0.7em;
	background-color: var( --color-surface );
	border-color: var( --color-border );
	border-radius: 5px;
	border-style: solid;
	border-width: 1px;
	box-shadow: 1px 1px 3px 0 var( --color-shadow );
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 4px;
	position: relative;
	width: fit-content;
	z-index: 100;

	&::before,
	&::after {
		border-style: solid;
		content: '';
		display: block;
		height: 0;
		position: absolute;
		width: 0;
		z-index: 1;
	}

	&::before {
		border-color: var( --color-border );
		border-left-color: transparent;
		border-right-color: transparent;
		border-top: none;
		border-width: 10px;
		right: 7px;
		top: -10px;
	}

	&::after {
		border-color: var( --color-surface );
		border-left-color: transparent;
		border-right-color: transparent;
		border-top: none;
		border-width: 9px;
		right: 8px;
		top: -8px;
	}
`;
