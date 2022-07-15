/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const IMAGE_AND_TEXT_SIDE_BY_SIDE = {
	name: 'image-and-text-side-by-side',
	title: 'Image and Text Side by Side',
	description: '',
	categories: [ CATEGORY_NAMES.COVER ],
	content: [
		{
			name: 'core/columns',
			attributes: { isStackedOnMobile: true },
			innerBlocks: [
				{
					name: 'core/column',
					attributes: [],
					innerBlocks: [
						{
							name: 'core/image',
							attributes: {
								url:
									'https://dotcompatterns.files.wordpress.com/2020/09/andrei-slobtsov-med3kuxz97c-unsplash.jpg',
								alt: '',
								caption: '',
								id: 2190,
								sizeSlug: 'full',
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
							name: 'core/group',
							attributes: {
								tagName: 'div',
								layout: { contentSize: '500px' },
							},
							innerBlocks: [
								{
									name: 'core/heading',
									attributes: {
										textAlign: 'center',
										content:
											'<strong>We have been waiting for you!</strong>',
										level: 2,
										style: {
											typography: {
												fontSize: 77,
												lineHeight: 1,
											},
										},
									},
									innerBlocks: [],
								},
								{
									name: 'core/separator',
									attributes: {
										opacity: 'css',
										style: {
											color: { background: '#14310d' },
										},
									},
									innerBlocks: [],
								},
								{
									name: 'core/paragraph',
									attributes: {
										align: 'center',
										content:
											'Thank you so much for joining our next conference!<br>Please fill out the following survey so we can prepare everything for you before your arrival.',
										dropCap: false,
										style: {
											typography: { fontSize: 18 },
											color: { text: '#14310d' },
										},
									},
									innerBlocks: [],
								},
								{
									name: 'core/spacer',
									attributes: { height: '64px' },
									innerBlocks: [],
								},
								{
									name: 'crowdsignal-forms/submit-button',
									attributes: {
										label: 'Next',
										justification: 'center',
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
