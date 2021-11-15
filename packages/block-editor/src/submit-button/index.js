/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import attributes from './attributes';
import EditSubmitButton from './edit';

const name = 'crowdsignal-forms/submit-button';

const settings = {
	title: __( 'Submit Button', 'blocks' ),
	description: __( 'Submit the form', 'blocks' ),
	category: 'crowdsignal-forms/form',
	edit: EditSubmitButton,
	attributes,
};

export default {
	name,
	settings,
};
