/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { QuestionWrapper } from '../components';

const Poll = ( { attributes, className, children } ) => {
	const width =
		attributes.align !== 'full' ? `${ attributes.width }%` : 'auto';

	return (
		<QuestionWrapper
			attributes={ attributes }
			className={ className }
			style={ { width } }
		>
			<RichText.Content tagName="h3" value={ attributes.question } />

			<QuestionWrapper.Content>{ children }</QuestionWrapper.Content>
		</QuestionWrapper>
	);
};

export default Poll;
