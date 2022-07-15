/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const EVENT_RSVP_FORM = {
	name: 'event-rsvp-form',
	title: 'Event RSVP Form',
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
				label: 'Number of guests',
				placeholder: '',
				mandatory: false,
				inputHeight: '',
				inputWidth: '100%',
				validation: null,
			},
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/multiple-choice-question',
			attributes: {
				question: 'Are you attending?',
				mandatory: false,
				allowOther: false,
				minimumChoices: 0,
				maximumChoices: 1,
				borderRadius: '',
				boxShadow: false,
				borderWidth: '',
				className: 'is-style-button',
			},
			innerBlocks: [
				{
					name: 'crowdsignal-forms/multiple-choice-answer',
					attributes: { label: 'Yes', shareSiblingAttributes: true },
					innerBlocks: [],
				},
				{
					name: 'crowdsignal-forms/multiple-choice-answer',
					attributes: { label: 'No', shareSiblingAttributes: true },
					innerBlocks: [],
				},
			],
		},
		{
			name: 'crowdsignal-forms/submit-button',
			attributes: { label: 'Send RSVP' },
			innerBlocks: [],
		},
	],
};
