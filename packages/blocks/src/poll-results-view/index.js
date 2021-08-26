/**
 * External dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default {
	title: __( 'Results View', 'blocks' ),
	description: __(
		'The container for all content shown to users after voting on the poll.'
	),
	category: 'crowdsignal-forms',
	parent: [ 'crowdsignal-forms/poll' ],
	edit: () => (
		<InnerBlocks
			templateLock="all"
			template={ [ [ 'crowdsignal-forms/poll-results-summary', {} ] ] }
		/>
	),
};
