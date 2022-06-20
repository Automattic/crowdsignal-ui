/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { MultipleChoiceQuestionIcon } from '@crowdsignal/icons';
import { DropdownInput } from '@crowdsignal/blocks';
import attributes from './attributes';
import Edit from './edit';

const settings = {
	title: __( 'Dropdown Input Form', 'block-editor' ),
	description: __(
		'Allows people to select an option from a list',
		'block-editor'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'dropdown', 'block-editor' ),
		__( 'list', 'block-editor' ),
		__( 'options', 'block-editor' ),
		__( 'select', 'block-editor' ),
		__( 'form', 'block-editor' ),
	],
	icon: <MultipleChoiceQuestionIcon />,
	edit: Edit,
	attributes,
	supports: {
		html: false,
		reusable: false,
		//TODO: add alignment options
	},
	example: {
		attributes: {
			label: __( 'Choose your country:', 'block-editor' ),
			buttonLabel: __( 'Select an option', 'block-editor' ),
		},
	},
};

export default {
	name: DropdownInput.blockName,
	settings,
};
