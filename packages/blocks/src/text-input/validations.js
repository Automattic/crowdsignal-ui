/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

export default {
	emailValidation: ( value ) => {
		if (
			! value.match(
				/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		) {
			return __( 'Please enter a valid email address.', 'blocks' );
		}
	},

	urlValidation: ( value ) => {
		if (
			! value.match(
				/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
			)
		) {
			return __( 'Please enter a valid URL.', 'blocks' );
		}
	},
};
