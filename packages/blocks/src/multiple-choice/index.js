/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import attributes from './attributes';
import EditMultipleChoice from './edit';

export default {
	apiVersion: 1,
	title: __( 'Multiple Choice', 'blocks' ),
	description: __(
		'Allows for a multiple choice question on your form',
		'blocks'
	),
	category: 'crowdsignal-forms',
	edit: EditMultipleChoice,
	save: () => <InnerBlocks.Content />,
	attributes,
	supports: {
		html: false,
		reusable: false,
	},
};
