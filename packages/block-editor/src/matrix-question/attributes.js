export default {
	clientId: {
		type: 'string',
		default: null,
	},
	question: {
		type: 'string',
		default: null,
	},
	columns: {
		type: 'array',
		default: [
			{
				clientId: 'a',
				label: 'A',
			},
			{
				clientId: 'b',
				label: 'B',
			},
			{
				clientId: 'c',
				label: 'C',
			},
		],
	},
	rows: {
		type: 'array',
		default: [
			{
				clientId: 'd',
				label: '1',
			},
			{
				clientId: 'e',
				label: '2',
			},
			{
				clientId: 'f',
				label: '3',
			},
		],
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
	width: {
		type: 'number',
	},
};
