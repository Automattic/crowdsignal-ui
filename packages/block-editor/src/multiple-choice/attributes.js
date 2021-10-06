import { ChoiceType } from './constants';

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
	// should this be an entry on restrictions?
	mandatory: {
		type: 'boolean',
		default: false,
	},
	allowOther: {
		type: 'boolean',
		default: false,
	},
	choiceType: {
		type: 'number',
		default: ChoiceType.SINGLE,
	},
	minimumChoices: {
		type: 'number',
		default: 1,
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
