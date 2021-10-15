/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import attributes from './attributes';
import EditMultipleChoiceQuestion from './edit';

const name = 'crowdsignal-forms/multiple-choice-question';

const settings = {
	apiVersion: 1,
	title: __( 'Multiple Choice Question', 'blocks' ),
	description: __(
		'Ask a question and offer multiple answer options.',
		'blocks'
	),
	category: 'crowdsignal-forms',
	edit: EditMultipleChoiceQuestion,
	save: () => <InnerBlocks.Content />,
	attributes,
	supports: {
		html: false,
		reusable: false,
	},
};

export default {
	name,
	settings,
};
