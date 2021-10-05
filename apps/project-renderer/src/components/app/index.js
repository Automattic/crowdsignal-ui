/**
 * External dependencies
 */
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

// TODO: this is just to make the render look good, selected theme should take care of this?
const ContentWrapper = styled.div`
	margin: 0 auto;
	max-width: 720px;
	padding: 20px;
`;

const App = ( { project } ) => {
	const content = project.content.published.pages[ 0 ];
	const projectId = project.id;

	// eslint-disable-next-line no-console
	const handleSubmit = ( data ) => console.log( data );

	return (
		<div className="app">
			<ContentWrapper>
				<Form name={ `f-${ projectId }` } onSubmit={ handleSubmit }>
					{ renderBlocks( content, {
						'crowdsignal-forms/answer': Answer,
						'crowdsignal-forms/free-text': FreeText,
						'crowdsignal-forms/multiple-choice': MultipleChoice,
						'crowdsignal-forms/poll': Poll,
						'crowdsignal-forms/poll-answer': PollAnswer,
						'crowdsignal-forms/submit-button': SubmitButton,
					} ) }
				</Form>
			</ContentWrapper>
		</div>
	);
};

export default App;
