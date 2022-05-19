/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';

export const customerServiceFeedbackTemplate = createTemplate(
	__( 'Customer Service Feedback', 'dashboard' ),
	__( 'Understand the impact or your latest customer interactions.' ),
	[
		[
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
								name: 'core/image',
								attributes: {
									url:
										'https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
									alt: '',
									caption: '',
									sizeSlug: 'large',
								},
								innerBlocks: [],
							},
							{
								name: 'core/spacer',
								attributes: {
									height: 15,
								},
								innerBlocks: [],
							},
							{
								name: 'core/paragraph',
								attributes: {
									content:
										'We use your feedback on surveys like this to find out&nbsp;how we can&nbsp;improve&nbsp;our service to you in the future.',
									dropCap: false,
								},
								innerBlocks: [],
							},
							{
								name: 'core/spacer',
								attributes: {
									height: 29,
								},
								innerBlocks: [],
							},
							{
								name: 'crowdsignal-forms/submit-button',
								attributes: {
									label: 'Start Survey',
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
								attributes: {
									height: 102,
								},
								innerBlocks: [],
							},
							{
								name: 'core/heading',
								attributes: {
									content:
										'Thank you for recently reaching out to us!&nbsp;',
									level: 3,
									anchor:
										'thank-you-for-recently-reaching-out-to-us',
								},
								innerBlocks: [],
							},
							{
								name: 'core/spacer',
								attributes: {
									height: 41,
								},
								innerBlocks: [],
							},
							{
								name: 'core/image',
								attributes: {
									url:
										'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
									alt: '',
									caption: '',
									sizeSlug: 'large',
								},
								innerBlocks: [],
							},
							{
								name: 'core/spacer',
								attributes: {
									height: 21,
								},
								innerBlocks: [],
							},
						],
					},
				],
			},
		],
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				attributes: {
					question:
						'Based on your recent interaction, how satisfied have you been with the overall experience?',
					mandatory: false,
					allowOther: false,
					minimumChoices: 0,
					maximumChoices: 1,
					borderRadius: '',
					boxShadow: false,
					borderWidth: '',
					className: 'is-style-button',
				},
				innerBlocks: [
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Very satisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Slightly satisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Neither satisifed nor dissatisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Slightly dissatisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Very dissatisfied',
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
			{
				name: 'core/spacer',
				attributes: {
					height: 17,
				},
				innerBlocks: [],
			},
			{
				name: 'core/cover',
				attributes: {
					url:
						'https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
					alt: '',
					hasParallax: false,
					isRepeated: false,
					dimRatio: 0,
					backgroundType: 'image',
					focalPoint: {
						x: '0.54',
						y: '0.66',
					},
					minHeight: 618,
					minHeightUnit: 'px',
					isDark: false,
					align: 'full',
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
		[
			{
				name: 'core/cover',
				attributes: {
					url:
						'https://images.unsplash.com/photo-1600767421554-069608adb34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1575&q=80',
					alt: '',
					hasParallax: false,
					isRepeated: false,
					dimRatio: 0,
					backgroundType: 'image',
					focalPoint: {
						x: '0.51',
						y: '0.50',
					},
					minHeight: 376,
					minHeightUnit: 'px',
					isDark: false,
					align: 'full',
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
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				attributes: {
					question: 'Was this the first time you contacted us?',
					mandatory: false,
					allowOther: false,
					minimumChoices: 0,
					maximumChoices: 1,
					borderRadius: '',
					boxShadow: false,
					borderWidth: '',
					className: 'is-style-button',
				},
				innerBlocks: [
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Yes',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'No',
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
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				attributes: {
					question: 'Was your issue resolved?',
					mandatory: false,
					allowOther: false,
					minimumChoices: 0,
					maximumChoices: 1,
					borderRadius: '',
					boxShadow: false,
					borderWidth: '',
					className: 'is-style-button',
				},
				innerBlocks: [
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Yes, completely',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Yes, partially',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'No, not resolved',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
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
						'Based on your recent contact with us, how satisfying was your interaction with our team member?',
					mandatory: false,
					allowOther: false,
					minimumChoices: 0,
					maximumChoices: 1,
					borderRadius: '',
					boxShadow: false,
					borderWidth: '',
					className: 'is-style-button',
				},
				innerBlocks: [
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Very satisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Slightly satisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Neither satisifed nor dissatisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Slightly dissatisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Very dissatisfied',
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
					question: 'Why or why not?',
					note: '',
					placeholder: '',
					mandatory: false,
					borderRadius: '',
					boxShadow: false,
					borderWidth: '',
					inputHeight: '80px',
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
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				attributes: {
					question:
						'As a result of your recent experience, do you feel more positive or more negative about our company?',
					mandatory: false,
					allowOther: false,
					minimumChoices: 0,
					maximumChoices: 1,
					borderRadius: '',
					boxShadow: false,
					borderWidth: '',
					className: 'is-style-button',
				},
				innerBlocks: [
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'More positive',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'Same as before',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						attributes: {
							label: 'More negative',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
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
				name: 'core/cover',
				attributes: {
					url:
						'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
					alt: '',
					hasParallax: false,
					isRepeated: false,
					dimRatio: 0,
					backgroundType: 'image',
					minHeight: 100,
					minHeightUnit: 'vh',
					isDark: false,
					align: 'full',
					style: {
						color: [],
					},
				},
				innerBlocks: [
					{
						name: 'crowdsignal-forms/text-question',
						attributes: {
							restrictions: [],
							question:
								'If you could change anything about our hotel and service, what would it be?',
							note: '',
							placeholder: '',
							mandatory: false,
							borderRadius: '',
							boxShadow: false,
							borderWidth: '',
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
			},
		],
		[
			{
				name: 'core/spacer',
				attributes: {
					height: 15,
				},
				innerBlocks: [],
			},
			{
				name: 'core/heading',
				attributes: {
					textAlign: 'center',
					content:
						'Thank you!<br>¡Gracias!<br>Merci!<br>Obrigada!<br>ありがとうございました<br>谢谢<br>Дякую!<br>Grazie!<br>Σας ευχαριστώ!<br>Dziękuję Ci!<br>Go raibh maith agat!<br>Danke!<br><br>',
					level: 2,
					anchor:
						'thank-you-gracias-merci-obrigada-ありがとうございました谢谢дякую-grazie-σας-ευχαριστώ-dziekuje-ci-go-raibh-maith-agat-danke',
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
		],
	]
);
