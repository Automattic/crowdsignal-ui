/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { SubmitButtonIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import Upload from './edit';

const name = 'crowdsignal-forms/upload-block';

const settings = {
	title: __( 'Upload Block', 'block-editor' ),
	description: __( 'TBD', 'block-editor' ), //FIXME: Add description
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'upload', 'block-editor' ),
		// __( 'button', 'block-editor' ),
		// __( 'continue', 'block-editor' ),
		// __( 'next', 'block-editor' ),
		// __( 'send', 'block-editor' ),
	],
	icon: <SubmitButtonIcon />, //FIXME: Change icon
	edit: Upload,
	attributes,
	supports: {
		align: [ 'wide', 'full' ],
	},
	example: {
		attributes: {
			label: __( 'Submit', 'block-editor' ), //FIXME: Add examples
		},
	},
};

export default {
	name,
	settings,
};
