/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { TextQuestionIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditFreeText from './edit';

const name = 'crowdsignal-forms/text-question';

const settings = {
	apiVersion: 1,
	title: __( 'Text Question', 'blocks' ),
	description: __(
		'Ask a question and offer an open text field to enter an answer.',
		'blocks'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'question', 'block-edtor' ),
		__( 'text', 'block-edtor' ),
		__( 'open text', 'block-edtor' ),
		__( 'input', 'block-edtor' ),
	],
	icon: <TextQuestionIcon />,
	edit: EditFreeText,
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
