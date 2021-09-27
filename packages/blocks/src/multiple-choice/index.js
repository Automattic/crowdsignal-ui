/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { QuestionWrapper } from '../components';

const MultipleChoice = ( { attributes, children, className } ) => {
	return (
		<QuestionWrapper attributes={ attributes } className={ className }>
			<RichText.Content tagName="h3" value={ attributes.question } />
			<RichText.Content value={ attributes.note } />

			<QuestionWrapper.Content>{ children }</QuestionWrapper.Content>
		</QuestionWrapper>
	);
};

export default MultipleChoice;
