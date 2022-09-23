/**
 * External dependencies
 */
import { v4 as uuid } from 'uuid';

/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const REGISTRATION_FORM = {
	name: 'registration-form',
	title: 'Registration Form',
	description: '',
	categories: [ CATEGORY_NAMES.REGISTRATION ],
	content: [
		{
			name: 'crowdsignal-forms/text-input',
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
				label: 'Phone Number',
				placeholder: '',
				mandatory: false,
				inputHeight: '',
				inputWidth: '100%',
				validation: null,
			},
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/text-input',
			attributes: {
				label: 'Website',
				placeholder: 'https://example.com',
				mandatory: false,
				inputHeight: '',
				inputWidth: '100%',
				validation: [ 'urlValidation' ],
			},
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/dropdown-input',
			attributes: {
				label: 'How did you hear about us?',
				buttonLabel: '',
				options: [
					{
						clientId: uuid(),
						label: 'Search Engine',
					},
					{
						clientId: uuid(),
						label: 'Social Media',
					},
					{
						clientId: uuid(),
						label: 'TV',
					},
					{
						clientId: uuid(),
						label: 'Radio',
					},
					{
						clientId: uuid(),
						label: 'Friend or Family',
					},
				],
				mandatory: false,
				maximumChoices: 1,
			},
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/text-input',
			attributes: {
				label: 'Other Details',
				placeholder: '',
				mandatory: false,
				inputHeight: '',
				inputWidth: '100%',
				validation: null,
			},
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/submit-button',
			attributes: { label: 'Send' },
			innerBlocks: [],
		},
	],
};
