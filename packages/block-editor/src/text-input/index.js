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
import variation from './variations';

const name = 'crowdsignal-forms/text-input';

const settings = {
	apiVersion: 1,
	title: __( 'Text Input Form', 'block-editor' ),
	description: __(
		'An input field with a label for your form.',
		'block-editor'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'form', 'block-edtor' ),
		__( 'input', 'block-edtor' ),
		__( 'text input', 'block-edtor' ),
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
	name,
	settings,
};
