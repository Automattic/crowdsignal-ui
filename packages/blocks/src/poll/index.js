/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import EditPoll from './edit';

export default {
	title: __( 'Poll', 'blocks' ),
	description: __( "Create polls and get your audience's opinion", 'blocks' ),
	category: 'crowdsignal-forms',
	edit: EditPoll,
	supports: {
		align: [ 'center', 'wide', 'full' ],
	},
	getEditWrapperProps: ( { align } ) => ( {
		'data-align': align,
	} ),
};
