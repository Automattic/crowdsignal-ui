/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { forEach } from 'lodash';

/**
 * Internal dependencies
 */
import {
	pollBlock,
	pollAnswerBlock,
	freeTextQuestionBlock,
} from '@crowdsignal/blocks';

const BLOCKS = {
	'crowdsignal-forms/poll': pollBlock,
	'crowdsignal-forms/poll-answer': pollAnswerBlock,
	'crowdsignal-forms/free-text': freeTextQuestionBlock,
};

export const registerBlocks = () =>
	forEach( BLOCKS, ( block, key ) => {
		registerBlockType( key, block );
	} );
