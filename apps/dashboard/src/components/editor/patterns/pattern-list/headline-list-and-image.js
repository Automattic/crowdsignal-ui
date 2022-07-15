/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const HEADLINE_LIST_AND_IMAGE = {
	name: 'headline-list-and-image',
	title: 'Headline, list and image',
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
							name: 'core/heading',
							attributes: {
								content:
									'<strong>Sign up for a gym membership:</strong>',
								level: 2,
								style: {
									typography: {
										fontSize: 50,
										lineHeight: '1.2',
									},
									spacing: { margin: { top: '0px' } },
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
							name: 'core/paragraph',
							attributes: {
								content:
									'As a club member you will have access to:',
								dropCap: false,
							},
							innerBlocks: [],
						},
						{
							name: 'core/list',
							attributes: {
								ordered: false,
								values:
									'<li>An in-depth, personalized consultation to set goals and establish a plan</li><li>Check-ins with me every 2 weeks</li><li>5 workout regimens a week catered to your goals and progress</li><li>Nutrition recommendations to support your target goals</li>',
							},
							innerBlocks: [],
						},
						{
							name: 'crowdsignal-forms/submit-button',
							attributes: {
								label: 'Get started',
								justification: 'right',
							},
							innerBlocks: [],
						},
					],
				},
			],
		},
		{
			name: 'core/image',
			attributes: {
				align: 'full',
				url:
					'https://dotcompatterns.files.wordpress.com/2020/11/elena-kloppenburg-eruc4fttcuo-unsplash.jpg',
				alt: '',
				caption: '',
				id: 3025,
				sizeSlug: 'full',
				linkDestination: 'none',
			},
			innerBlocks: [],
		},
	],
};
