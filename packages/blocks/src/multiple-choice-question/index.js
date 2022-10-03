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
import {
	ErrorMessage,
	JustificationWrapper,
	QuestionHeader,
	QuestionWrapper,
} from '../components';
import { Style } from './constants';
import { useValidation } from '@crowdsignal/form';
import MultipleChoiceAnswerOther from '../multiple-choice-answer-other';

const Context = createContext();

const MultipleChoiceQuestion = ( { attributes, children, className } ) => {
	const { error } = useValidation( {
		fieldName: `q_${ attributes.clientId }[choice]${
			attributes.maximumChoices !== 1 ? '[]' : ''
		}`,
		validation: ( value, formData ) => {
			if ( attributes.mandatory ) {
				const otherFieldValue =
					formData[ `q_${ attributes.clientId }[other]` ];

				if ( isEmpty( value ) && isEmpty( otherFieldValue ) ) {
					return __( 'This question is required', 'blocks' );
				}
			}
		},
	} );

	const classes = classnames(
		'crowdsignal-forms-multiple-choice-question-block',
		className,
		{
			'is-required': attributes.mandatory,
			'is-error': error,
			'allow-other': attributes.allowOther,
			[ `align${ attributes.align }` ]: attributes.align,
		}
	);

	return (
		<JustificationWrapper justification={ attributes.justification }>
			<QuestionWrapper attributes={ attributes } className={ classes }>
				<QuestionHeader>
					<RawHTML>{ attributes.question }</RawHTML>
				</QuestionHeader>
				<Context.Provider value={ attributes }>
					<QuestionWrapper.Content>
						{ children }
						{ attributes.allowOther && (
							<MultipleChoiceAnswerOther
								attributes={ attributes }
							/>
						) }
					</QuestionWrapper.Content>
				</Context.Provider>
				{ error && <ErrorMessage>{ error }</ErrorMessage> }
			</QuestionWrapper>
		</JustificationWrapper>
	);
};

MultipleChoiceQuestion.Context = Context;
MultipleChoiceQuestion.Style = Style;
MultipleChoiceQuestion.blockName = 'crowdsignal-forms/multiple-choice-question';

export default MultipleChoiceQuestion;
