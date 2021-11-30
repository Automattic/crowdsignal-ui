/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';

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
import { STORE_NAME } from '../../data';

const FormPreview = ( { projectId } ) => {
	const project = useSelect( ( select ) =>
		select( STORE_NAME ).getProject( projectId )
	);

	useStylesheet(
		'https://app.crowdsignal.com/themes/leven/style-editor.css'
	);
	useStylesheet( '/ui/stable/theme-compatibility/leven.min.css' );

	if ( ! project?.content?.draft ) {
		return null;
	}

	// eslint-disable-next-line no-console
	const handleSubmit = ( data ) => console.log( data );

	return (
		<Form
			name={ `f-${ projectId }` }
			onSubmit={ handleSubmit }
			className="project-content"
		>
			<ContentWrapper>
				{ renderBlocks( project.content.draft.pages[ 0 ], {
					'crowdsignal-forms/multiple-choice-answer': MultipleChoiceAnswer,
					'crowdsignal-forms/multiple-choice-question': MultipleChoiceQuestion,
					'crowdsignal-forms/submit-button': SubmitButton,
					'crowdsignal-forms/text-input': TextInput,
					'crowdsignal-forms/text-question': TextQuestion,
				} ) }
			</ContentWrapper>
		</Form>
	);
};

export default FormPreview;
