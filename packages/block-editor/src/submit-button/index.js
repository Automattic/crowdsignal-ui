/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { SubmitButton } from '@crowdsignal/blocks';
import { SubmitButtonIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditSubmitButton from './edit';

const settings = {
	title: __( 'Submit Button', 'block-editor' ),
	description: __( 'Submit the form', 'block-editor' ),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'submit', 'block-editor' ),
		__( 'button', 'block-editor' ),
		__( 'continue', 'block-editor' ),
		__( 'next', 'block-editor' ),
		__( 'send', 'block-editor' ),
	],
	icon: <SubmitButtonIcon />,
	edit: EditSubmitButton,
	attributes,
	supports: {
		align: [ 'wide', 'full' ],
	},
	example: {
		attributes: {
			label: __( 'Submit', 'block-editor' ),
		},
	},
};

export default {
	name: SubmitButton.blockName,
	settings,
};
