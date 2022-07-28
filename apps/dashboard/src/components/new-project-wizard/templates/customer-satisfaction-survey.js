/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';

export const CustomerSatisfactionSurveyTemplate = createTemplate(
	__( 'Customer Satisfaction Survey', 'dashboard' ),
	__( 'Description' ),
	[
		[
			{
				name: 'core/spacer',
				isValid: true,
				attributes: { height: '24px' },
				innerBlocks: [],
				originalContent:
					'<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/group',
				isValid: true,
				attributes: { tagName: 'div', align: 'wide' },
				innerBlocks: [
					{
						name: 'core/columns',
						isValid: true,
						attributes: {
							verticalAlignment: 'center',
							isStackedOnMobile: true,
							align: 'wide',
						},
						innerBlocks: [
							{
								name: 'core/column',
								isValid: true,
								attributes: { verticalAlignment: 'center' },
								innerBlocks: [
									{
										name: 'core/image',
										isValid: true,
										attributes: {
											url:
												'https://images.unsplash.com/photo-1562790879-dfde82829db0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
											alt: '',
											caption: '',
											sizeSlug: 'large',
										},
										innerBlocks: [],
										originalContent:
											'<figure class="wp-block-image size-large"><img src="https://images.unsplash.com/photo-1562790879-dfde82829db0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80" alt=""/></figure>',
										validationIssues: [],
									},
								],
								originalContent:
									'<div class="wp-block-column is-vertically-aligned-center"></div>',
								validationIssues: [],
							},
							{
								name: 'core/column',
								isValid: true,
								attributes: { verticalAlignment: 'center' },
								innerBlocks: [
									{
										name:
											'crowdsignal-forms/multiple-choice-question',
										isValid: true,
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
											align: 'wide',
											className: 'is-style-button',
										},
										innerBlocks: [
											{
												name:
													'crowdsignal-forms/multiple-choice-answer',
												isValid: true,
												attributes: {
													label: 'Very Satisfied',
													shareSiblingAttributes: true,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
											{
												name:
													'crowdsignal-forms/multiple-choice-answer',
												isValid: true,
												attributes: {
													label: 'Somewhat Satisfied',
													shareSiblingAttributes: true,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
											{
												name:
													'crowdsignal-forms/multiple-choice-answer',
												isValid: true,
												attributes: {
													label:
														'Neither satisfied nor unsatisfied',
													shareSiblingAttributes: true,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
											{
												name:
													'crowdsignal-forms/multiple-choice-answer',
												isValid: true,
												attributes: {
													label:
														'Somewhat Unsatisfied',
													shareSiblingAttributes: true,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
											{
												name:
													'crowdsignal-forms/multiple-choice-answer',
												isValid: true,
												attributes: {
													label: 'Very Unsatisfied',
													shareSiblingAttributes: true,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
										],
										originalContent: '',
										validationIssues: [],
									},
								],
								originalContent:
									'<div class="wp-block-column is-vertically-aligned-center"></div>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-columns alignwide are-vertically-aligned-center">\n\n</div>',
						validationIssues: [],
					},
					{
						name: 'core/columns',
						isValid: true,
						attributes: { isStackedOnMobile: true, align: 'wide' },
						innerBlocks: [
							{
								name: 'core/column',
								isValid: true,
								attributes: [],
								innerBlocks: [],
								originalContent:
									'<div class="wp-block-column"></div>',
								validationIssues: [],
							},
							{
								name: 'core/column',
								isValid: true,
								attributes: [],
								innerBlocks: [
									{
										name: 'crowdsignal-forms/submit-button',
										isValid: true,
										attributes: {
											label: 'Next',
											justification: 'right',
										},
										innerBlocks: [],
										originalContent: '',
										validationIssues: [],
									},
								],
								originalContent:
									'<div class="wp-block-column"></div>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-columns alignwide">\n\n</div>',
						validationIssues: [],
					},
				],
				originalContent:
					'<div class="wp-block-group alignwide">\n\n</div>',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/group',
				isValid: true,
				attributes: { tagName: 'div', align: 'wide' },
				innerBlocks: [
					{
						name: 'core/spacer',
						isValid: true,
						attributes: { height: '24px' },
						innerBlocks: [],
						originalContent:
							'<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>',
						validationIssues: [],
					},
					{
						name: 'core/columns',
						isValid: true,
						attributes: {
							verticalAlignment: 'center',
							isStackedOnMobile: true,
							align: 'wide',
						},
						innerBlocks: [
							{
								name: 'core/column',
								isValid: true,
								attributes: { verticalAlignment: 'center' },
								innerBlocks: [
									{
										name: 'crowdsignal-forms/text-question',
										isValid: true,
										attributes: {
											restrictions: [],
											question:
												'Tell us a bit more about why:',
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
										originalContent: '',
										validationIssues: [],
									},
								],
								originalContent:
									'<div class="wp-block-column is-vertically-aligned-center"></div>',
								validationIssues: [],
							},
							{
								name: 'core/column',
								isValid: true,
								attributes: { verticalAlignment: 'center' },
								innerBlocks: [
									{
										name: 'core/image',
										isValid: true,
										attributes: {
											url:
												'https://images.unsplash.com/photo-1612639267275-7c4ae6a12d84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80',
											alt: '',
											caption: '',
											width: 445,
											height: 622,
											sizeSlug: 'large',
										},
										innerBlocks: [],
										originalContent:
											'<figure class="wp-block-image size-large is-resized"><img src="https://images.unsplash.com/photo-1612639267275-7c4ae6a12d84?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=830&amp;q=80" alt="" width="445" height="622"/></figure>',
										validationIssues: [],
									},
								],
								originalContent:
									'<div class="wp-block-column is-vertically-aligned-center"></div>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-columns alignwide are-vertically-aligned-center">\n\n</div>',
						validationIssues: [],
					},
					{
						name: 'core/columns',
						isValid: true,
						attributes: { isStackedOnMobile: true, align: 'wide' },
						innerBlocks: [
							{
								name: 'core/column',
								isValid: true,
								attributes: [],
								innerBlocks: [],
								originalContent:
									'<div class="wp-block-column"></div>',
								validationIssues: [],
							},
							{
								name: 'core/column',
								isValid: true,
								attributes: [],
								innerBlocks: [
									{
										name: 'crowdsignal-forms/submit-button',
										isValid: true,
										attributes: {
											label: 'Next',
											justification: 'right',
										},
										innerBlocks: [],
										originalContent: '',
										validationIssues: [],
									},
								],
								originalContent:
									'<div class="wp-block-column"></div>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-columns alignwide">\n\n</div>',
						validationIssues: [],
					},
				],
				originalContent:
					'<div class="wp-block-group alignwide">\n\n\n\n</div>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: { content: '', dropCap: false },
				innerBlocks: [],
				originalContent: '<p></p>',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/spacer',
				isValid: true,
				attributes: { height: '24px' },
				innerBlocks: [],
				originalContent:
					'<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/group',
				isValid: true,
				attributes: { tagName: 'div', align: 'wide' },
				innerBlocks: [
					{
						name: 'core/columns',
						isValid: true,
						attributes: {
							verticalAlignment: 'center',
							isStackedOnMobile: true,
							align: 'wide',
						},
						innerBlocks: [
							{
								name: 'core/column',
								isValid: true,
								attributes: { verticalAlignment: 'center' },
								innerBlocks: [
									{
										name: 'core/image',
										isValid: true,
										attributes: {
											url:
												'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
											alt: '',
											caption: '',
											width: 521,
											height: 650,
											sizeSlug: 'large',
										},
										innerBlocks: [],
										originalContent:
											'<figure class="wp-block-image size-large is-resized"><img src="https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80" alt="" width="521" height="650"/></figure>',
										validationIssues: [],
									},
								],
								originalContent:
									'<div class="wp-block-column is-vertically-aligned-center"></div>',
								validationIssues: [],
							},
							{
								name: 'core/column',
								isValid: true,
								attributes: { verticalAlignment: 'center' },
								innerBlocks: [
									{
										name:
											'crowdsignal-forms/multiple-choice-question',
										isValid: true,
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
												isValid: true,
												attributes: {
													label: 'Definitely would',
													shareSiblingAttributes: true,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
											{
												name:
													'crowdsignal-forms/multiple-choice-answer',
												isValid: true,
												attributes: {
													label: 'Probably would',
													shareSiblingAttributes: true,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
											{
												name:
													'crowdsignal-forms/multiple-choice-answer',
												isValid: true,
												attributes: {
													label: 'Not sure',
													shareSiblingAttributes: true,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
											{
												name:
													'crowdsignal-forms/multiple-choice-answer',
												isValid: true,
												attributes: {
													label: 'Probably would not',
													shareSiblingAttributes: true,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
											{
												name:
													'crowdsignal-forms/multiple-choice-answer',
												isValid: true,
												attributes: {
													label:
														'Definitely would not',
													shareSiblingAttributes: true,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
										],
										originalContent: '',
										validationIssues: [],
									},
								],
								originalContent:
									'<div class="wp-block-column is-vertically-aligned-center"></div>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-columns alignwide are-vertically-aligned-center">\n\n</div>',
						validationIssues: [],
					},
					{
						name: 'core/columns',
						isValid: true,
						attributes: { isStackedOnMobile: true, align: 'wide' },
						innerBlocks: [
							{
								name: 'core/column',
								isValid: true,
								attributes: [],
								innerBlocks: [],
								originalContent:
									'<div class="wp-block-column"></div>',
								validationIssues: [],
							},
							{
								name: 'core/column',
								isValid: true,
								attributes: [],
								innerBlocks: [
									{
										name: 'crowdsignal-forms/submit-button',
										isValid: true,
										attributes: {
											label: 'Next',
											justification: 'right',
										},
										innerBlocks: [],
										originalContent: '',
										validationIssues: [],
									},
								],
								originalContent:
									'<div class="wp-block-column"></div>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-columns alignwide">\n\n</div>',
						validationIssues: [],
					},
				],
				originalContent:
					'<div class="wp-block-group alignwide">\n\n</div>',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/spacer',
				isValid: true,
				attributes: { height: '240px' },
				innerBlocks: [],
				originalContent:
					'<div style="height:240px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/heading',
				isValid: true,
				attributes: {
					textAlign: 'center',
					content: 'Thank you!',
					level: 2,
					anchor: 'thank-you',
				},
				innerBlocks: [],
				originalContent:
					'<h2 class="has-text-align-center" id="thank-you">Thank you!</h2>',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: { height: '180px' },
				innerBlocks: [],
				originalContent:
					'<div style="height:180px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/image',
				isValid: true,
				attributes: {
					align: 'full',
					url:
						'https://i1.wp.com/files.polldaddy.com/c183256bf4454af4f3b5ac23133700b1-62e26303eebbb.png',
					alt: 'icecream',
					caption: '',
					href:
						'https://i1.wp.com/files.polldaddy.com/c183256bf4454af4f3b5ac23133700b1-62e26303eebbb.png',
					sizeSlug: 'full',
					linkDestination: 'media',
				},
				innerBlocks: [],
				originalContent:
					'<figure class="wp-block-image alignfull size-full"><a href="https://i1.wp.com/files.polldaddy.com/c183256bf4454af4f3b5ac23133700b1-62e26303eebbb.png"><img src="https://i1.wp.com/files.polldaddy.com/c183256bf4454af4f3b5ac23133700b1-62e26303eebbb.png" alt="icecream"/></a></figure>',
				validationIssues: [],
			},
		],
	]
);
