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
import { isNil } from 'lodash';

const TextQuestion = ( { attributes, className } ) => {
	const { inputProps, error } = useField( {
		name: `q_${ attributes.clientId }[text]`,
		validations: [
			{
				isValid: ( value ) =>
					! attributes.mandatory ||
					( value !== '' && ! isNil( value ) ),
				message: 'This question is required',
			},
		],
	} );

	const classes = classnames(
		className,
		'crowdsignal-forms-text-question-block',
		{
			'is-required': attributes.mandatory,
			'has-error': error,
		}
	);

	return (
		<QuestionWrapper attributes={ attributes } className={ classes }>
			<RichText.Content
				tagName={ QuestionHeader }
				value={ attributes.question }
			/>
			{ error && <span>{ error }</span> }
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
