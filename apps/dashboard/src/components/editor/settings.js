/**
 * External dependencies
 */
import { getCategories, setCategories } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

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
			disallowBlocks: [
				'core/audio',
				'core/calendar',
				'core/cover',
				'core/embed',
				'core/file',
				'core/media-text',
				'core/shortcode',
			],
		},
		defaultPreferences: {
			fixedToolbar: false,
		},
		toolbar: {
			documentInspector: __( 'Document', 'dashboard' ),
			inspector: true,
			navigation: true,
			toc: false,
		},
	},
	editor: {
		alignWide: true,
		supportsLayout: false,
	},
};
