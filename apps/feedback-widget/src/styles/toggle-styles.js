/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

/**
 * Internal dependencies
 */
import { color } from '@crowdsignal/styles';

const verticalToggleWrapper = ( { align } ) => {
	return css`
		transform-origin: top ${ align === 'right' ? 'left' : 'right' };
		transform: rotateZ( 270deg )
			${ align === 'right' ? 'translateX(-100%)' : 'translateY(-100%)' };
	`;
};

export const ToggleWrapper = styled.div`
	margin: 0;

	${ ( props ) => props.isVertical && verticalToggleWrapper( props ) };
`;

// is it the icon?
const activeToggle = css`
	padding-left: 12px;
`;

export const Toggle = styled.button(
	( { backgroundColor, isOpen, textColor } ) => {
		return css`
			align-items: center;
			border: 0;
			cursor: pointer;
			background-color: ${ backgroundColor || color( 'secondary' ) };
			color: ${ textColor || color( 'text-inverted' ) };
			display: flex;
			font-size: 16px;
			font-weight: 600;
			line-height: 1.5;
			padding: 10px 16px;
			white-space: nowrap;

			> svg {
				fill: currentColor;
			}

			${ isOpen && activeToggle() };
		`;
	}
);
