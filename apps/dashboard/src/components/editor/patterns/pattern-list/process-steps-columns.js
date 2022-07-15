/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const PROCESS_STEPS_COLUMNS = {
	name: 'process-steps-columns',
	title: 'Process Steps - columns',
	description: '',
	categories: [ CATEGORY_NAMES.COVER ],
	content: [
		{
			name: 'core/heading',
			attributes: { content: '<strong>Our Process</strong>', level: 2 },
			innerBlocks: [],
		},
		{ name: 'core/spacer', attributes: { height: '1px' }, innerBlocks: [] },
		{
			name: 'core/columns',
			attributes: { isStackedOnMobile: true },
			innerBlocks: [
				{
					name: 'core/column',
					attributes: { width: '25%' },
					innerBlocks: [
						{
							name: 'core/paragraph',
							attributes: {
								content: '<strong>01</strong>',
								dropCap: false,
								className: 'margin-bottom-none',
								style: {
									typography: {
										fontSize: 120,
										lineHeight: '0.8',
									},
									color: { text: '#d3d3d3' },
								},
							},
							innerBlocks: [],
						},
						{
							name: 'core/group',
							attributes: {
								tagName: 'div',
								style: { spacing: { blockGap: '10px' } },
								layout: { inherit: false },
							},
							innerBlocks: [
								{
									name: 'core/separator',
									attributes: {
										opacity: 'css',
										className:
											'is-style-wide margin-top-none margin-bottom-none',
									},
									innerBlocks: [],
								},
								{
									name: 'core/heading',
									attributes: {
										content: '<strong>Strategy</strong>',
										level: 3,
										style: {
											typography: {
												lineHeight: '1.3',
												fontSize: 25,
											},
											spacing: {
												margin: {
													top: '16px',
													bottom: '0px',
												},
											},
										},
									},
									innerBlocks: [],
								},
								{
									name: 'core/paragraph',
									attributes: {
										content:
											'Always remember in the jungle there’s a lot of them in there, after you overcome them, you will make it to paradise.',
										dropCap: false,
										className: 'margin-top-half',
										style: { typography: { fontSize: 15 } },
									},
									innerBlocks: [],
								},
							],
						},
					],
				},
				{
					name: 'core/column',
					attributes: { width: '25%' },
					innerBlocks: [
						{
							name: 'core/paragraph',
							attributes: {
								content: '<strong>02</strong>',
								dropCap: false,
								className: 'margin-bottom-none',
								style: {
									typography: {
										fontSize: 120,
										lineHeight: '0.8',
									},
									color: { text: '#d3d3d3' },
								},
							},
							innerBlocks: [],
						},
						{
							name: 'core/group',
							attributes: {
								tagName: 'div',
								style: { spacing: { blockGap: '10px' } },
							},
							innerBlocks: [
								{
									name: 'core/separator',
									attributes: {
										opacity: 'css',
										className:
											'is-style-wide margin-top-none margin-bottom-none',
									},
									innerBlocks: [],
								},
								{
									name: 'core/heading',
									attributes: {
										content: '<strong>Design</strong>',
										level: 3,
										style: {
											typography: {
												lineHeight: '1.3',
												fontSize: 25,
											},
											spacing: {
												margin: {
													bottom: '10px',
													top: '10px',
												},
											},
										},
									},
									innerBlocks: [],
								},
								{
									name: 'core/paragraph',
									attributes: {
										content:
											'You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.',
										dropCap: false,
										className: 'margin-top-half',
										style: { typography: { fontSize: 15 } },
									},
									innerBlocks: [],
								},
							],
						},
					],
				},
				{
					name: 'core/column',
					attributes: { width: '25%' },
					innerBlocks: [
						{
							name: 'core/paragraph',
							attributes: {
								content: '<strong>03</strong>',
								dropCap: false,
								className: 'margin-bottom-none',
								style: {
									typography: {
										fontSize: 120,
										lineHeight: '0.8',
									},
									color: { text: '#d3d3d3' },
								},
							},
							innerBlocks: [],
						},
						{
							name: 'core/group',
							attributes: {
								tagName: 'div',
								style: { spacing: { blockGap: '10px' } },
							},
							innerBlocks: [
								{
									name: 'core/separator',
									attributes: {
										opacity: 'css',
										className:
											'is-style-wide margin-top-none margin-bottom-none',
									},
									innerBlocks: [],
								},
								{
									name: 'core/heading',
									attributes: {
										content: '<strong>Success</strong>',
										level: 3,
										style: {
											typography: {
												lineHeight: '1.3',
												fontSize: 25,
											},
											spacing: {
												margin: {
													bottom: '10px',
													top: '10px',
												},
											},
										},
									},
									innerBlocks: [],
								},
								{
									name: 'core/paragraph',
									attributes: {
										content:
											'We don’t see them, we will never see them. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it.',
										dropCap: false,
										className: 'margin-top-half',
										style: { typography: { fontSize: 15 } },
									},
									innerBlocks: [],
								},
							],
						},
					],
				},
				{
					name: 'core/column',
					attributes: { width: '25%' },
					innerBlocks: [
						{
							name: 'core/paragraph',
							attributes: {
								content: '<strong>04</strong>',
								dropCap: false,
								className: 'margin-bottom-none',
								style: {
									typography: {
										lineHeight: '0.8',
										fontSize: 120,
									},
									color: { text: '#d3d3d3' },
								},
							},
							innerBlocks: [],
						},
						{
							name: 'core/group',
							attributes: {
								tagName: 'div',
								style: { spacing: { blockGap: '10px' } },
							},
							innerBlocks: [
								{
									name: 'core/separator',
									attributes: {
										opacity: 'css',
										className:
											'is-style-wide margin-top-none margin-bottom-none',
									},
									innerBlocks: [],
								},
								{
									name: 'core/heading',
									attributes: {
										content: '<strong>Grow</strong>',
										level: 3,
										style: {
											typography: {
												lineHeight: '1.3',
												fontSize: 25,
											},
											spacing: {
												margin: {
													bottom: '10px',
													top: '10px',
												},
											},
										},
									},
									innerBlocks: [],
								},
								{
									name: 'core/paragraph',
									attributes: {
										content:
											'Look at the sunset. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel.',
										dropCap: false,
										className: 'margin-top-half',
										style: { typography: { fontSize: 15 } },
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
			attributes: { height: '40px' },
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/submit-button',
			attributes: { label: "Let's get started" },
			innerBlocks: [],
		},
	],
};
