/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { RankingQuestion } from '@crowdsignal/blocks';
import { RankingQuestionIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditRakingQuestionBlock from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Ranking Question', 'block-editor' ),
	description: __(
		'Ask a question and offer sortable answer options.',
		'block-editor'
	),
	category: 'crowdsignal-forms/question',
	keywords: [
		__( 'ranking', 'block-editor' ),
		__( 'question', 'block-editor' ),
		__( 'form', 'block-editor' ),
		__( 'quiz', 'block-editor' ),
		__( 'poll', 'block-editor' ),
	],
	icon: <RankingQuestionIcon />,
	edit: EditRakingQuestionBlock,
	save: () => <InnerBlocks.Content />,
	attributes,
	supports: {
		html: false,
		reusable: false,
		align: [ 'wide', 'full' ],
	},
	example: {
		attributes: {
			question: __(
				'Rank the following cities, starting with your most favorite',
				'block-editor'
			),
		},
		innerBlocks: [
			{
				name: 'crowdsignal-forms/ranking-answer',
				attributes: {
					label: __( 'Berlin', 'block-editor' ),
				},
			},
			{
				name: 'crowdsignal-forms/ranking-answer',
				attributes: {
					label: __( 'New York City', 'block-editor' ),
				},
			},
			{
				name: 'crowdsignal-forms/ranking-answer',
				attributes: {
					label: __( 'London', 'block-editor' ),
				},
			},
			{
				name: 'crowdsignal-forms/ranking-answer',
				attributes: {
					label: __( 'Tokyo', 'block-editor' ),
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
	name: RankingQuestion.blockName,
	settings,
};
