/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import { isNil } from 'lodash';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import {
	ErrorMessage,
	FormTextarea,
	QuestionHeader,
	QuestionWrapper,
} from '../components';

const TextQuestion = ( { attributes, className } ) => {
	const { inputProps, error } = useField( {
		name: `q_${ attributes.clientId }[text]`,
		validation: ( value ) => {
			if ( attributes.mandatory && ( value === '' || isNil( value ) ) ) {
				return 'This question is required';
			}
		},
	} );

	const classes = classnames(
		className,
		'crowdsignal-forms-text-question-block',
		{
			'is-required': attributes.mandatory,
			'is-error': error,
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
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</QuestionWrapper>
	);
};

export default TextQuestion;
