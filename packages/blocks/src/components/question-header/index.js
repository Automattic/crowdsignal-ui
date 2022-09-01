/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import QuestionWrapper from '../question-wrapper';
import { breakpoint } from '@crowdsignal/styles';

const QuestionHeader = styled.h3`
	margin-top: 0;
	margin-bottom: 20px;
	font-size: 1.5em;

	> div {
		display: inline-flex;
		align-items: center;
		white-space: break-spaces;
	}

	img {
		max-width: 24px;
	}

	${ QuestionWrapper.className }.is-required &::after {
		display: inline;
		content: ' *';
	}

	${ breakpoint( '>480px' ) } {
		font-size: 1.8em;
		margin-bottom: 32px;

		img {
			max-width: 32px;
		}
	}
`;

export default QuestionHeader;
