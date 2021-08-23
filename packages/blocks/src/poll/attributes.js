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
	// Style attributes, should follow the name scheme supported by @crowdsignal/styles helpers.
	backgroundColor: {
		type: 'string',
	},
	borderColor: {
		type: 'string',
	},
	borderRadius: {
		type: 'number',
		default: 0,
	},
	boxShadow: {
		type: 'boolean',
		default: false,
	},
	borderWidth: {
		type: 'number',
		default: 2,
	},
	fontFamily: {
		type: 'string',
	},
	gradient: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	width: {
		type: 'number',
		default: 100,
	},
};
