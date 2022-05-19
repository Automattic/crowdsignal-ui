/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';

export const customerSatisfactionTemplate = createTemplate(
	__( 'Customer Feedback', 'dashboard' ),
	__( 'Description' ),
	[
		[
			{
				name: 'core/columns',
				attributes: {
					isStackedOnMobile: true,
					align: 'full',
				},
				innerBlocks: [
					{
						name: 'core/column',
						attributes: {
							verticalAlignment: 'center',
						},
						innerBlocks: [
							{
								name: 'core/cover',
								attributes: {
									url:
										'https://i0.wp.com/files.polldaddy.com/742e7093bacec71efc7e6c5e5dead5b7-627a6f4966bf2.png',
									alt: 'Ice 4 Template Image',
									hasParallax: false,
									isRepeated: false,
									dimRatio: 0,
									backgroundType: 'image',
									minHeight: 100,
									minHeightUnit: 'vh',
									isDark: false,
									style: {
										color: [],
									},
								},
								innerBlocks: [
									{
										name: 'core/paragraph',
										attributes: {
											content: ' ',
											dropCap: false,
											fontSize: 'large',
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
								name:
									'crowdsignal-forms/multiple-choice-question',
								attributes: {
									question:
										'Overall, how satisfied are you with ACME Ice Cream?',
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
										name:
											'crowdsignal-forms/multiple-choice-answer',
										attributes: {
											label: 'Very Satisfied',
											shareSiblingAttributes: true,
										},
										innerBlocks: [],
									},
									{
										name:
											'crowdsignal-forms/multiple-choice-answer',
										attributes: {
											label: 'Somewhat Satisfied',
											shareSiblingAttributes: true,
										},
										innerBlocks: [],
									},
									{
										name:
											'crowdsignal-forms/multiple-choice-answer',
										attributes: {
											label:
												'Neither satisfied nor unsatisfied',
											shareSiblingAttributes: true,
										},
										innerBlocks: [],
									},
									{
										name:
											'crowdsignal-forms/multiple-choice-answer',
										attributes: {
											label: 'Somewhat Unsatisfied',
											shareSiblingAttributes: true,
										},
										innerBlocks: [],
									},
									{
										name:
											'crowdsignal-forms/multiple-choice-answer',
										attributes: {
											label: 'Very Unsatisfied',
											shareSiblingAttributes: true,
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
					},
				],
			},
			{
				name: 'core/paragraph',
				attributes: {
					content: '',
					dropCap: false,
				},
				innerBlocks: [],
			},
		],
		[
			{
				name: 'core/columns',
				attributes: {
					isStackedOnMobile: true,
					align: 'full',
				},
				innerBlocks: [
					{
						name: 'core/column',
						attributes: {
							verticalAlignment: 'center',
						},
						innerBlocks: [
							{
								name: 'crowdsignal-forms/text-question',
								attributes: {
									restrictions: [],
									question: 'Tell us a bit more about why',
									note: '',
									placeholder: '',
									mandatory: false,
									borderRadius: 5,
									boxShadow: false,
									borderWidth: 1,
									inputHeight: '403px',
									width: 100,
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
					},
					{
						name: 'core/column',
						attributes: {
							verticalAlignment: 'center',
						},
						innerBlocks: [
							{
								name: 'core/cover',
								attributes: {
									url:
										'https://i2.wp.com/files.polldaddy.com/e89931dc78998206129aec2f0c957206-627a6d01273aa.png',
									alt: 'Ice 2 Template Image',
									hasParallax: false,
									isRepeated: false,
									dimRatio: 0,
									backgroundType: 'image',
									minHeight: 100,
									minHeightUnit: 'vh',
									isDark: false,
									style: {
										color: [],
									},
								},
								innerBlocks: [
									{
										name: 'core/paragraph',
										attributes: {
											content: ' ',
											dropCap: false,
											fontSize: 'large',
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
				name: 'core/paragraph',
				attributes: {
					content: '',
					dropCap: false,
				},
				innerBlocks: [],
			},
		],
		[
			{
				name: 'core/columns',
				attributes: {
					isStackedOnMobile: true,
					align: 'full',
				},
				innerBlocks: [
					{
						name: 'core/column',
						attributes: {
							verticalAlignment: 'center',
						},
						innerBlocks: [
							{
								name: 'core/cover',
								attributes: {
									url:
										'https://i1.wp.com/files.polldaddy.com/182b287f760bd466dcc5b75fdff24479-627a6b18c1aa4.png',
									alt: 'Ice 1 Template Image',
									hasParallax: false,
									isRepeated: false,
									dimRatio: 0,
									backgroundType: 'image',
									minHeight: 100,
									minHeightUnit: 'vh',
									isDark: false,
									style: {
										color: [],
									},
								},
								innerBlocks: [
									{
										name: 'core/paragraph',
										attributes: {
											align: 'center',
											content: ' ',
											dropCap: false,
											placeholder: 'Write title…',
											fontSize: 'large',
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
								name:
									'crowdsignal-forms/multiple-choice-question',
								attributes: {
									question:
										'Would you recommend our ice cream to a friend or family member?',
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
										name:
											'crowdsignal-forms/multiple-choice-answer',
										attributes: {
											label: 'Definitely would',
											shareSiblingAttributes: true,
										},
										innerBlocks: [],
									},
									{
										name:
											'crowdsignal-forms/multiple-choice-answer',
										attributes: {
											label: 'Probably would',
											shareSiblingAttributes: true,
										},
										innerBlocks: [],
									},
									{
										name:
											'crowdsignal-forms/multiple-choice-answer',
										attributes: {
											label: 'Not sure',
											shareSiblingAttributes: true,
										},
										innerBlocks: [],
									},
									{
										name:
											'crowdsignal-forms/multiple-choice-answer',
										attributes: {
											label: 'Probably would not',
											shareSiblingAttributes: true,
										},
										innerBlocks: [],
									},
									{
										name:
											'crowdsignal-forms/multiple-choice-answer',
										attributes: {
											label: 'Definitely would not',
											shareSiblingAttributes: true,
										},
										innerBlocks: [],
									},
								],
							},
							{
								name: 'crowdsignal-forms/submit-button',
								attributes: {
									label: 'Submit',
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
					content: '',
					dropCap: false,
				},
				innerBlocks: [],
			},
		],
		[
			{
				name: 'core/spacer',
				attributes: {
					height: 52,
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
					height: 108,
				},
				innerBlocks: [],
			},
			{
				name: 'core/image',
				attributes: {
					align: 'full',
					url:
						'https://i1.wp.com/files.polldaddy.com/ff0d35f820e187b6994a33cb65932b2b-627a710ccd065.png',
					alt: 'Ice 5 Template Image',
					caption: '',
					href:
						'https://i1.wp.com/files.polldaddy.com/ff0d35f820e187b6994a33cb65932b2b-627a710ccd065.png',
					sizeSlug: 'full',
					linkDestination: 'media',
				},
				innerBlocks: [],
			},
		],
	]
);
