/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { v4 as uuid } from 'uuid';

export const productFeedbackTemplate = {
	name: __( 'Product Feedback', 'dashboard' ),
	description: __( 'Judge or be judged.', 'dashboard' ),
	project: {
		draftContent: {
			pages: [
				[
					{
						clientId: '85685df3-e5c6-42e8-aec1-7295ae3f3207',
						name: 'core/spacer',
						isValid: true,
						attributes: {
							height: 100,
						},
						innerBlocks: [],
					},
					{
						clientId: '0c55ba3f-ac80-4bb8-9285-d4112e5f547b',
						name: 'core/columns',
						isValid: true,
						attributes: {
							isStackedOnMobile: true,
						},
						innerBlocks: [
							{
								clientId:
									'4046f8a9-0d6d-42aa-8c34-ff7d0e0efbae',
								name: 'core/column',
								isValid: true,
								attributes: {
									verticalAlignment: 'center',
								},
								innerBlocks: [
									{
										clientId:
											'8c630506-15a0-45bf-9579-9305c75156ce',
										name: 'core/heading',
										isValid: true,
										attributes: {
											textAlign: 'left',
											content:
												'<strong>Welcome</strong>!',
											level: 1,
											anchor: 'welcome',
											textColor: 'black',
										},
										innerBlocks: [],
									},
									{
										clientId:
											'e5279603-5ff3-4158-905e-28bdf40d037a',
										name: 'core/paragraph',
										isValid: true,
										attributes: {
											content: ' ',
											dropCap: false,
										},
										innerBlocks: [],
									},
									{
										clientId:
											'd23f8ecb-f6a5-4a06-802c-9bee9707bc7b',
										name: 'core/paragraph',
										isValid: true,
										attributes: {
											align: 'left',
											content:
												'The following questions will ask for your feedback on our product. Your answers will help us understand the strengths and weaknesses of our service.',
											dropCap: false,
										},
										innerBlocks: [],
									},
									{
										clientId:
											'4c7ae9fb-3b5b-4aad-b6a7-dbf9e94b5c33',
										name: 'core/paragraph',
										isValid: true,
										attributes: {
											content: '',
											dropCap: false,
										},
										innerBlocks: [],
									},
									{
										clientId:
											'1287bc24-47ba-43ca-814a-fe7660913ee4',
										name: 'core/paragraph',
										isValid: true,
										attributes: {
											content:
												'Thank you for spending 5 minutes with us.',
											dropCap: false,
										},
										innerBlocks: [],
									},
									{
										clientId:
											'32272dbf-f14f-4ab7-a80d-8e3655f0a801',
										name: 'core/spacer',
										isValid: true,
										attributes: {
											height: 152,
										},
										innerBlocks: [],
									},
									{
										clientId:
											'840092aa-a519-4048-81f4-ad3f7d1c5272',
										name: 'core/group',
										isValid: true,
										attributes: {
											tagName: 'div',
										},
										innerBlocks: [
											{
												clientId:
													'97e3e1a7-e05d-443f-964a-3b914a408f23',
												name:
													'crowdsignal-forms/submit-button',
												isValid: true,
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
								clientId:
									'335deb00-d372-46c8-a01a-14d41c15ba02',
								name: 'core/column',
								isValid: true,
								attributes: {
									verticalAlignment: 'center',
								},
								innerBlocks: [
									{
										clientId:
											'c562e183-2c7a-4ac1-a037-0baae99de522',
										name: 'core/image',
										isValid: true,
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
						clientId: 'b3ade5db-ec56-409f-b89a-d4076927c765',
						name: 'core/paragraph',
						isValid: true,
						attributes: {
							content: ' ',
							dropCap: false,
						},
						innerBlocks: [],
					},
				],
				[
					{
						clientId: '7c4c60ae-bf59-4a4d-bd82-1d6c484611bf',
						name: 'core/paragraph',
						isValid: true,
						attributes: {
							content: '',
							dropCap: false,
						},
						innerBlocks: [],
					},
					{
						clientId: 'df727dd0-30c0-4cb0-a937-6d05325410f6',
						name: 'crowdsignal-forms/multiple-choice-question',
						isValid: true,
						attributes: {
							clientId: uuid(),
							question:
								'What emoji describes best your experience with ACME?',
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
								clientId:
									'6c6a7660-25d1-43fd-abd9-5a9aedc4cdf8',
								name: 'core/image',
								isValid: true,
								attributes: {
									url:
										'https://i1.wp.com/files.polldaddy.com/eb85a0eaa558dd7b87295239c28f3c46-62177c8e84365.png',
									alt: 'image',
									caption: '',
									href:
										'https://i1.wp.com/files.polldaddy.com/eb85a0eaa558dd7b87295239c28f3c46-62177c8e84365.png',
									sizeSlug: 'full',
									linkDestination: 'media',
								},
								innerBlocks: [],
							},
						],
					},
					{
						clientId: '158be02a-8517-43d0-9c3a-446002b2d957',
						name: 'core/paragraph',
						isValid: true,
						attributes: {
							content: '',
							dropCap: false,
						},
						innerBlocks: [],
					},
					{
						clientId: '3554a493-d41f-414e-81f5-3b95267b9fb9',
						name: 'crowdsignal-forms/submit-button',
						isValid: true,
						attributes: {
							label: 'Next',
						},
						innerBlocks: [],
					},
				],
				[
					{
						clientId: 'fabc340c-0f9c-4fe1-bb57-460e36d13e4c',
						name: 'core/paragraph',
						isValid: true,
						attributes: {
							content: '',
							dropCap: false,
						},
						innerBlocks: [],
					},
					{
						clientId: '26a525ab-95d7-4fc9-b05d-463f76b6dcb9',
						name: 'crowdsignal-forms/multiple-choice-question',
						isValid: true,
						attributes: {
							clientId: uuid(),
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
								clientId:
									'9d11a8e8-1a2b-439f-bd33-7a6f6b0d3959',
								name:
									'crowdsignal-forms/multiple-choice-answer',
								isValid: true,
								attributes: {
									clientId: uuid(),
									label: 'Very disappointed',
									shareSiblingAttributes: true,
								},
								innerBlocks: [],
							},
							{
								clientId:
									'4e6fb1db-a035-439b-b6ba-bae726242b6e',
								name:
									'crowdsignal-forms/multiple-choice-answer',
								isValid: true,
								attributes: {
									clientId: uuid(),
									label: 'Somewhat disappointed',
									shareSiblingAttributes: true,
								},
								innerBlocks: [],
							},
							{
								clientId:
									'6333d876-3f00-43af-92ab-4c126dbf54ec',
								name:
									'crowdsignal-forms/multiple-choice-answer',
								isValid: true,
								attributes: {
									clientId: uuid(),
									label: 'Not disappointed',
									shareSiblingAttributes: true,
								},
								innerBlocks: [],
							},
							{
								clientId:
									'60732056-2a2e-4f28-b1e9-dab31a09e481',
								name:
									'crowdsignal-forms/multiple-choice-answer',
								isValid: true,
								attributes: {
									clientId: uuid(),
									label: 'I no longer use it',
									shareSiblingAttributes: true,
								},
								innerBlocks: [],
							},
						],
					},
					{
						clientId: '65aab95e-9efe-4534-aac3-2bf6a2bfd1e5',
						name: 'crowdsignal-forms/text-question',
						isValid: true,
						attributes: {
							clientId: uuid(),
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
						clientId: '3db3c9dc-3545-4f78-ac62-9aa0150b63de',
						name: 'core/paragraph',
						isValid: true,
						attributes: {
							content: '',
							dropCap: false,
						},
						innerBlocks: [],
					},
					{
						clientId: '455ca9b8-86e5-478c-83cd-a0450d759f58',
						name: 'crowdsignal-forms/submit-button',
						isValid: true,
						attributes: {
							label: 'Next',
						},
						innerBlocks: [],
					},
				],
				[
					{
						clientId: '34a04466-efda-4112-8b02-6fd733aaee13',
						name: 'crowdsignal-forms/multiple-choice-question',
						isValid: true,
						attributes: {
							clientId: uuid(),
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
								clientId:
									'df12ccf6-63f4-4e7e-97ae-c28d6b91356f',
								name:
									'crowdsignal-forms/multiple-choice-answer',
								isValid: true,
								attributes: {
									clientId: uuid(),
									label: 'Once',
									shareSiblingAttributes: true,
								},
								innerBlocks: [],
							},
							{
								clientId:
									'3dcdd508-7a51-4f62-8aa4-973921a8382a',
								name:
									'crowdsignal-forms/multiple-choice-answer',
								isValid: true,
								attributes: {
									clientId: uuid(),
									label: 'Twice',
									shareSiblingAttributes: true,
								},
								innerBlocks: [],
							},
							{
								clientId:
									'fe517984-9fda-421b-a8bb-6d9a869ecca2',
								name:
									'crowdsignal-forms/multiple-choice-answer',
								isValid: true,
								attributes: {
									clientId: uuid(),
									label: '3 or more times',
									shareSiblingAttributes: true,
								},
								innerBlocks: [],
							},
							{
								clientId:
									'88a9d049-964f-49b1-bce0-53524dd66faa',
								name:
									'crowdsignal-forms/multiple-choice-answer',
								isValid: true,
								attributes: {
									clientId: uuid(),
									label: 'Every day',
									shareSiblingAttributes: true,
								},
								innerBlocks: [],
							},
						],
					},
					{
						clientId: 'cfaec325-f689-41a1-86b5-0d48e0d36f95',
						name: 'crowdsignal-forms/text-question',
						isValid: true,
						attributes: {
							clientId: uuid(),
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
						clientId: '25a03295-9e9b-4f30-adf8-9cef04483d1f',
						name: 'crowdsignal-forms/text-question',
						isValid: true,
						attributes: {
							clientId: uuid(),
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
						clientId: '8f792b93-ccb0-4d39-b1de-40f956297771',
						name: 'crowdsignal-forms/submit-button',
						isValid: true,
						attributes: {
							label: 'Submit',
						},
						innerBlocks: [],
					},
				],
				[
					{
						clientId: 'db42bd8b-9101-470c-bce9-5d88973acca4',
						name: 'core/spacer',
						isValid: true,
						attributes: {
							height: 100,
						},
						innerBlocks: [],
					},
					{
						clientId: '75d68059-6774-4ca6-b134-605a1b9c342c',
						name: 'core/heading',
						isValid: true,
						attributes: {
							textAlign: 'center',
							content: 'Thank you!',
							level: 2,
							anchor: 'thank-you',
						},
						innerBlocks: [],
					},
					{
						clientId: 'f5f55703-391e-4f7b-8b94-15141e4d45af',
						name: 'core/spacer',
						isValid: true,
						attributes: {
							height: 100,
						},
						innerBlocks: [],
					},
					{
						clientId: 'f4c5b87d-ec8d-46f5-90a5-6127d43b10ff',
						name: 'core/paragraph',
						isValid: true,
						attributes: {
							align: 'center',
							content: 'Your response has been recorded!',
							dropCap: false,
						},
						innerBlocks: [],
					},
					{
						clientId: 'b666cba1-0c1c-4406-af7d-763673b25dfe',
						name: 'core/spacer',
						isValid: true,
						attributes: {
							height: 232,
						},
						innerBlocks: [],
					},
					{
						clientId: '46be2a3d-4d58-41a1-8688-7f25f2f671b6',
						name: 'core/separator',
						isValid: true,
						attributes: [],
						innerBlocks: [],
					},
					{
						clientId: 'a9c1ab20-9a5a-40ab-9625-2f22231491e4',
						name: 'core/spacer',
						isValid: true,
						attributes: {
							height: 100,
						},
						innerBlocks: [],
					},
					{
						clientId: 'cbe25506-cd23-4aed-947e-07348619ae3a',
						name: 'core/paragraph',
						isValid: true,
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
			],
		},
	},
};
