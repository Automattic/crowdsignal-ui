/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { QuestionWrapper } from '../components';
import classnames from 'classnames';

const Poll = ( { attributes, className, children } ) => {
	const width =
		attributes.align !== 'full' ? `${ attributes.width }%` : 'auto';

	const classes = classnames( 'crowdsignal-forms-poll-block', className );

	return (
		<QuestionWrapper
			attributes={ attributes }
			className={ classes }
			style={ { width } }
		>
			<RichText.Content tagName="h3" value={ attributes.question } />

			<QuestionWrapper.Content>{ children }</QuestionWrapper.Content>
		</QuestionWrapper>
	);
};

export default Poll;
