/**
 * External dependencies
 */
import { useState, useEffect } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import {
	ContentWrapper,
	CoreEmbed,
	MultipleChoiceAnswer,
	MultipleChoiceQuestion,
	RatingScaleAnswer,
	RatingScaleQuestion,
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
} ) => {
	const [ content, setContent ] = useState( [] );
	const [ theme, setTheme ] = useState( null );
	const [ startDate, setStartDate ] = useState( startTime );
	const [ currentPage, setCurrentPage ] = useState( page );
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

		const query = preview && { preview };

		fetchProjectForm( projectCode, query )
			.then( ( res ) => {
				if ( ! res.data || ! res.data.content ) {
					throw new Error( 'Empty response' );
				}

				setTheme( res.data.theme );
				setStartDate(
					res.data.startTime || parseInt( Date.now() / 1000, 10 )
				);
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
		form.append( 'startTime', startDate );
		Object.keys( data ).forEach( ( key ) => {
			if ( Array.isArray( data[ key ] ) ) {
				data[ key ].forEach( ( value ) => form.append( key, value ) );
			} else {
				form.append( key, data[ key ] );
			}
		} );

		const query = preview && { preview };

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
			'crowdsignal-forms/rating-scale-answer': RatingScaleAnswer,
			'crowdsignal-forms/rating-scale-question': RatingScaleQuestion,
			'crowdsignal-forms/submit-button': SubmitButton,
			'crowdsignal-forms/text-input': TextInput,
			'crowdsignal-forms/text-question': TextQuestion,
		} );

	const contentClasses = classnames(
		'wp-embed-responsive',
		'crowdsignal-content',
		{
			'crowdsignal-forms-form__content': ! hasResponded,
		}
	);

	if ( hasResponded ) {
		return (
			<ContentWrapper className={ contentClasses }>
				{ renderContent() }
			</ContentWrapper>
		);
	}

	return (
		<Form
			className="crowdsignal-forms-form"
			name={ `f-${ projectCode }` }
			onSubmit={ handleSubmit }
		>
			<ContentWrapper className={ contentClasses }>
				{ renderContent() }
			</ContentWrapper>
		</Form>
	);
};

export default App;
