/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import EditPollResultsSummary from './edit';

export default {
	title: __( 'Poll Results Summary', 'blocks' ),
	description: __(
		'Display an overview of the current poll results',
		'blocks'
	),
	category: 'crowdsignal-forms',
	parent: [ 'crowdsignal-forms/poll-results-view' ],
	edit: EditPollResultsSummary,
};
