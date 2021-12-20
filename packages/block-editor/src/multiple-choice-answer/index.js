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
	title: __( 'Answer', 'blocks' ),
	description: __( 'Add more answer options to your question', 'blocks' ),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'answer', 'block-edtor' ),
		__( 'option', 'block-edtor' ),
		__( 'choice', 'block-edtor' ),
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
