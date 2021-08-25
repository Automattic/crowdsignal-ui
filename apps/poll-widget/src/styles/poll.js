/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const PollWrapper = styled.div`
	border-style: solid;
	box-sizing: border-box;
	padding: 16px 24px;
	position: relative;
	text-align: left;
	width: 100%;

	& > .wp-block-button {
		margin-bottom: 16px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;
