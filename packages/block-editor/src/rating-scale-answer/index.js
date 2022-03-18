/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { RatingScaleQuestionIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditRatingScaleAnswer from './edit';

const name = 'crowdsignal-forms/rating-scale-answer';

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
	icon: <RatingScaleQuestionIcon />,
	parent: [ 'crowdsignal-forms/rating-scale-question' ],
	edit: EditRatingScaleAnswer,
	attributes,
};

export default {
	name,
	settings,
};
