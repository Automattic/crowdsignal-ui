/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { MatrixQuestion } from '@crowdsignal/blocks';
import { MatrixQuestionIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditMatrix from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Matrix Question', 'block-editor' ),
	description: __(
		'Create a multiple choice grid of questions and answers.',
		'block-editor'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'multiple choice grid', 'block-editor' ),
		__( 'matrix', 'block-editor' ),
		__( 'rating', 'block-editor' ),
		__( 'scale', 'block-editor' ),
		__( 'table', 'block-editor' ),
		__( 'column', 'block-editor' ),
		__( 'row', 'block-editor' ),
		__( 'question', 'block-editor' ),
		__( 'answer', 'block-editor' ),
		__( 'choice', 'block-editor' ),
		__( 'form', 'block-editor' ),
		__( 'likert', 'block-editor' ),
		__( 'single-selection', 'block-editor' ),
		__( 'multiple-selection', 'block-editor' ),
		__( 'group', 'block-editor' ),
	],
	icon: <MatrixQuestionIcon />,
	edit: EditMatrix,
	attributes,
	supports: {
		html: false,
		reusable: false,
	},
	example: {
		attributes: {
			question: __(
				'How satisfied are you with each of the following?',
				'block-editor'
			),
			columns: [
				{
					clientId: '1',
					label: '😁',
				},
				{
					clientId: '2',
					label: '🙂',
				},
				{
					clientId: '3',
					label: '😐',
				},
				{
					clientId: '4',
					label: '🙁',
				},
				{
					clientId: '5',
					label: '😡',
				},
			],
			rows: [
				{
					clientId: '1',
					label: __( 'Overall experience', 'block-editor' ),
				},
				{
					clientId: '2',
					label: __( 'Product usability', 'block-editor' ),
				},
				{
					clientId: '3',
					label: __( 'Support interaction', 'block-editor' ),
				},
				{
					clientId: '4',
					label: __( 'Price', 'block-editor' ),
				},
			],
		},
	},
};

export default {
	name: MatrixQuestion.blockName,
	settings,
};
