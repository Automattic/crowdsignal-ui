/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const LARGE_HEADER_WITH_SMALL_LEFT_ALIGNED_TEXT = {
	name: 'large-header-with-small-left-aligned-text',
	title: 'Large header with small left-aligned text',
	description: '',
	categories: [ CATEGORY_NAMES.COVER ],
	content: [
		{
			name: 'core/cover',
			attributes: {
				url: 'https://s.w.org/images/core/5.8/forest.jpg',
				useFeaturedImage: false,
				alt: '',
				hasParallax: false,
				isRepeated: false,
				dimRatio: 40,
				backgroundType: 'image',
				minHeight: 800,
				isDark: false,
				align: 'full',
			},
			innerBlocks: [
				{
					name: 'core/heading',
					attributes: {
						content: '<strong>Forest.</strong>',
						level: 1,
						align: 'wide',
						style: {
							color: { text: '#ffe074' },
							typography: { fontSize: '64px' },
						},
					},
					innerBlocks: [],
				},
				{
					name: 'core/columns',
					attributes: { isStackedOnMobile: true, align: 'wide' },
					innerBlocks: [
						{
							name: 'core/column',
							attributes: { width: '55%' },
							innerBlocks: [
								{
									name: 'core/spacer',
									attributes: { height: '330px' },
									innerBlocks: [],
								},
								{
									name: 'core/paragraph',
									attributes: {
										content:
											'<em>Even a child knows how valuable the forest is. The fresh, breathtaking smell of trees. Echoing birds flying above that dense magnitude. A stable climate, a sustainable diverse life and a source of culture. Yet, forests and other ecosystems hang in the balance, threatened to become croplands, pasture, and plantations.</em>',
										dropCap: false,
										style: {
											color: { text: '#ffe074' },
											typography: {
												lineHeight: '1.3',
												fontSize: '12px',
											},
										},
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
									name: 'core/spacer',
									attributes: { height: '330px' },
									innerBlocks: [],
								},
								{
									name: 'crowdsignal-forms/submit-button',
									attributes: {
										label: 'Join our workshop',
										backgroundColor: '#ffe074',
										textColor: '#000000',
										justification: 'right',
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
