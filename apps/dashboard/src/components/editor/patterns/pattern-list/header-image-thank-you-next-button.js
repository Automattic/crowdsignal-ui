/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const HEADER_IMAGE_THANK_YOU_NEXT_BUTTON = {
	name: 'header-image-thank-you-next-button',
	title: 'Header Image, Thank You, Next Button',
	description: '',
	categories: [ CATEGORY_NAMES.CONFIRMATION ],
	content: [
		{
			name: 'core/image',
			attributes: {
				align: 'full',
				url:
					'https://s.w.org/patterns/files/2021/06/Group-17-scaled.jpg',
				alt: 'Image of a woman being carried through the air by swans.',
				caption: '',
				id: 501,
				sizeSlug: 'full',
				linkDestination: 'none',
			},
			innerBlocks: [],
		},
		{
			name: 'core/spacer',
			attributes: { height: '40px' },
			innerBlocks: [],
		},
		{
			name: 'core/columns',
			attributes: {
				verticalAlignment: 'center',
				isStackedOnMobile: true,
				align: 'wide',
			},
			innerBlocks: [
				{
					name: 'core/column',
					attributes: { verticalAlignment: 'center' },
					innerBlocks: [
						{
							name: 'core/paragraph',
							attributes: {
								content:
									'<strong>Thank you for your response!</strong><br>We will reach out to you!',
								dropCap: false,
								style: { typography: { lineHeight: '2' } },
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
							name: 'core/paragraph',
							attributes: {
								content: '<br>',
								dropCap: false,
								style: { typography: { lineHeight: '2' } },
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
							name: 'core/buttons',
							attributes: [],
							innerBlocks: [
								{
									name: 'core/button',
									attributes: {
										text: 'Go back to our blog',
										width: 100,
										style: {
											color: {
												background: '#262626',
												text: '#efefef',
											},
										},
									},
									innerBlocks: [],
								},
							],
						},
					],
				},
			],
		},
	],
};
