/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { FileUploadIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import Upload from './edit';
import { FileUpload } from '@crowdsignal/blocks';

const settings = {
	title: __( 'Upload File Form', 'block-editor' ),
	description: __(
		'Allow people to file-upload and share a file with you.',
		'block-editor'
	),
	category: 'crowdsignal-forms/form',
	keywords: [
		__( 'upload', 'block-editor' ),
		__( 'file', 'block-editor' ),
		__( 'form', 'block-editor' ),
		__( 'attachment', 'block-editor' ),
	],
	icon: <FileUploadIcon />,
	edit: Upload,
	attributes,
	supports: {
		html: false,
		reusable: false,
	},
	example: {
		attributes: {
			label: __( 'Upload your application files:', 'block-editor' ),
			buttonLabel: __( 'Choose File', 'block-editor' ),
			message: __(
				'Supported file formats: pdf, png, jpg, mp4 - max. size 5 mb',
				'block-editor'
			),
		},
	},
};

export default {
	name: FileUpload.blockName,
	settings,
};
