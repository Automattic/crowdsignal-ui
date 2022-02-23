/**
 * External dependencies
 */
import { useState, useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
	ContentWrapper,
	CoreEmbed,
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
import { fetchProjectForm, submitProjectForm } from '@crowdsignal/rest-api';

const App = ( {
	projectCode,
	page = 0,
	preview,
	respondentId = '',
	startTime = 0,
	theme = 'leven',
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
		const query = {};

		if ( preview ) {
			setHostOption( 'https://api.crowdsignal.com', 'mode', 'cors' );
			setHostOption(
				'https://api.crowdsignal.com',
				'credentials',
				'include'
			);
			query.preview = true;
		}

		fetchProjectForm( projectCode, query )
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

		const query = preview ? { preview: true } : {};

		return (
			submitProjectForm( projectCode, form, query )
				.then( ( { data: json } ) => {
					if ( ! json || ! json.content ) {
						throw new Error( 'Empty response' );
					}

					setContent( json.content );
					setHasResponded( json.done );
					setResponseHash( json.r );
					setCurrentPage( parseInt( json.p, 10 ) );
				} )
				// eslint-disable-next-line no-console
				.catch( ( err ) => console.error( err ) )
		);
	};

	const baseURL =
		process.env.NODE_ENV === 'production'
			? 'https://app.crowdsignal.com'
			: '';
	useStylesheet( `${ baseURL }/ui/stable/theme-compatibility/base.css` );
	useStylesheet( `https://app.crowdsignal.com/themes/${ theme }/style.css` );
	useStylesheet(
		`${ baseURL }/ui/stable/theme-compatibility/${ theme }.css`
	);

	if ( ! content ) {
		return 'Wait...';
	}

	const renderContent = () =>
		renderBlocks( content, {
			'core/embed': CoreEmbed,
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
			className="crowdsignal-forms-form wp-embed-responsive"
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
