/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const FULL_WIDTH_IMAGE_WITH_TEXT_AND_BUTTON_OVERLAY = {
	name: 'full-width-image-with-text-and-button-overlay',
	title: 'Full-width image with text and button overlay',
	description: '',
	categories: [ CATEGORY_NAMES.COVER ],
	content: [
		{
			name: 'core/cover',
			attributes: {
				url:
					'https://i1.wp.com/files.polldaddy.com/f9d3b6681520a9d66a3d9da83ae71f85-62ceccb307764.jpg',
				useFeaturedImage: false,
				alt: 'boatmountain',
				hasParallax: false,
				isRepeated: false,
				dimRatio: 0,
				customOverlayColor: '#000000',
				backgroundType: 'image',
				focalPoint: { x: '0.98', y: '0.46' },
				minHeight: 48,
				minHeightUnit: 'vw',
				isDark: false,
				align: 'full',
				style: { spacing: { padding: { left: '60px' } } },
			},
			innerBlocks: [
				{
					name: 'core/columns',
					attributes: { isStackedOnMobile: true },
					innerBlocks: [
						{
							name: 'core/column',
							attributes: { width: '40%' },
							innerBlocks: [
								{
									name: 'core/heading',
									attributes: {
										content: 'YOUR FEEDBACK',
										level: 6,
									},
									innerBlocks: [],
								},
								{
									name: 'core/heading',
									attributes: {
										content:
											'<strong>How was your stay with us?</strong>',
										level: 1,
										fontSize: 'huge',
									},
									innerBlocks: [],
								},
								{
									name: 'crowdsignal-forms/submit-button',
									attributes: { label: 'Let us know' },
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
