/**
 * External dependencies
 */
import { RawHTML, useState } from '@wordpress/element';

/**
 * Style dependencies
 */
import { FeedbackInput, Header, SubmitButton } from './styles/form-styles.js';

const FeedbackForm = ( {
	onSubmit,
	settings,
} ) => {
	const [ errors, setErrors ] = useState( {} );
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

		const validation = {
			feedback: isEmpty( formData.feedback ),
			email:
				settings.requireEmail &&
				( isEmpty( formData.email ) || formData.email.match( /^\s+@\s+$/ ) ),
		};
		setErrors( validation );

		if ( validation.feedback || validation.email ) {
			return;
		}

		// submit request here
		console.log( 'Request submitted ' );
		// also this function is async but does it need to be?

		onSubmit();
	};

	const { text, style } = settings;

	return (
		<form onSubmit={ handleSubmit }>
			<Header>
				<RawHTML>{ text.header }</RawHTML>
			</Header>

			<FeedbackInput
				as="textarea"
				error={ errors.feedback }
				placeholder={ text.feedback }
				rows={ 6 }
				value={ formData.feedback }
				onChange={ handleChange( 'feedback' ) }
				{ ...style }
			/>

			<FeedbackInput
				error={ errors.email }
				placeholder={ text.email }
				value={ formData.email }
				onChange={ handleChange( 'email' ) }
				{ ...style }
			/>

			<SubmitButton type="submit">
				{ text.submitButton }
			</SubmitButton>
		</form>
	);
	
};

export default FeedbackForm;
