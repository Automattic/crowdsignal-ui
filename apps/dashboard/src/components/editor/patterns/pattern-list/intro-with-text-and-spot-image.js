/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const INTRO_WITH_TEXT_AND_SPOT_IMAGE = {
	name: 'intro-with-text-and-spot-image',
	title: 'Intro with text and spot image',
	description: '',
	categories: [ CATEGORY_NAMES.COVER ],
	content: [
		{
			name: 'core/cover',
			attributes: {
				url:
					'https://dotcompatterns.files.wordpress.com/2020/08/dots_bg.png',
				useFeaturedImage: false,
				id: 1933,
				alt: '',
				hasParallax: false,
				isRepeated: false,
				dimRatio: 0,
				backgroundType: 'image',
				focalPoint: { x: '0.50', y: '0.40' },
				minHeight: 48,
				minHeightUnit: 'vw',
				isDark: false,
				align: 'full',
				style: { spacing: { padding: { left: '100px' } } },
			},
			innerBlocks: [
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
							attributes: {
								verticalAlignment: 'center',
								width: '35.5%',
							},
							innerBlocks: [
								{
									name: 'core/paragraph',
									attributes: {
										content: 'Welcome to',
										dropCap: false,
										className: 'margin-bottom-none',
										style: {
											color: { text: '#202020' },
											typography: { fontSize: 18 },
										},
									},
									innerBlocks: [],
								},
								{
									name: 'core/heading',
									attributes: {
										content:
											'<strong>Lifelong Learner</strong>',
										level: 2,
										className: 'margin-top-half',
										style: {
											typography: {
												lineHeight: '1',
												fontSize: 77,
											},
											color: { text: '#202020' },
										},
									},
									innerBlocks: [],
								},
								{
									name: 'core/paragraph',
									attributes: {
										content:
											'This is my little corner of the Internet, where I talk about homeschooling, planning, journaling, and more!',
										dropCap: false,
										style: {
											color: { text: '#202020' },
											typography: { fontSize: 18 },
										},
									},
									innerBlocks: [],
								},
								{
									name: 'core/paragraph',
									attributes: {
										content:
											'<em>We would love to ask you a few questions about our site:</em>',
										dropCap: false,
										style: {
											color: { text: '#202020' },
											typography: { fontSize: 18 },
										},
									},
									innerBlocks: [],
								},
								{
									name: 'crowdsignal-forms/submit-button',
									attributes: { label: 'Get Started' },
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
										align: 'center',
										url:
											'https://dotcompatterns.files.wordpress.com/2020/10/sai-de-silva-4-gfgb12hfa-unsplash-2-1.jpg?w=1024',
										alt: '',
										caption: '',
										id: 2693,
										width: 500,
										height: 500,
										sizeSlug: 'large',
										className: 'is-style-rounded',
									},
									innerBlocks: [],
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
