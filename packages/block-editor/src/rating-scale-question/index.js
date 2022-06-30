/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { RatingScaleQuestion } from '@crowdsignal/blocks';
import { RatingScaleQuestionIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditRatingScaleQuestion from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Rating Question', 'block-editor' ),
	description: __(
		'Ask a question and offer multiple answer options.',
		'block-editor'
	),
	category: 'crowdsignal-forms/question',
	keywords: [
		__( 'rating', 'block-editor' ),
		__( 'question', 'block-editor' ),
		__( 'form', 'block-editor' ),
		__( 'quiz', 'block-editor' ),
		__( 'poll', 'block-editor' ),
		__( 'likert', 'block-editor' ),
		__( 'matrix', 'block-editor' ),
	],
	icon: <RatingScaleQuestionIcon />,
	edit: EditRatingScaleQuestion,
	save: () => <InnerBlocks.Content />,
	attributes,
	supports: {
		html: false,
		reusable: false,
		align: [ 'wide', 'full' ],
	},
	styles: [
		{
			name: RatingScaleQuestion.Style.TEXT,
			label: __( 'Text Button', 'block-editor' ),
			isDefault: true,
		},
		{
			name: RatingScaleQuestion.Style.EMOJI,
			label: __( 'Emojis', 'block-editor' ),
		},
	],
	variations: [
		{
			isDefault: true,
			attributes: {
				// Force the correct className onto the block by default
				className: 'is-style-text',
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
					weight: 1,
					emoji: '😡',
				},
			},
			{
				name: 'crowdsignal-forms/rating-scale-answer',
				attributes: {
					label: '3',
					weight: 3,
					emoji: '😐',
				},
			},
			{
				name: 'crowdsignal-forms/rating-scale-answer',
				attributes: {
					label: '5',
					weight: 5,
					emoji: '😀',
				},
			},
		],
	},
	getEditWrapperProps( { justification } ) {
		return {
			'data-justify': justification,
		};
	},
};

export default {
	name: RatingScaleQuestion.blockName,
	settings,
};
