/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { MultipleChoiceAnswerIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditMultipleChoiceAnswer from './edit';

const name = 'crowdsignal-forms/multiple-choice-answer';

const settings = {
	title: __( 'Answer', 'block-editor' ),
	description: __(
		'Add more answer options to your question',
		'block-editor'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'answer', 'block-editor' ),
		__( 'option', 'block-editor' ),
		__( 'choice', 'block-editor' ),
	],
	icon: <MultipleChoiceAnswerIcon />,
	parent: [ 'crowdsignal-forms/multiple-choice-question' ],
	edit: EditMultipleChoiceAnswer,
	attributes,
};

export default {
	name,
	settings,
};
