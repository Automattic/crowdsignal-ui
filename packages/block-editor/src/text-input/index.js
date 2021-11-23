/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { TextInputIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import Edit from './edit';

const name = 'crowdsignal-forms/text-input';

const settings = {
	apiVersion: 1,
	title: __( 'Text Input Form', 'blocks' ),
	description: __( 'An input field with a label for your form.', 'blocks' ),
	category: 'crowdsignal-forms/form',
	icon: <TextInputIcon />,
	edit: Edit,
	attributes,
};

export default {
	name,
	settings,
};
