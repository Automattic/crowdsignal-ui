/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import attributes from './attributes';
import EditPollAnswer from './edit';

export default {
	title: __( 'Poll Answer', 'blocks' ),
	description: __( 'Add more answer options to your poll', 'blocks' ),
	category: 'crowdsignal-forms',
	parent: [ 'crowdsignal-forms/poll-vote-view' ],
	edit: EditPollAnswer,
	attributes,
};
