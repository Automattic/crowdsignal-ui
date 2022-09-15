/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { CheckboxInput } from '@crowdsignal/blocks';
import { CheckboxInputIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditFreeText from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Single Checkbox', 'block-editor' ),
	description: __(
		'Do you need consent to something like terms of service?',
		'block-editor'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'checkbox', 'block-editor' ),
		__( 'terms of service', 'block-editor' ),
	],
	icon: <CheckboxInputIcon />,
	edit: EditFreeText,
	attributes,
	supports: {
		html: false,
		reusable: false,
	},
	example: {
		attributes: {
			label: __( 'I agree to the terms of service', 'block-editor' ),
		},
	},
	getEditWrapperProps( { justification } ) {
		return {
			'data-justify': justification,
		};
	},
};

export default {
	name: CheckboxInput.blockName,
	settings,
};
