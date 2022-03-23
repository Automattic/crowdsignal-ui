/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { EmailInputIcon } from '@crowdsignal/icons';

export default [
	{
		name: 'crowdsignal-forms/email-input',
		isDefault: false,
		title: __( 'Email Input Form', 'block-editor' ),
		description: __(
			'An input field for collecting email addresses.',
			'block-editor'
		),
		icon: <EmailInputIcon />,
		attributes: {
			label: __( 'Enter email', 'block-editor' ),
			validation: [ 'emailValidation' ],
			placeholder: 'example@domain.com',
		},
		keywords: [
			__( 'email input', 'block-editor' ),
			__( 'email', 'block-editor' ),
			__( 'e-mail', 'block-editor' ),
		],
		isActive: ( blockAttributes, variationAttributes ) =>
			blockAttributes.title === variationAttributes.title,
	},
];
