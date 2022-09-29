export default {
	clientId: {
		type: 'string',
		default: null,
	},
	label: {
		type: 'string',
		default: '',
	},
	mandatory: {
		type: 'boolean',
		default: false,
	},
	textColor: {
		type: 'string',
	},
	backgroundColor: {
		type: 'string',
	},
	showTimeInput: {
		type: 'boolean',
		default: false,
	},
	showTimeSelectOnly: {
		type: 'boolean',
		default: false,
	},
	dateFormat: {
		type: 'string',
		default: 'MMMM d, yyyy',
	},
	placeholderText: {
		type: 'string',
		default: 'July 16, 1969',
	},
};
