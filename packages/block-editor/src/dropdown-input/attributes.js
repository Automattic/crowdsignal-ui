/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

export default {
	clientId: {
		type: 'string',
		default: null,
	},
	label: {
		type: 'string',
		default: '',
	},
	buttonLabel: {
		type: 'string',
		default: __( 'Choose an option', 'block-editor' ),
	},
	options: {
		type: 'array',
		default: [],
	},
	mandatory: {
		type: 'boolean',
		default: false,
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
