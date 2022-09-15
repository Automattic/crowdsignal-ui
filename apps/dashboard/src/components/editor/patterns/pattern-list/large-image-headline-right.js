/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const LARGE_IMAGE_HEADLINE_RIGHT = {
	name: 'large-image-headline-right',
	title: 'Large Image Headline Right',
	description: '',
	categories: [ CATEGORY_NAMES.COVER ],
	content: [
		{
			name: 'core/cover',
			attributes: {
				url:
					'https://dotcompatterns.files.wordpress.com/2020/07/sawyer-bengtson-ltc4dxneezu-unsplash-edit.jpg',
				useFeaturedImage: false,
				id: 1640,
				alt: '',
				hasParallax: false,
				isRepeated: false,
				dimRatio: 0,
				backgroundType: 'image',
				focalPoint: { x: '0.00', y: '0.60' },
				minHeight: 760,
				minHeightUnit: 'px',
				isDark: false,
				align: 'full',
			},
			innerBlocks: [
				{
					name: 'core/group',
					attributes: { tagName: 'div', layout: { inherit: true } },
					innerBlocks: [
						{
							name: 'core/columns',
							attributes: {
								isStackedOnMobile: true,
								align: 'wide',
							},
							innerBlocks: [
								{
									name: 'core/column',
									attributes: [],
									innerBlocks: [],
								},
								{
									name: 'core/column',
									attributes: [],
									innerBlocks: [
										{
											name: 'core/heading',
											attributes: {
												content:
													'<strong>Take your fitness to the next level</strong>',
												level: 1,
												className: 'margin-bottom-half',
												style: {
													typography: {
														fontSize: 50,
														lineHeight: '1.2',
													},
													color: { text: '#151515' },
												},
											},
											innerBlocks: [],
										},
										{
											name: 'core/paragraph',
											attributes: {
												content:
													'Get personalized training and coaching designed specifically for your unique lifestyle.',
												dropCap: false,
												placeholder: 'Write titleu2026',
												className: 'margin-top-half',
												style: {
													typography: {
														lineHeight: '1.65',
														fontSize: 17,
													},
													color: { text: '#151515' },
												},
											},
											innerBlocks: [],
										},
										{
											name:
												'crowdsignal-forms/submit-button',
											attributes: {
												label: 'Get started',
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
		},
		{
			name: 'core/spacer',
			attributes: {
				height: '10px',
			},
			innerBlocks: [],
		},
	],
};
