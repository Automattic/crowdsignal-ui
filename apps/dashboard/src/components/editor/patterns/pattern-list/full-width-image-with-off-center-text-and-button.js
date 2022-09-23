/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const FULL_WIDTH_IMAGE_WITH_OFF_CENTER_TEXT_AND_BUTTON = {
	name: 'full-width-image-with-off-center-text-and-button',
	title: 'Full width image with off center text and button',
	description: '',
	categories: [ CATEGORY_NAMES.COVER ],
	content: [
		{
			name: 'core/cover',
			attributes: {
				url:
					'https://dotcompatterns.files.wordpress.com/2020/08/matthew-henry-kq3mxxdgeom-unsplash-edit.jpg',
				useFeaturedImage: false,
				id: 1866,
				alt: '',
				hasParallax: false,
				isRepeated: false,
				dimRatio: 0,
				backgroundType: 'image',
				minHeight: 50,
				minHeightUnit: 'vw',
				contentPosition: 'center center',
				isDark: false,
				align: 'full',
				style: {
					spacing: {
						padding: {
							right: '16px',
							bottom: '32px',
							left: '50vw',
							top: '32px',
						},
					},
				},
			},
			innerBlocks: [
				{
					name: 'core/heading',
					attributes: {
						content: '<strong>Just arrived.</strong>',
						level: 2,
						anchor: 'just-arrived',
						style: {
							typography: {
								fontSize: '40px',
								lineHeight: '1.2',
								fontStyle: 'normal',
								fontWeight: '500',
							},
							color: { text: '#000000' },
							spacing: {
								margin: {
									top: '0px',
									right: '0px',
									bottom: '0px',
									left: '0px',
								},
							},
						},
					},
					innerBlocks: [],
				},
				{
					name: 'core/paragraph',
					attributes: {
						content: 'Our early autumn collection is here.',
						dropCap: false,
						style: {
							color: { text: '#000000' },
							typography: {
								fontSize: '16px',
								lineHeight: '1.75',
							},
						},
					},
					innerBlocks: [],
				},
				{
					name: 'crowdsignal-forms/submit-button',
					attributes: { label: 'Start ordering' },
					innerBlocks: [],
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
