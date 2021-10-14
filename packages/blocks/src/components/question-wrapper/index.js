/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { useBorderStyles, useColorStyles } from '@crowdsignal/styles';

const StyledQuestionWrapper = styled.div`
	border-style: solid;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	padding: 24px;
	position: relative;
	text-align: left;
	width: 100%;
`;

const Content = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
	width: 100%;

	& > *:not( .block-editor-inner-blocks ),
	.block-editor-block-list__layout > * {
		margin-bottom: 16px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

const QuestionWrapper = ( { attributes, children, style = {}, ...props } ) => (
	<StyledQuestionWrapper
		style={ {
			...useColorStyles( attributes ),
			...useBorderStyles( attributes ),
			...style,
		} }
		{ ...props }
	>
		{ children }
	</StyledQuestionWrapper>
);

QuestionWrapper.className = StyledQuestionWrapper;
QuestionWrapper.Content = Content;

export default QuestionWrapper;
