/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { TextInput } from '@crowdsignal/blocks';
import { TextInputIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import Edit from './edit';
import variation from './variations';

const settings = {
	apiVersion: 1,
	title: __( 'Text Input Form', 'block-editor' ),
	description: __(
		'An input field with a label for your form.',
		'block-editor'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'form', 'block-editor' ),
		__( 'input', 'block-editor' ),
		__( 'text input', 'block-editor' ),
	],
	icon: <TextInputIcon />,
	edit: Edit,
	variations: variation,
	attributes,
	example: {
		attributes: {
			label: __( 'Name', 'block-editor' ),
		},
	},
};

export default {
	name: TextInput.BlockName,
	settings,
};
