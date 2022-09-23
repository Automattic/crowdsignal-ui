/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const GET_IN_TOUCH_NAME_EMAIL_MESSAGE = {
	name: 'get-in-touch-name-email-message',
	title: 'Get in Touch, Name, Email, Message',
	description: '',
	categories: [ CATEGORY_NAMES.CONTACT ],
	content: [
		{
			name: 'core/columns',
			attributes: { isStackedOnMobile: true, align: 'wide' },
			innerBlocks: [
				{
					name: 'core/column',
					attributes: { width: '33.33%' },
					innerBlocks: [
						{
							name: 'core/heading',
							attributes: {
								content: '<strong>Get in touch</strong>',
								level: 2,
								style: {
									typography: {
										fontSize: '53px',
										lineHeight: '1.1',
									},
									spacing: { margin: { top: '0px' } },
								},
							},
							innerBlocks: [],
						},
						{
							name: 'core/paragraph',
							attributes: {
								content:
									'Have something you want me to discuss on the podcast?',
								dropCap: false,
								style: { typography: { lineHeight: '1.65' } },
							},
							innerBlocks: [],
						},
						{
							name: 'core/paragraph',
							attributes: {
								content: 'Send us a message.',
								dropCap: false,
								style: { typography: { lineHeight: '1.65' } },
							},
							innerBlocks: [],
						},
					],
				},
				{
					name: 'core/column',
					attributes: { width: '66.66%' },
					innerBlocks: [
						{
							name: 'crowdsignal-forms/text-input',
							attributes: {
								label: 'Name',
								placeholder: '',
								mandatory: true,
								inputHeight: '',
								inputWidth: '100%',
								validation: null,
							},
							innerBlocks: [],
						},
						{
							name: 'crowdsignal-forms/text-input',
							attributes: {
								label: 'Email',
								placeholder: 'example@domain.com',
								mandatory: true,
								inputHeight: '',
								inputWidth: '100%',
								validation: [ 'emailValidation' ],
							},
							innerBlocks: [],
						},
						{
							name: 'crowdsignal-forms/text-input',
							attributes: {
								label: 'Message',
								placeholder: '',
								mandatory: false,
								inputHeight: 138,
								inputWidth: '702px',
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
			],
		},
	],
};
