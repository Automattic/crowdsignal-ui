/**
 * External dependencies
 */
import { cloneDeep, forEach, includes } from 'lodash';
import { v4 as uuid } from 'uuid';

/**
 * Internal dependencies
 */
import {
	multipleChoiceAnswerBlock,
	multipleChoiceQuestionBlock,
	ratingScaleAnswerBlock,
	ratingScaleQuestionBlock,
	textInputBlock,
	textQuestionBlock,
} from '@crowdsignal/block-editor';

const MAPPED_BLOCKS = [
	multipleChoiceAnswerBlock.name,
	multipleChoiceQuestionBlock.name,
	ratingScaleAnswerBlock.name,
	ratingScaleQuestionBlock.name,
	textInputBlock.name,
	textQuestionBlock.name,
];

const regenerateClientIds = ( blocks ) =>
	forEach( blocks, ( block ) => {
		if ( includes( MAPPED_BLOCKS, block.name ) ) {
			block.attributes.clientId = uuid();
		}

		regenerateClientIds( block.innerBlocks );
	} );

export const clonePage = ( blocks ) =>
	regenerateClientIds( cloneDeep( blocks ) );

export const errors = {
	SAVE_ERROR: 'save-error',
};
