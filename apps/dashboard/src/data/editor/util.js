/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { cloneDeep, forEach, includes } from 'lodash';
import { v4 as uuid } from 'uuid';

/**
 * Internal dependencies
 */
import {
	multipleChoiceAnswerBlock,
	multipleChoiceQuestionBlock,
	rankingAnswerBlock,
	rankingQuestionBlock,
	ratingScaleAnswerBlock,
	ratingScaleQuestionBlock,
	textInputBlock,
	textQuestionBlock,
} from '@crowdsignal/block-editor';

const MAPPED_BLOCKS = [
	multipleChoiceAnswerBlock.name,
	multipleChoiceQuestionBlock.name,
	rankingAnswerBlock.name,
	rankingQuestionBlock.name,
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

export const PREVIEW_TYPES = {
	DESKTOP: {
		name: __( 'Desktop', 'dashboard' ),
		type: 'Desktop',
		fixedToolbar: false,
		isIframe: undefined,
	},
	TABLET: {
		name: __( 'Tablet', 'dashboard' ),
		type: 'Tablet',
		fixedToolbar: true,
		isIframe: undefined,
	},
	MOBILE: {
		name: __( 'Mobile', 'dashboard' ),
		type: 'Mobile',
		fixedToolbar: true,
		isIframe: undefined,
	},
	EMBED_CARD: {
		name: __( 'Embed - Card', 'dashboard' ),
		type: 'embed-card',
		fixedToolbar: true,
		isIframe: true,
	},
	POPUP: {
		name: __( 'Popup', 'dashboard' ),
		type: 'popup',
		fixedToolbar: true,
		isIframe: true,
	},
};
