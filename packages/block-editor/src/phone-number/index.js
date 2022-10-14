/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PhoneNumber } from '@crowdsignal/blocks';
import { PhoneNumberIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import Edit from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Phone Number', 'block-editor' ),
	description: __( 'A phone number field for your form.', 'block-editor' ),
	category: 'crowdsignal-forms/form',
	keywords: [ __( 'phone', 'block-editor' ), __( 'number', 'block-editor' ) ],
	icon: <PhoneNumberIcon />,
	edit: Edit,
	attributes,
	example: {
		attributes: {
			label: __( 'Phone Number', 'block-editor' ),
		},
	},
};

export default {
	name: PhoneNumber.blockName,
	settings,
};
