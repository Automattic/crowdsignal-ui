/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const verticalToggleWrapper = ( { align } ) => {
	return css`
		margin-top: -50%;
		transform-origin: top ${ align === 'right' ? 'left' : 'right' };
		transform: rotateZ(270deg) ${ align === 'right' ? 'translateX(-100%)' : 'translateY(-100%)' };
	`;
};

export const ToggleWrapper = styled.div`
	margin: 0;

	${ props => props.isVertical && verticalToggleWrapper( props ) };
`;

// is it the icon?
const activeToggle = css`
	padding-left: 12px;
`;

export const Toggle = styled.button`
	align-items: center;
	box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	background-color: ${ props => props.backgroundColor };
	color: ${ props => props.textColor };
	display: flex;
	font-size: 16px;
	line-height: 1.5;
	padding: 10px 16px;
	white-space: nowrap;

	> svg {
		fill: currentColor;
	}

	${ props => props.isOpen && activeToggle( props ) };
`;
