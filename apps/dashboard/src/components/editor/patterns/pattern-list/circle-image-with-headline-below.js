/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const CIRCLE_IMAGE_WITH_HEADLINE_BELOW = {
	name: 'circle-image-with-headline-below',
	title: 'Circle image with headline below',
	description: '',
	categories: [ CATEGORY_NAMES.COVER ],
	content: [
		{
			name: 'core/image',
			attributes: {
				align: 'center',
				url:
					'https://images.unsplash.com/photo-1592413890637-ea80fb4ed093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
				alt: '',
				caption: '',
				width: 225,
				height: 300,
				sizeSlug: 'large',
				className: 'is-style-rounded',
			},
			innerBlocks: [],
		},
		{
			name: 'core/heading',
			attributes: {
				textAlign: 'center',
				content: '<strong>Did you enjoy your icecream today?</strong>',
				level: 2,
			},
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/submit-button',
			attributes: { label: 'Let us know', justification: 'center' },
			innerBlocks: [],
		},
	],
};
