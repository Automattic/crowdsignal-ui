export default {
	clientId: {
		type: 'string',
		default: null,
	},
	label: {
		type: 'string',
		default: null,
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
		default: null,
	},
	borderWidth: {
		type: 'number',
		default: null,
	},
	gradient: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
};
