/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { MultipleChoiceQuestion } from '@crowdsignal/blocks';
import { MultipleChoiceQuestionIcon } from '@crowdsignal/icons';
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
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'multiple choice', 'block-edtor' ),
		__( 'question', 'block-edtor' ),
		__( 'form', 'block-edtor' ),
		__( 'quiz', 'block-edtor' ),
		__( 'poll', 'block-edtor' ),
		__( 'mc', 'block-edtor' ),
		__( 'mc question', 'block-edtor' ),
	],
	icon: <MultipleChoiceQuestionIcon />,
	edit: EditMultipleChoiceQuestion,
	save: () => <InnerBlocks.Content />,
	attributes,
	supports: {
		html: false,
		reusable: false,
	},
	styles: [
		{
			name: MultipleChoiceQuestion.Style.BUTTON,
			label: __( 'Buttons', 'block-editor' ),
			isDefault: true,
		},
		{
			name: MultipleChoiceQuestion.Style.LIST,
			label: __( 'List', 'block-editor' ),
		},
	],
	variations: [
		{
			isDefault: true,
			attributes: {
				// Force the correct className onto the block by default
				className: 'is-style-button',
			},
		},
	],
};

export default {
	name,
	settings,
};
