/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import {
	FreeText,
	MultipleChoice,
	Poll,
	PollAnswer,
	renderBlocks,
} from '@crowdsignal/blocks';

const ContentWrapper = styled.div`
	margin: 0 auto;
	max-width: 720px;
	padding: 20px;
`;

const FormPreview = ( { content } ) => {
	if ( ! content ) {
		return null;
	}

	return (
		<ContentWrapper>
			{ renderBlocks( content, {
				'crowdsignal-forms/poll': Poll,
				'crowdsignal-forms/poll-answer': PollAnswer,
				'crowdsignal-forms/free-text': FreeText,
				'crowdsignal-forms/multiple-choice': MultipleChoice,
			} ) }
		</ContentWrapper>
	);
};

export default FormPreview;
