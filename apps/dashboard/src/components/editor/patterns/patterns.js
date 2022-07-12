/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from './categories';

const SIMPLE_CONTACT_FORM_01 = {
	name: 'simple-contact-form-01',
	title: 'Simple Contact Form',
	description: 'A simple contact form',
	categories: [ CATEGORY_NAMES.CONTACT_FORMS ],
	content: [
		{
			name: 'crowdsignal-forms/text-input',
			attributes: {
				label: 'Name',
			},
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/text-input',
			attributes: {
				label: 'Email',
				validation: [ 'emailValidation' ],
			},
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/submit-button',
			attributes: {
				label: 'Submit',
			},
			innerBlocks: [],
		},
	],
};

export default [ SIMPLE_CONTACT_FORM_01 ];
