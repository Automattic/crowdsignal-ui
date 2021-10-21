/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import {
	MultipleChoiceAnswer,
	MultipleChoiceQuestion,
	Poll,
	PollAnswer,
	SubmitButton,
	TextQuestion,
	renderBlocks,
} from '@crowdsignal/blocks';
import { Form } from '@crowdsignal/form';
import { useStylesheet } from '@crowdsignal/hooks';

// TODO: this is just to make the render look good, selected theme should take care of this?
const ContentWrapper = styled.div`
	margin: 0 auto;
	max-width: 720px;
	padding: 20px;
`;

const App = ( { project, page = 0, responseHash = '', startDate = 0 } ) => {
	// page on backend starts at ID = 1, try to substract or default to 0
	page = get( project, [ 'content', 'published', 'pages', page - 1 ] )
		? page - 1
		: 0;
	const content = project.content.published.pages[ page ];
	const projectId = project.id;

	useStylesheet(
		'https://app.crowdsignal.com/themes/leven/style-editor.css'
	);

	const handleSubmit = ( data ) => {
		if ( ! data ) {
			return;
		}
		const form = new window.FormData();
		form.append( 'p', page );
		form.append( 'r', responseHash );
		form.append( 'startTime', startDate || parseInt( Date.now() / 1000 ) );
		Object.keys( data ).forEach( ( key ) =>
			form.append( key, data[ key ] )
		);

		window
			.fetch(
				`https://api.crowdsignal.com/v4/projects/${ projectId }/responses`,
				{
					method: 'POST',
					body: form,
				}
			)
			.then( ( res ) => {
				if ( ! res.ok ) {
					throw new Error( res.status );
				}
				return res.json();
			} )
			// eslint-disable-next-line no-console
			.catch( ( err ) => console.error( err ) )
			// eslint-disable-next-line no-console
			.then( ( json ) => console.log( json ) );
	};

	return (
		<div className="app">
			<ContentWrapper>
				<Form name={ `f-${ projectId }` } onSubmit={ handleSubmit }>
					{ renderBlocks( content, {
						'crowdsignal-forms/multiple-choice-answer': MultipleChoiceAnswer,
						'crowdsignal-forms/multiple-choice-question': MultipleChoiceQuestion,
						'crowdsignal-forms/poll': Poll,
						'crowdsignal-forms/poll-answer': PollAnswer,
						'crowdsignal-forms/submit-button': SubmitButton,
						'crowdsignal-forms/text-question': TextQuestion,
					} ) }
				</Form>
			</ContentWrapper>
		</div>
	);
};

export default App;
