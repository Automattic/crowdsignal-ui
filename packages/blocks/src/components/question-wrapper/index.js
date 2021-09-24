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
	padding: 16px 24px;
	position: relative;
	text-align: left;
	width: 100%;
`;

const QuestionWrapper = ( { attributes, className, children } ) => (
	<StyledQuestionWrapper
		className={ className }
		style={ {
			...useColorStyles( attributes ),
			...useBorderStyles( attributes ),
		} }
	>
		{ children }
	</StyledQuestionWrapper>
);

export default QuestionWrapper;
