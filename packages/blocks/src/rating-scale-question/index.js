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

const Context = createContext();

const RatingScaleQuestion = ( { attributes, children, className } ) => {
	// fixing the input array-ish as rating, solve the ID on backend
	const { error } = useValidation( {
		fieldName: `q_${ attributes.clientId }[rating]`,
		validation: ( value ) => {
			if ( attributes.mandatory && isEmpty( value ) ) {
				return __( 'This question is required', 'blocks' );
			}
		},
	} );

	const classes = classnames(
		'crowdsignal-forms-rating-scale-question-block',
		className,
		{
			'is-required': attributes.mandatory,
			'is-error': error,
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
					<QuestionWrapper.Content horizontal>
						{ children }
					</QuestionWrapper.Content>
				</Context.Provider>
				{ error && <ErrorMessage>{ error }</ErrorMessage> }
			</QuestionWrapper>
		</JustificationWrapper>
	);
};

RatingScaleQuestion.Context = Context;
RatingScaleQuestion.Style = Style;
RatingScaleQuestion.blockName = 'crowdsignal-forms/rating-scale-question';

export default RatingScaleQuestion;
