/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { RankingAnswer } from '@crowdsignal/blocks';
import { RankingQuestionIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditRankingAnswer from './edit';

const settings = {
	title: __( 'Answer', 'block-editor' ),
	description: __(
		'Add more answer options to your question',
		'block-editor'
	),
	category: 'crowdsignal-forms/question',
	keywords: [
		__( 'answer', 'block-editor' ),
		__( 'option', 'block-editor' ),
		__( 'choice', 'block-editor' ),
	],
	icon: <RankingQuestionIcon />,
	parent: [ 'crowdsignal-forms/ranking-question' ],
	edit: EditRankingAnswer,
	attributes,
};

export default {
	name: RankingAnswer.blockName,
	settings,
};
