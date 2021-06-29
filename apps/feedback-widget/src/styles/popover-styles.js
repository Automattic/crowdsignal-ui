/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

/**
 * Internal dependencies
 */
import { breakpoint, color } from '@crowdsignal/styles';

// needs to go into the main one!!!
export const PopoverWrapper = styled.div`
	display: flex;
	position: fixed;
	z-index: 9999999;

	${ ( props ) => props.position };

	& .components-popover .components-popover__content {
		backgroundcolor: transparent;
	}
`;

export const Popover = styled.div(
	( { backgroundColor, buttonColor, height, textColor } ) => {
		return css`
			background-color: ${ backgroundColor || color( 'surface' ) };
			border-top: 10px solid ${ buttonColor || color( 'secondary' ) };
			border-radius: 0 0 10px 10px;
			box-shadow: 1px 1px 7px ${ color( 'shadow' ) };
			box-sizing: border-box;
			color: ${ textColor || color( 'text' ) };
			display: flex;
			flex-direction: column;
			height: ${ height || 'auto' };
			max-height: 480px;
			outline: 0;
			overflow-y: scroll;
			padding: 24px;
			width: 240px;
			text-align: left;
			z-index: 100;

			${ breakpoint( '>360px' ) } {
				max-height: 640px;
				width: 300px;
			}

			${ breakpoint( '>480px' ) } {
				max-height: auto;
				width: 380px;
			}
		`;
	}
);
