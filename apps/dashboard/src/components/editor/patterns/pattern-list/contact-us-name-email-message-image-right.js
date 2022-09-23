/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const CONTACT_US_NAME_EMAIL_MESSAGE_IMAGE_RIGHT = {
	name: 'contact-us-name-email-message-image-right',
	title: 'Contact Us, Name, Email, Message, Image right',
	description: '',
	categories: [ CATEGORY_NAMES.CONTACT ],
	content: [
		{
			name: 'core/columns',
			attributes: { isStackedOnMobile: true, align: 'wide' },
			innerBlocks: [
				{
					name: 'core/column',
					attributes: { width: '60%' },
					innerBlocks: [
						{
							name: 'core/heading',
							attributes: {
								content: '<strong>Contact Us</strong>',
								level: 3,
								style: {
									typography: { fontSize: 103 },
									spacing: {
										margin: {
											top: '0px',
											right: '0px',
											bottom: '0px',
											left: '0px',
										},
									},
								},
							},
							innerBlocks: [],
						},
					],
				},
			],
		},
		{
			name: 'core/columns',
			attributes: { isStackedOnMobile: true, align: 'wide' },
			innerBlocks: [
				{
					name: 'core/column',
					attributes: { width: '60%' },
					innerBlocks: [
						{
							name: 'core/paragraph',
							attributes: {
								content:
									'Don’t hesitate to reach out with the contact information below, or send a message using the form.',
								dropCap: false,
								style: { typography: { fontSize: 20 } },
							},
							innerBlocks: [],
						},
						{
							name: 'core/columns',
							attributes: { isStackedOnMobile: true },
							innerBlocks: [
								{
									name: 'core/column',
									attributes: [],
									innerBlocks: [
										{
											name:
												'crowdsignal-forms/text-input',
											attributes: {
												label: 'Name',
												placeholder: '',
												mandatory: false,
												inputHeight: '',
												inputWidth: '100%',
												validation: null,
											},
											innerBlocks: [],
										},
									],
								},
								{
									name: 'core/column',
									attributes: [],
									innerBlocks: [
										{
											name:
												'crowdsignal-forms/text-input',
											attributes: {
												label: 'Email',
												placeholder:
													'example@domain.com',
												mandatory: true,
												inputHeight: '',
												inputWidth: '100%',
												validation: [
													'emailValidation',
												],
											},
											innerBlocks: [],
										},
									],
								},
							],
						},
						{
							name: 'crowdsignal-forms/text-input',
							attributes: {
								label: 'Message',
								placeholder: '',
								mandatory: false,
								inputHeight: 190,
								inputWidth: '632px',
								validation: null,
							},
							innerBlocks: [],
						},
						{
							name: 'crowdsignal-forms/submit-button',
							attributes: { label: 'Submit' },
							innerBlocks: [],
						},
					],
				},
				{
					name: 'core/column',
					attributes: { width: '40%' },
					innerBlocks: [
						{
							name: 'core/image',
							attributes: {
								url:
									'https://images.unsplash.com/photo-1512415031623-5c8392938dc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
								alt: '',
								caption: '',
								width: 413,
								height: 413,
								sizeSlug: 'large',
							},
							innerBlocks: [],
						},
					],
				},
			],
		},
	],
};
