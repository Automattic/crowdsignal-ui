/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

/**
 * Internal dependencies
 */
import { color } from '@crowdsignal/styles';

export const Wrapper = styled.div( ( props ) => {
	return css`
		position: fixed;

		${ props.position };
	`;
} );