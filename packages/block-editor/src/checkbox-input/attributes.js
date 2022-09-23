export default {
	clientId: {
		type: 'string',
		default: null,
	},
	label: {
		type: 'string',
		default: null,
	},
	checkedText: {
		type: 'string',
		default: 'checked',
	},
	uncheckedText: {
		type: 'string',
		default: 'unchecked',
	},
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
		default: '',
	},
	boxShadow: {
		type: 'boolean',
		default: false,
	},
	borderWidth: {
		type: 'number',
		default: '',
	},
	gradient: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
};
