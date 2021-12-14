export default {
	clientId: {
		type: 'string',
		default: null,
	},
	question: {
		type: 'string',
		default: null,
	},
	// should this be an entry on restrictions?
	mandatory: {
		type: 'boolean',
		default: false,
	},
	allowOther: {
		type: 'boolean',
		default: false,
	},
	minimumChoices: {
		type: 'number',
		default: 0,
	},
	maximumChoices: {
		type: 'number',
		default: 1,
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
		default: true,
	},
	borderWidth: {
		type: 'number',
		default: 0,
	},
	gradient: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
};
