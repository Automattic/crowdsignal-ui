/**
 * External dependencies
 */
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import styled from '@emotion/styled';

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
import { fetchProjectForm } from '@crowdsignal/rest-api';

// TODO: this is just to make the render look good, selected theme should take care of this?
const ContentWrapper = styled.div`
	margin: 0 auto;
	max-width: 720px;
	padding: 20px;
`;

const App = ( { projectCode, page = 0, respondentId = '', startTime = 0 } ) => {
	const [ content, setContent ] = useState( [] );
	// eslint-disable-next-line
	const [ startDate, setStartDate ] = useState( startTime );
	// eslint-disable-next-line
	const [ currentPage, setCurrentPage ] = useState( page );
	// eslint-disable-next-line
	const [ responseHash, setResponseHash ] = useState( respondentId );

	const [ hasResponded, setHasResponded ] = useState( false );

	useEffect( () => {
		fetchProjectForm( projectCode )
			.then( ( res ) => {
				return setContent( res.data );
			} )
			.catch( ( err ) => {
				// should get some block here to show the error
				setContent( [] );
				// eslint-disable-next-line
				console.log( err );
			} );
	}, [ projectCode ] );

	useStylesheet( 'https://app.crowdsignal.com/themes/leven/style.css' );

	const handleSubmit = ( data ) => {
		if ( ! data ) {
			return;
		}

		const form = new window.FormData();
		form.append( 'p', currentPage );
		form.append( 'r', responseHash );
		form.append( 'startTime', startDate || parseInt( Date.now() / 1000 ) );
		Object.keys( data ).forEach( ( key ) =>
			form.append( key, data[ key ] )
		);

		window
			.fetch(
				`https://api.crowdsignal.com/v4/projects/${ projectCode }/form`,
				{
					method: 'POST',
					body: form,
				}
			)
			.then( ( res ) => {
				if ( ! res.ok ) {
					throw new Error( res.status );
				}

				setHasResponded( true );
				return res.json();
			} )
			// eslint-disable-next-line no-console
			.catch( ( err ) => console.error( err ) )
			.then( ( json ) => {
				// eslint-disable-next-line no-console
				console.log( json );
				// all the setters should be called here: page, responseHash, content and startTime
			} );
	};

	if ( ! content ) {
		return 'Wait...';
	}

	return (
		<div className="app">
			<ContentWrapper>
				{ ! hasResponded && (
					<Form
						name={ `f-${ projectCode }` }
						onSubmit={ handleSubmit }
					>
						{ renderBlocks( content, {
							'crowdsignal-forms/multiple-choice-answer': MultipleChoiceAnswer,
							'crowdsignal-forms/multiple-choice-question': MultipleChoiceQuestion,
							'crowdsignal-forms/poll': Poll,
							'crowdsignal-forms/poll-answer': PollAnswer,
							'crowdsignal-forms/submit-button': SubmitButton,
							'crowdsignal-forms/text-question': TextQuestion,
						} ) }
					</Form>
				) }

				{ hasResponded && (
					<h3>
						{ __(
							'Thank you for your response!',
							'project-renderer'
						) }
					</h3>
				) }
			</ContentWrapper>
		</div>
	);
};

export default App;
