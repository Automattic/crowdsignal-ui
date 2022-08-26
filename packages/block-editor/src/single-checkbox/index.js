/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { SingleCheckbox } from '@crowdsignal/blocks';
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
	category: 'crowdsignal-forms/question',
	keywords: [
		__( 'checkbox', 'block-editor' ),
		__( 'text', 'block-editor' ),
		__( 'open text', 'block-editor' ),
		__( 'input', 'block-editor' ),
	],
	icon: <CheckboxInputIcon />,
	edit: EditFreeText,
	attributes,
	supports: {
		html: false,
		reusable: false,
		align: [ 'wide', 'full' ],
	},
	example: {
		attributes: {
			question: __( 'How does gravity work?', 'block-editor' ),
		},
	},
	getEditWrapperProps( { justification } ) {
		return {
			'data-justify': justification,
		};
	},
};

export default {
	name: SingleCheckbox.blockName,
	settings,
};
