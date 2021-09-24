/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
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
import { STORE_NAME } from '../../data';

const ContentWrapper = styled.div`
	margin: 0 auto;
	max-width: 720px;
	padding: 20px;
`;

const FormPreview = ( { projectId } ) => {
	const project = useSelect( ( select ) =>
		select( STORE_NAME ).getProject( projectId )
	);

	if ( ! project?.content?.draft ) {
		return null;
	}

	return (
		<ContentWrapper>
			{ renderBlocks( project.content.draft.pages[ 0 ], {
				'crowdsignal-forms/poll': Poll,
				'crowdsignal-forms/poll-answer': PollAnswer,
				'crowdsignal-forms/free-text': FreeText,
				'crowdsignal-forms/multiple-choice': MultipleChoice,
			} ) }
		</ContentWrapper>
	);
};

export default FormPreview;
