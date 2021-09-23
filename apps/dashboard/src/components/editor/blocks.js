/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { forEach } from 'lodash';

/**
 * Internal dependencies
 */
import * as blocks from '@crowdsignal/block-editor';

export const registerBlocks = () =>
	forEach( blocks, ( block ) => {
		registerBlockType( block.name, block.settings );
	} );
