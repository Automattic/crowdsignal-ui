/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import {
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

const ContentWrapper = styled.div`
	box-sizing: border-box;
	margin: 0 auto;
	max-width: 720px;
	padding: 20px;
	width: 100%;
`;

const FormPreview = ( { projectId } ) => {
	const project = useSelect( ( select ) =>
		select( STORE_NAME ).getProject( projectId )
	);

	useStylesheet(
		'https://app.crowdsignal.com/themes/leven/style-editor.css'
	);

	if ( ! project?.content?.draft ) {
		return null;
	}

	// eslint-disable-next-line no-console
	const handleSubmit = ( data ) => console.log( data );

	return (
		<ContentWrapper>
			<Form name={ `f-${ projectId }` } onSubmit={ handleSubmit }>
				{ renderBlocks( project.content.draft.pages[ 0 ], {
					'crowdsignal-forms/multiple-choice-answer': MultipleChoiceAnswer,
					'crowdsignal-forms/multiple-choice-question': MultipleChoiceQuestion,
					'crowdsignal-forms/submit-button': SubmitButton,
					'crowdsignal-forms/text-input': TextInput,
					'crowdsignal-forms/text-question': TextQuestion,
				} ) }
			</Form>
		</ContentWrapper>
	);
};

export default FormPreview;
