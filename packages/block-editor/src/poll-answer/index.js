/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PollAnswer } from '@crowdsignal/blocks';
import attributes from './attributes';
import EditPollAnswer from './edit';

const settings = {
	title: __( 'Poll Answer', 'blocks' ),
	description: __( 'Add more answer options to your poll', 'blocks' ),
	category: 'crowdsignal-forms',
	parent: [ 'crowdsignal-forms/poll' ],
	edit: EditPollAnswer,
	attributes,
};

export default {
	name: PollAnswer.blockName,
	settings,
};
