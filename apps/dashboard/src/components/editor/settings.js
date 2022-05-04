/**
 * External dependencies
 */
import { getCategories, setCategories } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import * as blocks from '@crowdsignal/block-editor';

// test
import { uploadMedia } from '../../util/media';

setCategories( [
	{
		title: __( 'Form', 'dashboard' ),
		slug: 'crowdsignal-forms/form',
	},
	...getCategories(),
] );

export const editorSettings = {
	iso: {
		blocks: {
			allowBlocks: [
				'core/buttons',
				'core/code',
				'core/columns',
				'core/embed',
				'core/group',
				'core/heading',
				'core/html',
				'core/image',
				'core/list',
				'core/paragraph',
				'core/preformatted',
				'core/pullquote',
				'core/quote',
				'core/row',
				'core/separator',
				'core/spacer',
				'core/table',
				'core/verse',
				'core/video',

				...map( blocks, ( block ) => block.name ),
			],
		},
		defaultPreferences: {
			fixedToolbar: false,
		},
		sidebar: {
			inserter: true,
			inspector: true,
		},
		toolbar: {
			documentInspector: __( 'Document', 'dashboard' ),
			inspector: true,
			navigation: true,
			toc: false,
		},
		moreMenu: false,
	},
	editor: {
		alignWide: true,
		supportsLayout: false,
		hasUploadPermissions: true, // not sure what this does, Gutenberg setting.
		// if allowedMimeTypes is not present or empty, when you click on the MediaUpload handler it will just remove the buttons (????)
		allowedMimeTypes: [ 'audio', 'image' ],
		// Object must be a valid handler for the file select callback.
		// NOTE: if mediaUpload is not present, addFilter( 'editor.MediaUpload' ... ) will not work (????)
		// NOTE: costumize the handler on its own and just use the import here
		mediaUpload: uploadMedia,
	},
};
