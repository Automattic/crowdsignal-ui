/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';

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
			<h3>
				<RawHTML>{ attributes.question }</RawHTML>
			</h3>

			<QuestionWrapper.Content>{ children }</QuestionWrapper.Content>
		</QuestionWrapper>
	);
};

Poll.blockName = 'crowdsignal-forms/poll';

export default Poll;
