/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

/**
 * Internal dependencies
 */

export const Header = styled.h3`
	color: ${ props => props.textColor },
	flex-grow: 1;
	margin: 0 0 32px;
`;

const inputError = css`
	border: 3px solid #ff0000;
	box-sizing: border-box;
	content: "";
	display: block;
	position: absolute;
	top: -4px;
	left: -4px;
	bottom: -4px;
	right: -4px;
	z-index: -1;
`;

export const FeedbackInput = styled.input( ( {
	error,
	textSize,
} ) => {
	return css`
		box-sizing: border-box;
		display: flex;
		font-size: ${ textSize },
		margin: 16px 0 0;
		position: relative;
		width: 100%;
		z-index: 1;

		${ error && inputError };
	`;
} );

export const SubmitButton = styled.button( ( {
	buttonColor,
	buttonTextColor,
} ) => {
	return css`
		background-color: ${ buttonColor };
		color: ${ buttonTextColor };
	`;
} );
