/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const TEXT_WITH_LOGOS = {
	name: 'text-with-logos',
	title: 'Text with Logos',
	description: '',
	categories: [ CATEGORY_NAMES.CONFIRMATION ],
	content: [
		{
			name: 'core/group',
			attributes: { tagName: 'div' },
			innerBlocks: [
				{
					name: 'core/paragraph',
					attributes: {
						align: 'center',
						content:
							'Thank you so much for your response and your insights.',
						dropCap: false,
						style: {
							typography: { fontSize: '26px', lineHeight: '1.5' },
						},
					},
					innerBlocks: [],
				},
				{
					name: 'core/spacer',
					attributes: { height: '30px' },
					innerBlocks: [],
				},
				{
					name: 'core/paragraph',
					attributes: {
						align: 'center',
						content: 'Appreciated by your media group.',
						dropCap: false,
						style: {
							color: { text: '#797979' },
							typography: { fontSize: '18px', lineHeight: 1 },
						},
					},
					innerBlocks: [],
				},
			],
		},
		{
			name: 'core/group',
			attributes: { tagName: 'div', align: 'wide' },
			innerBlocks: [
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
										align: 'center',
										url:
											'https://dotcompatterns.files.wordpress.com/2020/05/frame-10-1.png?w=600',
										alt: '',
										caption: '',
										id: 755,
										sizeSlug: 'large',
										linkDestination: 'none',
									},
									innerBlocks: [],
								},
							],
						},
						{
							name: 'core/column',
							attributes: [],
							innerBlocks: [
								{
									name: 'core/image',
									attributes: {
										align: 'center',
										url:
											'https://dotcompatterns.files.wordpress.com/2020/05/frame-11-2.png?w=600',
										alt: '',
										caption: '',
										id: 766,
										sizeSlug: 'large',
										linkDestination: 'none',
									},
									innerBlocks: [],
								},
							],
						},
						{
							name: 'core/column',
							attributes: [],
							innerBlocks: [
								{
									name: 'core/image',
									attributes: {
										align: 'center',
										url:
											'https://dotcompatterns.files.wordpress.com/2020/05/frame-12-1.png?w=600',
										alt: '',
										caption: '',
										id: 753,
										sizeSlug: 'large',
										linkDestination: 'none',
									},
									innerBlocks: [],
								},
							],
						},
						{
							name: 'core/column',
							attributes: [],
							innerBlocks: [
								{
									name: 'core/image',
									attributes: {
										align: 'center',
										url:
											'https://dotcompatterns.files.wordpress.com/2020/05/frame-13-1.png?w=600',
										alt: '',
										caption: '',
										id: 752,
										sizeSlug: 'large',
										linkDestination: 'none',
									},
									innerBlocks: [],
								},
							],
						},
						{
							name: 'core/column',
							attributes: [],
							innerBlocks: [
								{
									name: 'core/image',
									attributes: {
										url:
											'https://dotcompatterns.files.wordpress.com/2021/02/frame-9.png?w=600',
										alt: '',
										caption: '',
										id: 4767,
										sizeSlug: 'large',
										linkDestination: 'none',
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
