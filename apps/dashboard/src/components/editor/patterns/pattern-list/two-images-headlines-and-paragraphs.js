/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const TWO_IMAGES_HEADLINES_AND_PARAGRAPHS = {
	name: 'two-images-headlines-and-paragraphs',
	title: 'Two Images, headlines and paragraphs',
	description: '',
	categories: [ CATEGORY_NAMES.COVER ],
	content: [
		{
			name: 'core/columns',
			attributes: { isStackedOnMobile: true, align: 'wide' },
			innerBlocks: [
				{
					name: 'core/column',
					attributes: [],
					innerBlocks: [
						{
							name: 'core/image',
							attributes: {
								align: 'wide',
								url:
									'https://dotcompatterns.files.wordpress.com/2020/07/kam-idris-kyt0pkbscnq-unsplash-edit-1.jpg?w=1024',
								alt: '',
								caption: '',
								id: 1844,
								sizeSlug: 'large',
							},
							innerBlocks: [],
						},
						{
							name: 'core/heading',
							attributes: {
								content: '<strong>Bedroom</strong>',
								level: 3,
								className: 'margin-bottom-half',
								style: {
									typography: {
										fontSize: 35,
										lineHeight: '1.26',
									},
								},
							},
							innerBlocks: [],
						},
						{
							name: 'core/paragraph',
							attributes: {
								content:
									'Bohemian, mid-century, baroque or Scandi. Whatever your style is, we have it. Check out now our curated list of bedroom design trends.',
								dropCap: false,
								className: 'margin-top-half',
								style: {
									typography: {
										fontSize: 17,
										lineHeight: '1.65',
									},
								},
							},
							innerBlocks: [],
						},
						{
							name: 'crowdsignal-forms/submit-button',
							attributes: { label: 'Book now' },
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
									'https://dotcompatterns.files.wordpress.com/2020/07/kam-idris-_hqhx3lbn18-unsplash-edit-2.jpg?w=1024',
								alt: '',
								caption: '',
								id: 1843,
								sizeSlug: 'full',
							},
							innerBlocks: [],
						},
						{
							name: 'core/heading',
							attributes: {
								content: '<strong>Living Room</strong>',
								level: 3,
								className: 'margin-bottom-half',
								style: {
									typography: {
										fontSize: 35,
										lineHeight: '1.26',
									},
								},
							},
							innerBlocks: [],
						},
						{
							name: 'core/paragraph',
							attributes: {
								content:
									'Whether your want a space to entertain or a place to relax our latest collection of living room design ideas will have something for you.',
								dropCap: false,
								className: 'margin-top-half',
								style: {
									typography: {
										fontSize: 17,
										lineHeight: '1.65',
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
};
