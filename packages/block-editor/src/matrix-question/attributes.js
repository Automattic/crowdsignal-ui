export default {
	clientId: {
		type: 'string',
		default: null,
	},
	question: {
		type: 'string',
		default: null,
	},
	mandatory: {
		type: 'boolean',
		default: false,
	},
	multipleChoice: {
		type: 'boolean',
		default: true,
	},
	columns: {
		type: 'array',
		default: [],
	},
	rows: {
		type: 'array',
		default: [],
	},
	tableBorderColor: {
		type: 'string',
	},
	// Style attributes, should follow the name scheme supported by @crowdsignal/styles helpers.
	backgroundColor: {
		type: 'string',
	},
	borderColor: {
		type: 'string',
	},
	borderRadius: {
		type: 'string',
	},
	borderWidth: {
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
	},
};
