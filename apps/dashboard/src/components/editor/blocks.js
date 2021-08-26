/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { forEach } from 'lodash';

/**
 * Internal dependencies
 */
import * as blocks from '@crowdsignal/blocks';

const ENABLED_BLOCKS = {
	'crowdsignal-forms/poll': blocks.pollBlock,
	'crowdsignal-forms/poll-answer': blocks.pollAnswerBlock,
	'crowdsignal-forms/poll-results-summary': blocks.pollResultsSummaryBlock,
	'crowdsignal-forms/poll-results-view': blocks.pollResultsViewBlock,
	'crowdsignal-forms/poll-vote-view': blocks.pollVoteViewBlock,
};

export const registerBlocks = () =>
	forEach( ENABLED_BLOCKS, ( block, key ) => {
		registerBlockType( key, block );
	} );
