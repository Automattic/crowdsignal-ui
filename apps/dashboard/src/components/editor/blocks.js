/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { forEach } from 'lodash';

/**
 * Internal dependencies
 */
import { pollBlock, pollAnswerBlock } from '@crowdsignal/blocks';

const BLOCKS = {
	'crowdsignal-forms/poll': pollBlock,
	'crowdsignal-forms/poll-answer': pollAnswerBlock,
};

export const registerBlocks = () =>
	forEach( BLOCKS, ( block, key ) => {
		registerBlockType( key, block );
	} );
