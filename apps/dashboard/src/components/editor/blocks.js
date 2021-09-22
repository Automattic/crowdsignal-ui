/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { forEach, omit } from 'lodash';

/**
 * Internal dependencies
 */
import * as blocks from '@crowdsignal/block-editor';

export const registerBlocks = () =>
	forEach( omit( blocks, [ 'renderBlocks' ] ), ( block ) => {
		registerBlockType( block.name, block.settings );
	} );
