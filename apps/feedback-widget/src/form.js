/**
 * External dependencies
 */
import { RawHTML, useState } from '@wordpress/element';
import { isEmpty } from 'lodash';

/**
 * Internal dependencies
 */
import { updateFeedbackResponse } from '@crowdsignal/rest-api';

/**
 * Style dependencies
 */
import { Form, Input, InputWrapper, Header, Button } from './styles/form-styles.js';

const FeedbackForm = ( {
	onSubmit,
	settings,
	surveyId,
} ) => {
	const [ errors, setErrors ] = useState( {} );
	const [ submitting, setSubmitting ] = useState( false );
	const [ formData, setFormData ] = useState( {
		feedback: '',
		email: '',
	} );

	const handleChange = ( field ) =>
		( event ) => setFormData( {
			...formData,
			[ field ]: event.target.value,
		} );

	const handleSubmit = async ( event ) => {
		event.preventDefault();

		setSubmitting( true );

		const validation = {
			feedback: isEmpty( formData.feedback ),
			email: ! isEmpty( formData.email )
				? ! formData.email.match( /^\w+@\w+\.\w+$/ )
				: settings.emailRequired,
		};

		setErrors( validation );

		if ( validation.feedback || validation.email ) {
			setSubmitting( false );
			return;
		}

		try {
			await updateFeedbackResponse( surveyId, formData );
			onSubmit();
		} finally {
			setSubmitting( false );
		}
	};

	const { text, style } = settings;

	return (
		<Form onSubmit={ handleSubmit }>
			<Header>
				<RawHTML>{ text.header }</RawHTML>
			</Header>

			<InputWrapper error={ errors.feedback }>
				<Input
					as="textarea"
					placeholder={ text.feedback }
					rows={ 6 }
					value={ formData.feedback }
					onChange={ handleChange( 'feedback' ) }
					{ ...style }
				/>
			</InputWrapper>

			<InputWrapper error={ errors.email }>
				<Input
					placeholder={ text.email }
					value={ formData.email }
					onChange={ handleChange( 'email' ) }
					{ ...style }
				/>
			</InputWrapper>

			<Button primary type="submit" disabled={ submitting }>
				{ text.submitButton }
			</Button>
		</Form>
	);
};

export default FeedbackForm;
