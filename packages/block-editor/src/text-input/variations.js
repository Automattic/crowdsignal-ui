import { __ } from '@wordpress/i18n';

import { EmailInputIcon } from '@crowdsignal/icons';

export default [
	{
		name: 'email',
		isDefault: false,
		title: __( 'Email Input' ),
		description: __( 'A form field for email addresses' ),
		icon: <EmailInputIcon />,
		attributes: {
			label: 'Enter email',
			validation: 'emailValidation',
		},

		keywords: [
			__( 'email input', 'block-edtor' ),
			__( 'email', 'block-edtor' ),
			__( 'e-mail', 'block-edtor' ),
		],
	},
];
