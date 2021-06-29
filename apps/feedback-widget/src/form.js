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
import { Form, Input, Header, Button } from './styles/form-styles.js';

const FeedbackForm = ( { onSubmit, settings, surveyId } ) => {
	const [ errors, setErrors ] = useState( {} );
	const [ submitting, setSubmitting ] = useState( false );
	const [ formData, setFormData ] = useState( {
		feedback: '',
		email: '',
	} );

	const handleChange = ( field ) => ( event ) =>
		setFormData( {
			...formData,
			[ field ]: event.target.value,
		} );

	const handleSubmit = async ( event ) => {
		event.preventDefault();

		setSubmitting( true );

		const validation = {
			feedback: isEmpty( formData.feedback ),
			email:
				settings.requireEmail &&
				( isEmpty( formData.email ) ||
					formData.email.match( /^\s+@\s+$/ ) ),
		};
		setErrors( validation );

		if ( validation.feedback || validation.email ) {
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

			<Input
				as="textarea"
				error={ errors.feedback }
				placeholder={ text.feedback }
				rows={ 6 }
				value={ formData.feedback }
				onChange={ handleChange( 'feedback' ) }
				{ ...style }
			/>

			<Input
				error={ errors.email }
				placeholder={ text.email }
				value={ formData.email }
				onChange={ handleChange( 'email' ) }
				{ ...style }
			/>

			<Button primary type="submit" disabled={ submitting }>
				{ text.submitButton }
			</Button>
		</Form>
	);
};

export default FeedbackForm;
