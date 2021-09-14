/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import attributes from './attributes';
import EditFreeText from './edit';

export default {
	apiVersion: 1,
	title: __( 'Free Text', 'blocks' ),
	description: __( 'Allows for a free text response on your form', 'blocks' ),
	category: 'crowdsignal-forms',
	edit: EditFreeText,
	attributes,
	supports: {
		html: false,
		reusable: false,
	},
};
