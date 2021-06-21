/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const InputWrapper = styled.div( ( { error, warning } ) => {
	let borderColor = color( 'border' );

	if ( error ) {
		borderColor = color( 'error' );
	}

	if ( warning ) {
		borderColor = color( 'warning' );
	}

	return css`
		border: 1px solid ${ borderColor };
		border-radius: 5px;
		box-shadow: none;
		box-sizing: border-box;
		display: flex;
		font-size: 12px;
		height: 32px;
		line-height: 30px;
		margin: 0;
		padding: 0 8px;
		width: 100%;
	`;
} );

const InputPrefix = styled.span`
	color: ${ color( 'text-subtle' ) };
`;

const Input = styled.input`
	border: 0;
	box-shadow: none;
	box-sizing: border-box;
	flex: 1;
	height: 30px;
	line-height: 30px;
	margin: 0;
	outline: 0;
	padding: 0;
`;
