/**
 * External dependencies
 */
import { keyframes } from '@emotion/core';

export const popAnimation = keyframes`
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
`;

export const spinAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;
