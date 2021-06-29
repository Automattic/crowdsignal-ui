/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

/**
 * Internal dependencies
 */
import { color } from '@crowdsignal/styles';

export const Form = styled.form`
	align-items: flex-end;
	display: flex;
	flex-direction: column;
	margin: 0;
	width: 100%;
`;

export const Header = styled.h3( ( { textColor } ) => {
	return css`
		color: ${ textColor || color( `text` ) };
		flex-grow: 1;
		font-size: 36px;
		font-weight: bold;
		margin: 0 0 32px;
		text-align: left;
		width: 100%;
	`;
} );

const inputError = css`
	border: 3px solid ${ color( `error` ) };
	box-sizing: border-box;
	content: '';
	display: block;
	position: absolute;
	top: -4px;
	left: -4px;
	bottom: -4px;
	right: -4px;
	z-index: -1;
`;

export const Input = styled.input( ( { error, textSize } ) => {
	return css`
		border: 1px solid ${ color( 'border' ) };
		box-sizing: border-box;
		display: flex;
		font-size: ${ textSize || '18px' };
		margin: 0 0 24px;
		outline: 0;
		padding: 16px;
		position: relative;
		width: 100%;
		z-index: 1;

		${ error && inputError };
	`;
} );

export const Button = styled.button( ( { buttonColor, buttonTextColor } ) => {
	return css`
		background-color: ${ buttonColor || color( 'primary' ) };
		border-color: ${ buttonColor || color( 'primary', 'dark' ) };
		border-radius: 5px;
		border-width: 1px 1px 2px;
		box-sizing: border-box;
		color: ${ buttonTextColor || color( 'text-inverted' ) };
		cursor: pointer;
		font-size: 14px;
		font-weight: bold;
		height: 45px;
		padding: 9px 30px;
		transition: background-color 0.1s ease-out, border-color 0.1s ease-out;
		white-space: nowrap;
		width: fit-content;
	`;
} );
