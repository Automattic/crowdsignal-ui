/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import attributes from './attributes';
import EditFreeText from './edit';

const name = 'crowdsignal-forms/free-text';

const settings = {
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

export default {
	name,
	settings,
};
