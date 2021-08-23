/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const EditorWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 0;
	width: 100%;
`;

export const PollWrapper = styled.div`
	border-style: solid;
	box-sizing: border-box;
	padding: 16px 24px;
	position: relative;
	text-align: left;
	width: 100%;

	.block-editor-block-list__layout > * {
		margin-bottom: 16px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;
