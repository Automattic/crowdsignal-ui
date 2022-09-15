/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const HEADLINE_LEFT_AND_FULL_HEIGHT_IMAGE_RIGHT = {
	name: 'headline-left-and-full-height-image-right',
	title: 'Headline left and full height image right',
	description: '',
	categories: [ CATEGORY_NAMES.COVER ],
	content: [
		{
			name: 'core/columns',
			attributes: {
				verticalAlignment: 'center',
				isStackedOnMobile: true,
				align: 'full',
			},
			innerBlocks: [
				{
					name: 'core/column',
					attributes: {
						verticalAlignment: 'center',
						width: '50%',
						style: {
							spacing: { padding: { right: '10%', left: '10%' } },
						},
					},
					innerBlocks: [
						{
							name: 'core/heading',
							attributes: {
								content:
									'<strong>Brush up on cooking skills</strong>',
								level: 1,
								className: 'margin-bottom-none',
								style: {
									typography: {
										fontSize: '68px',
										lineHeight: '1',
									},
									color: { text: '#2f2f2f' },
								},
							},
							innerBlocks: [],
						},
						{
							name: 'core/paragraph',
							attributes: {
								content:
									'Sign up for our cooking classes to nudge your kitchen skills up a level.',
								dropCap: false,
								className: 'margin-top-half',
								style: {
									typography: { fontSize: 18 },
									color: { text: '#2f2f2f' },
								},
							},
							innerBlocks: [],
						},
						{
							name: 'crowdsignal-forms/submit-button',
							attributes: { label: 'Get started' },
							innerBlocks: [],
						},
					],
				},
				{
					name: 'core/column',
					attributes: { verticalAlignment: 'center', width: '50%' },
					innerBlocks: [
						{
							name: 'core/image',
							attributes: {
								url:
									'https://dotcompatterns.files.wordpress.com/2020/10/jake-charles-s7lyavkatre-unsplash.jpg',
								alt: '',
								caption: '',
								id: 2740,
								sizeSlug: 'full',
							},
							innerBlocks: [],
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
