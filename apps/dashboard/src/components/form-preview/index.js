/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import {
	Answer,
	FreeText,
	MultipleChoice,
	Poll,
	PollAnswer,
	SubmitButton,
	renderBlocks,
} from '@crowdsignal/blocks';
import { Form } from '@crowdsignal/form';
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

	// eslint-disable-next-line no-console
	const handleSubmit = ( data ) => console.log( data );

	return (
		<ContentWrapper>
			<Form name={ `f-${ projectId }` } onSubmit={ handleSubmit }>
				{ renderBlocks( project.content.draft.pages[ 0 ], {
					'crowdsignal-forms/answer': Answer,
					'crowdsignal-forms/free-text': FreeText,
					'crowdsignal-forms/multiple-choice': MultipleChoice,
					'crowdsignal-forms/poll': Poll,
					'crowdsignal-forms/poll-answer': PollAnswer,
					'crowdsignal-forms/submit-button': SubmitButton,
				} ) }
			</Form>
		</ContentWrapper>
	);
};

export default FormPreview;
