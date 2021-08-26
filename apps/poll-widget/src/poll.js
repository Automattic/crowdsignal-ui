/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { useBorderStyles, useColorStyles } from '@crowdsignal/styles';

/**
 * Style dependencies
 */
import { PollWrapper } from './styles/poll';

const Poll = ( { attributes, className, children } ) => {
	const width =
		attributes.align !== 'full' ? `${ attributes.width }%` : 'auto';

	return (
		<PollWrapper
			as={ 'form' }
			className={ className }
			style={ {
				...useColorStyles( attributes ),
				...useBorderStyles( attributes ),
				width,
			} }
		>
			<RichText.Content tagName="h3" value={ attributes.question } />

			{ children }
		</PollWrapper>
	);
};

export default Poll;
