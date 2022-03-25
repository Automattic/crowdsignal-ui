/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { EmailInputIcon, URLInputIcon } from '@crowdsignal/icons';

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

	{
		name: 'crowdsignal-forms/url-input',
		isDefault: false,
		title: __( 'URL Input Form', 'block-editor' ),
		description: __(
			'An input field for collecting and validating website addresses.',
			'block-editor'
		),
		icon: <URLInputIcon />,
		attributes: {
			label: __( 'Enter url', 'block-editor' ),
			validation: [ 'urlValidation' ],
			placeholder: 'https://example.com',
		},
		keywords: [
			__( 'url input', 'block-editor' ),
			__( 'url', 'block-editor' ),
			__( 'web address', 'block-editor' ),
		],
		isActive: ( blockAttributes, variationAttributes ) =>
			blockAttributes.title === variationAttributes.title,
	},
];
