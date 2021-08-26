/**
 * External dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ALLOWED_BLOCKS = [ 'crowdsignal-forms/poll-answer', 'core/paragraph' ];

export default {
	title: __( 'Voting View', 'blocks' ),
	description: __(
		'The container for all content initially shown to the users when visiting the poll.'
	),
	category: 'crowdsignal-forms',
	parent: [ 'crowdsignal-forms/poll' ],
	edit: () => (
		<InnerBlocks
			templateLock={ false }
			template={ [
				[ 'crowdsignal-forms/poll-answer', {} ],
				[ 'crowdsignal-forms/poll-answer', {} ],
				[ 'crowdsignal-forms/poll-answer', {} ],
			] }
			allowedBlocks={ ALLOWED_BLOCKS }
		/>
	),
};
