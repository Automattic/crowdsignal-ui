export default {
	clientId: {
		type: 'string',
		default: null,
	},
	restrictions: {
		type: 'object',
		default: {},
	},
	question: {
		type: 'string',
		default: null,
	},
	note: {
		type: 'string',
		default: '',
	},
	placeholder: {
		type: 'string',
		default: '',
	},
	// should this be an entry on restrictions?
	mandatory: {
		type: 'boolean',
		default: false,
	},
	// Style attributes, should follow the name scheme supported by @crowdsignal/styles helpers.
	backgroundColor: {
		type: 'string',
	},
	borderColor: {
		type: 'string',
	},
	borderRadius: {
		type: 'number',
	},
	boxShadow: {
		type: 'boolean',
		default: false,
	},
	borderWidth: {
		type: 'number',
	},
	fontFamily: {
		type: 'string',
	},
	gradient: {
		type: 'string',
	},
	inputHeight: {
		type: 'string',
		default: '80px',
	},
	textColor: {
		type: 'string',
	},
	width: {
		type: 'number',
		default: 100,
	},
};
