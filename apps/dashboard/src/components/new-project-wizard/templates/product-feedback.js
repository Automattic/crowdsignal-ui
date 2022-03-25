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
		'Idenfity areas for improvement and measure customer satisfaction.',
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
				isValid: true,
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
					clientId: '74a541f2-e67a-4a5d-925e-fbbed058853c',
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
							clientId: 'c93cc3ad-a4a0-45e3-8137-8f92f8f202e2',
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
							clientId: '041d2750-a0bc-4e15-aee4-2e09f42f796a',
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
							clientId: '6f9dd260-54b4-4ee3-80c4-c0015394acf9',
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
							clientId: '7d0a494c-61c0-4616-973a-05629d09a0a0',
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
							clientId: 'c7b49246-d1a0-45ab-81b8-fdc6c71db32d',
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
					clientId: '73f8eebc-610a-42ee-b8bd-580def4ab113',
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
							clientId: 'd9474826-55f1-4a17-ae3b-91a16856a5e4',
							label: 'Very disappointed',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							clientId: 'e9d3ab12-0aa0-41b7-ab4d-cd78a2b3b359',
							label: 'Somewhat disappointed',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							clientId: 'c0da8b7f-c24b-4cba-91a8-6f4c350a4229',
							label: 'Not disappointed',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							clientId: 'd41f2813-6ac2-4f40-9f76-d7f167297abc',
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
					clientId: '1300b581-cc02-42e3-92d8-e40a343d54de',
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
					clientId: 'a82b8ba1-753d-4402-8ee0-7ec311dbdc94',
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
							clientId: 'eba1e876-9397-4e0c-ad1c-d691621b1dd6',
							label: 'Once',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							clientId: '6b42abce-8725-427c-85e7-4c4b6b6b6bbc',
							label: 'Twice',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							clientId: '26bbf873-2418-44c8-8cb2-dd409c24a9a3',
							label: '3 or more times',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							clientId: 'd4a59133-843c-4f2f-a1c1-431c5b96d105',
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
					clientId: '8fc3ef97-7de1-4658-a302-ec019a5249e2',
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
					clientId: '47d823dd-873d-42a7-bb94-d6d829052209',
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
