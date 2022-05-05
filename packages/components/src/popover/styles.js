/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div( ( props ) => {
	return css`
		position: fixed;
		z-index: 1000;

		${ props.position };
	`;
} );
