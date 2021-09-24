/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { QuestionWrapper } from '../components';

const FreeText = ( { attributes, className } ) => {
	return (
		<QuestionWrapper attributes={ attributes } className={ className }>
			<RichText.Content tagName="h3" value={ attributes.question } />

			<textarea rows={ 6 } />
		</QuestionWrapper>
	);
};

export default FreeText;
