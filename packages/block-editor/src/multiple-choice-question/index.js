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

const settings = {
	apiVersion: 1,
	title: __( 'Multiple Choice Question', 'block-editor' ),
	description: __(
		'Ask a question and offer multiple answer options.',
		'block-editor'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'multiple choice', 'block-editor' ),
		__( 'question', 'block-editor' ),
		__( 'form', 'block-editor' ),
		__( 'quiz', 'block-editor' ),
		__( 'poll', 'block-editor' ),
		__( 'mc', 'block-editor' ),
		__( 'mc question', 'block-editor' ),
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
	example: {
		attributes: {
			question: __( 'What is your favorite food?', 'block-editor' ),
		},
		innerBlocks: [
			{
				name: 'crowdsignal-forms/multiple-choice-answer',
				attributes: {
					label: __( 'Pizza', 'block-editor' ),
				},
			},
			{
				name: 'crowdsignal-forms/multiple-choice-answer',
				attributes: {
					label: __( 'Hamburger', 'block-editor' ),
				},
			},
			{
				name: 'crowdsignal-forms/multiple-choice-answer',
				attributes: {
					label: __( 'Pasta', 'block-editor' ),
				},
			},
			{
				name: 'crowdsignal-forms/multiple-choice-answer',
				attributes: {
					label: __( 'Salad', 'block-editor' ),
				},
			},
		],
	},
};

export default {
	name: MultipleChoiceQuestion.blockName,
	settings,
};
