/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const pageStyles = css`
	html {
		display: table;
		margin: 0;
		height: 100%;
		padding: 0;
		width: 100%;
	}

	body {
		display: table-cell;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	#crowdsignal-dashboard {
		display: flex;
		flex-direction: column;
		height: 100%;
		height: 100vh;
		width: 100%;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;
