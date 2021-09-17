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
	multipleChoiceQuestionBlock,
} from '@crowdsignal/blocks';

const BLOCKS = {
	'crowdsignal-forms/poll': pollBlock,
	'crowdsignal-forms/poll-answer': pollAnswerBlock,
	'crowdsignal-forms/free-text': freeTextQuestionBlock,
	'crowdsignal-forms/multiple-choice': multipleChoiceQuestionBlock,
};

export const registerBlocks = () =>
	forEach( BLOCKS, ( block, key ) => {
		registerBlockType( key, block );
	} );
