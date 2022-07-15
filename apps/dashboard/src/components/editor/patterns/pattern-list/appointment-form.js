/**
 * External dependencies
 */
import { v4 as uuid } from 'uuid';

/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const APPOINTMENT_FORM = {
	name: 'appointment-form',
	title: 'Appointment Form',
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
			name: 'crowdsignal-forms/dropdown-input',
			attributes: {
				label: 'Time',
				buttonLabel: 'Choose a time',
				options: [
					{
						clientId: uuid(),
						label: '09:00',
					},
					{
						clientId: uuid(),
						label: '10:00',
					},
					{
						clientId: uuid(),
						label: '11:00',
					},
					{
						clientId: uuid(),
						label: '12:00',
					},
					{
						clientId: uuid(),
						label: '13:00',
					},
					{
						clientId: uuid(),
						label: '14:00',
					},
					{
						clientId: uuid(),
						label: '15:00',
					},
					{
						clientId: uuid(),
						label: '16:00',
					},
					{
						clientId: uuid(),
						label: '17:00',
					},
					{
						clientId: uuid(),
						label: '18:00',
					},
					{
						clientId: uuid(),
						label: '19:00',
					},
					{
						clientId: uuid(),
						label: '20:00',
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
