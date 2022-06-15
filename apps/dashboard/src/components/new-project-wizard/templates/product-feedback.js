/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';

export const productFeedbackTemplate = createTemplate(
	__( 'Product Feedback', 'dashboard' ),
	__(
		'Identify areas for improvement and measure customer satisfaction.',
		'dashboard'
	),
	[
		[
			{
				name: 'core/spacer',
				attributes: {
					height: 100,
				},
				innerBlocks: [],
			},
			{
				name: 'core/columns',
				attributes: {
					isStackedOnMobile: true,
				},
				innerBlocks: [
					{
						name: 'core/column',
						attributes: {
							verticalAlignment: 'center',
						},
						innerBlocks: [
							{
								name: 'core/heading',
								attributes: {
									textAlign: 'left',
									content: '<strong>Welcome</strong>!',
									level: 2,
									anchor: 'welcome',
									textColor: 'black',
								},
								innerBlocks: [],
							},
							{
								name: 'core/paragraph',
								attributes: {
									content: ' ',
									dropCap: false,
								},
								innerBlocks: [],
							},
							{
								name: 'core/paragraph',
								attributes: {
									align: 'left',
									content:
										'The following questions will ask for your feedback on our product. Your answers will help us understand the strengths and weaknesses of our service.',
									dropCap: false,
								},
								innerBlocks: [],
							},
							{
								name: 'core/spacer',
								attributes: {
									height: 5,
								},
								innerBlocks: [],
							},
							{
								name: 'core/paragraph',
								attributes: {
									content:
										'Thank you for spending 5 minutes with us.',
									dropCap: false,
								},
								innerBlocks: [],
							},
							{
								name: 'core/spacer',
								attributes: {
									height: 66,
								},
								innerBlocks: [],
							},
							{
								name: 'core/group',
								attributes: {
									tagName: 'div',
								},
								innerBlocks: [
									{
										name: 'crowdsignal-forms/submit-button',
										attributes: {
											label: "Let's start",
										},
										innerBlocks: [],
									},
								],
							},
						],
					},
					{
						name: 'core/column',
						attributes: {
							verticalAlignment: 'center',
						},
						innerBlocks: [
							{
								name: 'core/image',
								attributes: {
									url:
										'https://i1.wp.com/files.polldaddy.com/bfb8591ecb6a562b2a496cc2a3ceab60-621788830532a.jpg',
									alt: 'DvS2Zy5U8AAP3gC',
									caption: '',
									href:
										'https://i1.wp.com/files.polldaddy.com/bfb8591ecb6a562b2a496cc2a3ceab60-621788830532a.jpg',
									sizeSlug: 'full',
									linkDestination: 'media',
								},
								innerBlocks: [],
							},
						],
					},
				],
			},
			{
				name: 'core/paragraph',
				attributes: {
					content: ' ',
					dropCap: false,
				},
				innerBlocks: [],
			},
		],
		[
			{
				name: 'crowdsignal-forms/rating-scale-question',
				attributes: {
					question:
						'What emoji describes best your experience with ACME?',
					mandatory: false,
					scaleLength: 5,
					ratingStyle: 'emoji',
					borderRadius: '',
					boxShadow: false,
					borderWidth: '',
					className: 'is-style-emoji',
				},
				innerBlocks: [
					{
						name: 'crowdsignal-forms/rating-scale-answer',
						attributes: {
							label: '1',
							shareSiblingAttributes: true,
							emoji: '😡',
							weight: 1,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/rating-scale-answer',
						attributes: {
							label: '2',
							shareSiblingAttributes: true,
							emoji: '😕',
							weight: 2,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/rating-scale-answer',
						attributes: {
							label: '3',
							shareSiblingAttributes: true,
							emoji: '😐',
							weight: 3,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/rating-scale-answer',
						attributes: {
							label: '4',
							shareSiblingAttributes: true,
							emoji: '🙂',
							weight: 4,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/rating-scale-answer',
						attributes: {
							label: '5',
							shareSiblingAttributes: true,
							emoji: '😀',
							weight: 5,
						},
						innerBlocks: [],
					},
				],
			},
			{
				name: 'crowdsignal-forms/submit-button',
				attributes: {
					label: 'Next',
				},
				innerBlocks: [],
			},
		],
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				attributes: {
					question:
						'How would you feel if you could no longer use ACME?',
					mandatory: false,
					allowOther: false,
					minimumChoices: 0,
					maximumChoices: 1,
					borderRadius: 5,
					boxShadow: false,
					borderWidth: 1,
					className: 'is-style-button',
				},
				innerBlocks: [
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Very disappointed',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Somewhat disappointed',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Not disappointed',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'I no longer use it',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
				],
			},
			{
				name: 'crowdsignal-forms/text-question',
				attributes: {
					restrictions: [],
					question:
						'What would you likely use as an alternative if ACME were no longer available?',
					note: '',
					placeholder: '',
					mandatory: false,
					borderRadius: 5,
					boxShadow: false,
					borderWidth: 1,
					inputHeight: '80px',
					width: 100,
				},
				innerBlocks: [],
			},
			{
				name: 'core/paragraph',
				attributes: {
					content: '',
					dropCap: false,
				},
				innerBlocks: [],
			},
			{
				name: 'crowdsignal-forms/submit-button',
				attributes: {
					label: 'Next',
				},
				innerBlocks: [],
			},
		],
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				attributes: {
					question:
						'How main times did you use ACME in the last week?',
					mandatory: false,
					allowOther: false,
					minimumChoices: 0,
					maximumChoices: 1,
					borderRadius: 5,
					boxShadow: false,
					borderWidth: 1,
					className: 'is-style-button',
				},
				innerBlocks: [
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Once',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Twice',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: '3 or more times',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Every day',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
				],
			},
			{
				name: 'crowdsignal-forms/text-question',
				attributes: {
					restrictions: [],
					question:
						'Describe how you’re currently using ACME in a few words.',
					note: '',
					placeholder: '',
					mandatory: false,
					borderRadius: 5,
					boxShadow: false,
					borderWidth: 1,
					inputHeight: '80px',
					width: 100,
				},
				innerBlocks: [],
			},
			{
				name: 'crowdsignal-forms/text-question',
				attributes: {
					restrictions: [],
					question: 'Have you encountered any problems?',
					note: '',
					placeholder: '',
					mandatory: false,
					borderRadius: 5,
					boxShadow: false,
					borderWidth: 1,
					inputHeight: '80px',
					width: 100,
				},
				innerBlocks: [],
			},
			{
				name: 'crowdsignal-forms/submit-button',
				attributes: {
					label: 'Submit',
				},
				innerBlocks: [],
			},
		],
		[
			{
				name: 'core/spacer',
				attributes: {
					height: 100,
				},
				innerBlocks: [],
			},
			{
				name: 'core/heading',
				attributes: {
					textAlign: 'center',
					content: 'Thank you!',
					level: 2,
					anchor: 'thank-you',
				},
				innerBlocks: [],
			},
			{
				name: 'core/spacer',
				attributes: {
					height: 100,
				},
				innerBlocks: [],
			},
			{
				name: 'core/paragraph',
				attributes: {
					align: 'center',
					content: 'Your response has been recorded!',
					dropCap: false,
				},
				innerBlocks: [],
			},
			{
				name: 'core/spacer',
				attributes: {
					height: 232,
				},
				innerBlocks: [],
			},
			{
				name: 'core/separator',
				attributes: [],
				innerBlocks: [],
			},
			{
				name: 'core/spacer',
				attributes: {
					height: 100,
				},
				innerBlocks: [],
			},
			{
				name: 'core/paragraph',
				attributes: {
					align: 'center',
					content:
						'POWERED BY <a href="https://crowdsignal.com">CROWDSIGNAL</a>',
					dropCap: false,
					fontSize: 'small',
				},
				innerBlocks: [],
			},
		],
	]
);
