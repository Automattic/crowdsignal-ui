/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

export default {
	label: {
		type: 'string',
		default: __( 'Submit', 'block-editor' ),
	},
	// Style attributes, should follow the name scheme supported by @crowdsignal/styles helpers.
	backgroundColor: {
		type: 'string',
	},
	gradient: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
};
