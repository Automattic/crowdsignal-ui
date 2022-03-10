export default {
	clientId: {
		type: 'string',
		default: null,
	},
	label: {
		type: 'string',
		default: null,
	},
	shareSiblingAttributes: {
		type: 'boolean',
		default: true,
	},
	weight: {
		type: 'number',
		default: 0,
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
};
