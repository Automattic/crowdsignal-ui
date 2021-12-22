/**
 * External dependencies
 */
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const spinAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const Spinner = styled.span`
	width: 1.5em;
	height: 1.5em;
	border-radius: 50%;
	position: relative;
	border: 0.2em solid rgba( 255, 255, 255, 0.2 );
	border-left-color: #ffffff;
	animation: ${ spinAnimation } 1.1s infinite linear;
`;

export default Spinner;
