/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { createContext } from '@wordpress/element';
import classnames from 'classnames';
import { isNil } from 'lodash';

/**
 * Internal dependencies
 */
import { ErrorMessage, QuestionHeader, QuestionWrapper } from '../components';
import { Style } from './constants';
import { useField } from '@crowdsignal/form';

const Context = createContext();

const MultipleChoiceQuestion = ( { attributes, children, className } ) => {
	const { error } = useField( {
		name: `q_${ attributes.clientId }[choice]${
			attributes.maximumChoices !== 1 ? '[]' : ''
		}`,
		validation: ( value ) => {
			if ( attributes.mandatory && ( value === '' || isNil( value ) ) ) {
				return 'This question is required';
			}
		},
	} );

	const classes = classnames(
		'crowdsignal-forms-multiple-choice-question-block',
		className,
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
			<Context.Provider value={ attributes }>
				<QuestionWrapper.Content>{ children }</QuestionWrapper.Content>
			</Context.Provider>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</QuestionWrapper>
	);
};

MultipleChoiceQuestion.Context = Context;
MultipleChoiceQuestion.Style = Style;

export default MultipleChoiceQuestion;
