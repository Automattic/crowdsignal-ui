/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { forEach } from 'lodash';

/**
 * Internal dependencies
 */
import * as blocks from '@crowdsignal/block-editor';
import { withEmptyClassName } from '@crowdsignal/block-editor-filters';

export const registerBlocks = () =>
	forEach( blocks, ( block ) => {
		registerBlockType( block.name, block.settings );
	} );

addFilter(
	'editor.BlockListBlock',
	'crowdsignal-forms/with-empty-class-name',
	withEmptyClassName
);
