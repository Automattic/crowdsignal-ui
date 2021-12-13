/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import QuestionWrapper from '../question-wrapper';

const QuestionHeader = styled.h3`
	margin-top: 0;
	margin-bottom: 32px;

	> div {
		display: inline;
	}

	${ QuestionWrapper.className }.is-required &::after {
		display: 'inline';
		content: ' *';
	}
`;

export default QuestionHeader;
