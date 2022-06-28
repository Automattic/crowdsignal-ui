export default {
	clientId: {
		type: 'string',
		default: null,
	},
	label: {
		type: 'string',
		default: '',
	},
	buttonLabel: {
		type: 'string',
		default: '',
	},
	options: {
		type: 'array',
		default: [],
	},
	mandatory: {
		type: 'boolean',
		default: false,
	},
	maximumChoices: {
		type: 'number',
		default: 1,
	},
	// Style attributes, should follow the name scheme supported by @crowdsignal/styles helpers.
	backgroundColor: {
		type: 'string',
	},
	gradient: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	inputWidth: {
		type: 'string',
	},
};
