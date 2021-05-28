/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

/**
 * Internal dependencies
 */
// import { COLORS } from 'where?';


const breakpoint = ( size ) => {
	const direction = size.slice( 0, 1 );
	const screenSize = size.slice( 1 );

	const minMax = direction === '>' ? 'min' : 'max';

	return `@media screen and (${ minMax }-width: ${ screenSize })`;
};

// needs to go into the main one!!!
export const PopoverWrapper = styled.div`
	display: flex;
	position: fixed;
	z-index: 9999999;

	${ props => props.position };

	/* & .components-popover {
	// 	position: fixed;
	// }
	*/

	& .components-popover__content {
		backgroundColor: transparent;

	}
`;

export const Popover = styled.div( ( {
	backgroundColor = '#fff',
	buttonColor = '#c9356e',
	height = 'auto',
	textColor = '#101517',
} ) => {
	return css`
		background-color: ${ backgroundColor };
		border-top: 10px solid ${ buttonColor };
		box-shadow: 1px 1px 7px rgba(0, 0, 0, .3);
		box-sizing: border-box;
		color: ${ textColor };
		display: flex;
		flex-diraction: column;
		height: ${ height };
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
} );
