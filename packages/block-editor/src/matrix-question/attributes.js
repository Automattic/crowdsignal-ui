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
};
