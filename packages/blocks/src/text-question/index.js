/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import { FormTextarea, QuestionHeader, QuestionWrapper } from '../components';

const TextQuestion = ( { attributes, className } ) => {
	const { inputProps } = useField( {
		name: `q_${ attributes.clientId }[text]`,
	} );

	const classes = classnames(
		className,
		'crowdsignal-forms-text-question-block',
		{
			'is-required': attributes.mandatory,
		}
	);

	return (
		<QuestionWrapper attributes={ attributes } className={ classes }>
			<RichText.Content
				tagName={ QuestionHeader }
				value={ attributes.question }
			/>

			<FormTextarea
				style={ {
					height: attributes.inputHeight,
				} }
				{ ...inputProps }
			/>
		</QuestionWrapper>
	);
};

export default TextQuestion;
