/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const THANK_YOU_IMAGE_RIGHT = {
	name: 'thank-you-image-right',
	title: 'Thank You - Image right',
	description: '',
	categories: [ CATEGORY_NAMES.CONFIRMATION ],
	content: [
		{
			name: 'core/columns',
			attributes: {
				verticalAlignment: 'center',
				isStackedOnMobile: true,
			},
			innerBlocks: [
				{
					name: 'core/column',
					attributes: { verticalAlignment: 'center' },
					innerBlocks: [
						{
							name: 'core/paragraph',
							attributes: {
								align: 'left',
								content:
									'<strong>We thank you for your time spent taking this survey.</strong>',
								dropCap: false,
								style: {
									typography: {
										lineHeight: '1.2',
										fontSize: '36px',
									},
								},
							},
							innerBlocks: [],
						},
						{
							name: 'core/paragraph',
							attributes: {
								align: 'left',
								content: 'Your response has been recorded.',
								dropCap: false,
								fontSize: 'extra-small',
							},
							innerBlocks: [],
						},
					],
				},
				{
					name: 'core/column',
					attributes: { verticalAlignment: 'center' },
					innerBlocks: [
						{
							name: 'core/image',
							attributes: {
								url:
									'https://s.w.org/patterns/files/2021/06/pear-1-1024x1024.png',
								alt: '',
								caption: '',
								sizeSlug: 'large',
							},
							innerBlocks: [],
						},
					],
				},
			],
		},
	],
};
