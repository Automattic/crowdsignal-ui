/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { createContext } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { QuestionHeader, QuestionWrapper } from '../components';
import { Style } from './constants';

const Context = createContext();

const MultipleChoiceQuestion = ( { attributes, children, className } ) => {
	const classes = classnames( className, {
		'is-required': attributes.mandatory,
	} );

	return (
		<QuestionWrapper attributes={ attributes } className={ classes }>
			<RichText.Content
				tagName={ QuestionHeader }
				value={ attributes.question }
			/>

			<Context.Provider value={ attributes }>
				<QuestionWrapper.Content>{ children }</QuestionWrapper.Content>
			</Context.Provider>
		</QuestionWrapper>
	);
};

MultipleChoiceQuestion.Context = Context;
MultipleChoiceQuestion.Style = Style;

export default MultipleChoiceQuestion;
