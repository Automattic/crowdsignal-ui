import { RatingScaleQuestion } from '@crowdsignal/blocks';

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
	scaleLength: {
		type: 'number',
		default: 5,
	},
	ratingStyle: {
		type: 'string',
		default: RatingScaleQuestion.Style.EMOJI,
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
