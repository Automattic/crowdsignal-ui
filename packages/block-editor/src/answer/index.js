/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import attributes from './attributes';
import EditAnswer from './edit';

const name = 'crowdsignal-forms/answer';

const settings = {
	title: __( 'Answer', 'blocks' ),
	description: __( 'Add more answer options to your question', 'blocks' ),
	category: 'crowdsignal-forms',
	parent: [ 'crowdsignal-forms/multiple-choice' ],
	edit: EditAnswer,
	attributes,
};

export default {
	name,
	settings,
};
