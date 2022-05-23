/**
 * External dependencies
 */
import { createContext, RawHTML } from '@wordpress/element';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { ErrorMessage, QuestionHeader, QuestionWrapper } from '../components';
import { Style } from './constants';
import { useValidation } from '@crowdsignal/form';

const Context = createContext();

const MultipleChoiceQuestion = ( { attributes, children, className } ) => {
	const { error } = useValidation( {
		fieldName: `q_${ attributes.clientId }[choice]${
			attributes.maximumChoices !== 1 ? '[]' : ''
		}`,
		validation: ( value ) => {
			if ( attributes.mandatory && isEmpty( value ) ) {
				return __( 'This question is required', 'blocks' );
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
			<QuestionHeader>
				<RawHTML>{ attributes.question }</RawHTML>
			</QuestionHeader>
			<Context.Provider value={ attributes }>
				<QuestionWrapper.Content>{ children }</QuestionWrapper.Content>
			</Context.Provider>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</QuestionWrapper>
	);
};

MultipleChoiceQuestion.Context = Context;
MultipleChoiceQuestion.Style = Style;
MultipleChoiceQuestion.BlockName = 'crowdsignal-forms/multiple-choice-question';

export default MultipleChoiceQuestion;
