/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { RatingScaleQuestion } from '@crowdsignal/blocks';
import { MultipleChoiceQuestionIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditRatingScaleQuestion from './edit';

const name = 'crowdsignal-forms/rating-scale-question';

const settings = {
	apiVersion: 1,
	title: __( 'Rating Question', 'blocks' ),
	description: __(
		'Ask a question and offer multiple answer options.',
		'blocks'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'rating', 'block-edtor' ),
		__( 'question', 'block-edtor' ),
		__( 'form', 'block-edtor' ),
		__( 'quiz', 'block-edtor' ),
		__( 'poll', 'block-edtor' ),
		__( 'likert', 'block-edtor' ),
		__( 'matrix', 'block-edtor' ),
	],
	icon: <MultipleChoiceQuestionIcon />,
	edit: EditRatingScaleQuestion,
	save: () => <InnerBlocks.Content />,
	attributes,
	supports: {
		html: false,
		reusable: false,
	},
	styles: [
		{
			name: RatingScaleQuestion.Style.EMOJI,
			label: __( 'Buttons', 'block-editor' ),
			isDefault: true,
		},
		{
			name: RatingScaleQuestion.Style.TEXT,
			label: __( 'List', 'block-editor' ),
		},
	],
	variations: [
		{
			isDefault: true,
			attributes: {
				// Force the correct className onto the block by default
				className: 'is-style-emoji',
			},
		},
	],
	example: {
		attributes: {
			question: __( 'How did you like the course?', 'block-editor' ),
		},
		innerBlocks: [
			{
				name: 'crowdsignal-forms/rating-scale-answer',
				attributes: {
					label: '1',
				},
			},
			{
				name: 'crowdsignal-forms/rating-scale-answer',
				attributes: {
					label: '2',
				},
			},
			{
				name: 'crowdsignal-forms/rating-scale-answer',
				attributes: {
					label: '3',
				},
			},
		],
	},
};

export default {
	name,
	settings,
};
