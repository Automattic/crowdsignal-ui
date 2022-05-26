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
		default: __( 'Choose file', 'block-editor' ),
	},
	message: {
		type: 'string',
	},
	mandatory: {
		type: 'boolean',
		default: false,
	},
	allowedTypes: {
		type: 'array',
		default: [ 'pdf', 'jpg', 'jpeg', 'png', 'svg', 'mp4' ],
	},
	fileSizeLimit: {
		type: 'number',
		default: 5242880,
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
