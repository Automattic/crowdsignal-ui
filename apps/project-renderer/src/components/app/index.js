/**
 * External dependencies
 */
import { useState, useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
	ContentWrapper,
	MultipleChoiceAnswer,
	MultipleChoiceQuestion,
	SubmitButton,
	TextInput,
	TextQuestion,
	renderBlocks,
} from '@crowdsignal/blocks';
import { Form } from '@crowdsignal/form';
import { useStylesheet } from '@crowdsignal/hooks';
import { setHostOption } from '@crowdsignal/http';
import { fetchProjectForm } from '@crowdsignal/rest-api';

/**
 * Style dependencies
 */
import './style.scss';

const App = ( {
	projectCode,
	page = 0,
	preview,
	respondentId = '',
	startTime = 0,
} ) => {
	const [ content, setContent ] = useState( [] );
	// eslint-disable-next-line
	const [ startDate, setStartDate ] = useState( startTime );
	// eslint-disable-next-line
	const [ currentPage, setCurrentPage ] = useState( page );
	// eslint-disable-next-line
	const [ responseHash, setResponseHash ] = useState( respondentId );

	const [ hasResponded, setHasResponded ] = useState( false );

	useEffect( () => {
		if ( preview ) {
			setHostOption( 'https://api.crowdsignal.com', 'mode', 'cors' );
			setHostOption(
				'https://api.crowdsignal.com',
				'credentials',
				'include'
			);
		}

		fetchProjectForm( projectCode, preview ? { preview: true } : {} )
			.then( ( res ) => {
				if ( ! res.data || ! res.data.content ) {
					throw new Error( 'Empty response' );
				}
				return setContent( res.data.content );
			} )
			.catch( ( err ) => {
				// should get some block here to show the error
				setContent( [] );
				// eslint-disable-next-line
				console.log( err );
			} );
	}, [ projectCode, preview ] );

	useStylesheet( 'https://app.crowdsignal.com/themes/leven/style.css' );
	useStylesheet( '/ui/stable/theme-compatibility/leven.min.css' );

	const handleSubmit = ( data ) => {
		if ( ! data ) {
			data = {};
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

				return res.json();
			} )
			.then( ( json ) => {
				if ( ! json || ! json.content ) {
					throw new Error( 'Empty response' );
				}

				setHasResponded( true );
				setContent( json.content );
				// all the setters should be called here: page, responseHash, content and startTime
			} )
			// eslint-disable-next-line no-console
			.catch( ( err ) => console.error( err ) );
	};

	if ( ! content ) {
		return 'Wait...';
	}

	const renderContent = () =>
		renderBlocks( content, {
			'crowdsignal-forms/multiple-choice-answer': MultipleChoiceAnswer,
			'crowdsignal-forms/multiple-choice-question': MultipleChoiceQuestion,
			'crowdsignal-forms/submit-button': SubmitButton,
			'crowdsignal-forms/text-input': TextInput,
			'crowdsignal-forms/text-question': TextQuestion,
		} );

	if ( hasResponded ) {
		return <ContentWrapper>{ renderContent() }</ContentWrapper>;
	}

	return (
		<Form
			className="crowdsignal-forms-form"
			name={ `f-${ projectCode }` }
			onSubmit={ handleSubmit }
		>
			<ContentWrapper className="crowdsignal-forms-form__content">
				{ renderContent() }
			</ContentWrapper>
		</Form>
	);
};

export default App;
