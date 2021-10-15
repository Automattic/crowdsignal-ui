/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { createContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { QuestionWrapper } from '../components';

const Context = createContext();

const MultipleChoiceQuestion = ( { attributes, children, className } ) => {
	return (
		<QuestionWrapper attributes={ attributes } className={ className }>
			<RichText.Content tagName="h3" value={ attributes.question } />
			<RichText.Content value={ attributes.note } />

			<Context.Provider value={ attributes }>
				<QuestionWrapper.Content>{ children }</QuestionWrapper.Content>
			</Context.Provider>
		</QuestionWrapper>
	);
};

MultipleChoiceQuestion.Context = Context;

export default MultipleChoiceQuestion;
