/**
 * External dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Poll } from '@crowdsignal/blocks';
import attributes from './attributes';
import EditPoll from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Poll', 'blocks' ),
	description: __( "Create polls and get your audience's opinion", 'blocks' ),
	category: 'crowdsignal-forms',
	edit: EditPoll,
	save: () => <InnerBlocks.Content />,
	attributes,
	supports: {
		align: [ 'center', 'wide', 'full' ],
		html: false,
		reusable: false,
	},
	getEditWrapperProps: ( { align } ) => ( {
		'data-align': align,
	} ),
};

export default {
	name: Poll.BlockName,
	settings,
};
