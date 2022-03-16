/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { SubmitButtonIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditSubmitButton from './edit';

const name = 'crowdsignal-forms/submit-button';

const settings = {
	title: __( 'Submit Button', 'blocks' ),
	description: __( 'Submit the form', 'blocks' ),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'submit', 'block-edtor' ),
		__( 'button', 'block-edtor' ),
		__( 'continue', 'block-edtor' ),
		__( 'next', 'block-edtor' ),
		__( 'send', 'block-edtor' ),
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
	name,
	settings,
};
