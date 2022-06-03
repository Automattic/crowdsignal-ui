/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { FileInputIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import Edit from './edit';
import { DropdownInput } from '@crowdsignal/blocks';

const settings = {
	title: __( 'Dropdown Input Form', 'block-editor' ),
	description: __( 'TBD', 'block-editor' ),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'dropdown', 'block-editor' ),
		__( 'list', 'block-editor' ),
		__( 'options', 'block-editor' ),
		__( 'select', 'block-editor' ),
		__( 'form', 'block-editor' ),
	],
	icon: <FileInputIcon />, //FIXME
	edit: Edit,
	attributes,
	supports: {
		html: false,
		reusable: false,
		//TODO: add alignment options
	},
	// example: {
	// 	attributes: {
	// 		label: __( 'Upload your application files:', 'block-editor' ),
	// 		buttonLabel: __( 'Choose File', 'block-editor' ),
	// 		message: __(
	// 			'Supported file formats: pdf, png, jpg, mp4 - max. size 5 mb',
	// 			'block-editor'
	// 		),
	// 	},
	// },
};

export default {
	name: DropdownInput.blockName,
	settings,
};
