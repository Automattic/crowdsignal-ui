/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { MultipleChoiceQuestionIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditRakingQuestionBlock from './edit';

const name = 'crowdsignal-forms/ranking-question';

const settings = {
	apiVersion: 1,
	title: __( 'Ranking Question', 'block-editor' ),
	description: __(
		'Ask a question and offer sortable answer options.',
		'block-editor'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'ranking', 'block-editor' ),
		__( 'question', 'block-editor' ),
		__( 'form', 'block-editor' ),
		__( 'quiz', 'block-editor' ),
		__( 'poll', 'block-editor' ),
	],
	icon: <MultipleChoiceQuestionIcon />, //TODO: Set correct icon
	edit: EditRakingQuestionBlock,
	save: () => <InnerBlocks.Content />,
	attributes,
	supports: {
		html: false,
		reusable: false,
	},
	// example: {
	// 	attributes: {
	// 		question: __( 'What is your favorite food?', 'block-editor' ),
	// 	},
	// 	innerBlocks: [
	// 		{
	// 			name: 'crowdsignal-forms/multiple-choice-answer',
	// 			attributes: {
	// 				label: __( 'Pizza', 'block-editor' ),
	// 			},
	// 		},
	// 		{
	// 			name: 'crowdsignal-forms/multiple-choice-answer',
	// 			attributes: {
	// 				label: __( 'Hamburger', 'block-editor' ),
	// 			},
	// 		},
	// 		{
	// 			name: 'crowdsignal-forms/multiple-choice-answer',
	// 			attributes: {
	// 				label: __( 'Pasta', 'block-editor' ),
	// 			},
	// 		},
	// 		{
	// 			name: 'crowdsignal-forms/multiple-choice-answer',
	// 			attributes: {
	// 				label: __( 'Salad', 'block-editor' ),
	// 			},
	// 		},
	// 	],
	// },
};

export default {
	name,
	settings,
};
