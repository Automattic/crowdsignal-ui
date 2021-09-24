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
			as={ 'form' }
			className={ className }
			style={ { width } }
		>
			<RichText.Content tagName="h3" value={ attributes.question } />

			{ children }
		</QuestionWrapper>
	);
};

export default Poll;
