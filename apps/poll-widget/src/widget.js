/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import { renderBlocks } from '@crowdsignal/blocks';
import Poll from './poll';
import PollAnswer from './poll-answer';

const PollWidget = ( { blocks } ) =>
	renderBlocks( blocks, {
		'crowdsignal-forms/poll': Poll,
		'crowdsignal-forms/poll-answer': PollAnswer,
	} );

export default PollWidget;
