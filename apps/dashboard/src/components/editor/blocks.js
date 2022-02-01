/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { addFilter, removeFilter } from '@wordpress/hooks';
import { forEach } from 'lodash';

/**
 * Internal dependencies
 */
import * as blocks from '@crowdsignal/block-editor';
import {
	withEmptyClassName,
	withMediaLinkDestination,
} from '@crowdsignal/block-editor-filters';
import { MediaUploader } from './media-upload';

export const registerBlocks = () =>
	forEach( blocks, ( block ) => {
		registerBlockType( block.name, block.settings );
	} );

addFilter(
	'editor.BlockListBlock',
	'crowdsignal-forms/with-empty-class-name',
	withEmptyClassName
);

addFilter(
	'editor.BlockEdit',
	'crowdsignal/with-media-link-destination',
	withMediaLinkDestination
);

removeFilter( 'editor.MediaUpload', 'isolated-block-editor/media-upload' );

// if this filter ain't here, settings.editor.mediaUpload will not take any effect (in fact, it will crash)
addFilter(
	'editor.MediaUpload',
	'crowdsignal/media-upload',
	() => MediaUploader,
	15
);
