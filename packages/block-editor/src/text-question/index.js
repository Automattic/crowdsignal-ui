/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { TextQuestion } from '@crowdsignal/blocks';
import { TextQuestionIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditFreeText from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Text Question', 'block-editor' ),
	description: __(
		'Ask a question and offer an open text field to enter an answer.',
		'block-editor'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'question', 'block-editor' ),
		__( 'text', 'block-editor' ),
		__( 'open text', 'block-editor' ),
		__( 'input', 'block-editor' ),
	],
	icon: <TextQuestionIcon />,
	edit: EditFreeText,
	attributes,
	supports: {
		html: false,
		reusable: false,
	},
	example: {
		attributes: {
			question: __( 'How does gravity work?', 'block-editor' ),
		},
	},
};

export default {
	name: TextQuestion.BlockName,
	settings,
};
