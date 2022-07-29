/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';

export const teamMemberOnboardingSurveyTemplate = createTemplate(
	__( 'Team Member Onboarding Survey', 'dashboard' ),
	__( 'Description' ),
	[
		[
			{
				name: 'core/columns',
				isValid: true,
				attributes: { isStackedOnMobile: true, align: 'wide' },
				innerBlocks: [
					{
						name: 'core/column',
						isValid: true,
						attributes: { width: '66.66%' },
						innerBlocks: [
							{
								name: 'core/image',
								isValid: true,
								attributes: {
									align: 'full',
									url:
										'https://i0.wp.com/files.polldaddy.com/200166b459f7fad09e8dcaafaf8dd54c-62e2e3c3e5912.png',
									alt: 'image 124',
									caption: '',
									href:
										'https://i0.wp.com/files.polldaddy.com/200166b459f7fad09e8dcaafaf8dd54c-62e2e3c3e5912.png',
									sizeSlug: 'full',
									linkDestination: 'media',
									className: 'is-style-default',
								},
								innerBlocks: [],
								originalContent:
									'<figure class="wp-block-image alignfull size-full is-style-default"><a href="https://i0.wp.com/files.polldaddy.com/200166b459f7fad09e8dcaafaf8dd54c-62e2e3c3e5912.png"><img src="https://i0.wp.com/files.polldaddy.com/200166b459f7fad09e8dcaafaf8dd54c-62e2e3c3e5912.png" alt="image 124"/></a></figure>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-column" style="flex-basis:66.66%"></div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: {
							verticalAlignment: 'center',
							width: '33.33%',
						},
						innerBlocks: [
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '54px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:54px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
							{
								name: 'core/heading',
								isValid: true,
								attributes: {
									content:
										"We're glad you've joined our team!",
									level: 2,
								},
								innerBlocks: [],
								originalContent:
									"<h2>We're glad you've joined our team!</h2>",
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									align: 'left',
									content:
										'Now we are curious: <br>How was your onboarding?<br>Please let us know, so that we can improve it for new team members. \ud83d\ude4f',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p class="has-text-align-left">Now we are curious: <br>How was your onboarding?<br>Please let us know, so that we can improve it for new team members. \ud83d\ude4f</p>',
								validationIssues: [],
							},
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '165px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:165px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
							{
								name: 'crowdsignal-forms/submit-button',
								isValid: true,
								attributes: { label: "Let's get started" },
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:33.33%">\n\n\n\n\n\n\n\n</div>',
						validationIssues: [],
					},
				],
				originalContent:
					'<div class="wp-block-columns alignwide">\n\n</div>',
				validationIssues: [],
			},
		],
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				isValid: true,
				attributes: {
					question:
						'How well do you understand your role, and responsibilities of your job?',
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
						isValid: true,
						attributes: {
							label: 'Extremely well',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Very well',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Moderately well',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Slightly well',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Not well at all',
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
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: { label: 'Next' },
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				isValid: true,
				attributes: {
					question:
						'How accurately was your role described to you during your interviews?',
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
						name: 'core/paragraph',
						isValid: true,
						attributes: {
							content:
								'<em>Are you doing what you expected you\u2019d be doing?</em>',
							dropCap: false,
						},
						innerBlocks: [],
						originalContent:
							'<p><em>Are you doing what you expected you\u2019d be doing?</em></p>',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Extremely accurately',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Very accurately',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Moderately accurately',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Slightly accurately',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Not accurately at all',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Not applicable',
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
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: { label: 'Next' },
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				isValid: true,
				attributes: {
					question: 'How challenging is your current role?',
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
						isValid: true,
						attributes: {
							label: 'Extremely challenging',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Very challenging',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Moderately challenging',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Slightly challenging',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Not challenging',
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
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: { label: 'Next' },
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				isValid: true,
				attributes: {
					question: 'How interested are you in your current role?',
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
						isValid: true,
						attributes: {
							label: 'Extremely interested',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Very interested',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Moderately interested',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Slightly interested',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Not interested at all',
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
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: { label: 'Next' },
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				isValid: true,
				attributes: {
					question:
						'How satisfied or dissatisfied are you with the training that you have received for your new role?',
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
						isValid: true,
						attributes: {
							label: 'Extremely satisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Moderately satisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Neither satisfied nor dissatisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Moderately dissatisfied',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Extremely dissatisfied',
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
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: { label: 'Next' },
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				isValid: true,
				attributes: {
					question:
						'How happy or unhappy are you with this company as a place to work?',
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
						isValid: true,
						attributes: {
							label: 'Extremely happy',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Moderately happy',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Neither happy nor unhappy',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Moderately unhappy',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Extremely unhappy',
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
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: { label: 'Next' },
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'crowdsignal-forms/multiple-choice-question',
				isValid: true,
				attributes: {
					question:
						'How likely are you to be working at this company two years from today?\u00a0',
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
						isValid: true,
						attributes: {
							label: 'Extremely likely',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Very likely',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Slightly likely',
							shareSiblingAttributes: true,
						},
						innerBlocks: [],
						originalContent: '',
						validationIssues: [],
					},
					{
						name: 'crowdsignal-forms/multiple-choice-answer',
						isValid: true,
						attributes: {
							label: 'Not at all likely',
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
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: { label: 'Submit' },
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'crowdsignal-forms/text-question',
				isValid: true,
				attributes: {
					restrictions: [],
					question:
						'What overall feedback do you have for us on your onboarding experience?',
					note: '',
					placeholder: '',
					mandatory: false,
					borderRadius: '',
					boxShadow: false,
					borderWidth: '',
					inputHeight: '132px',
					width: 100,
				},
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: { label: 'Submit' },
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/spacer',
				isValid: true,
				attributes: { height: '178px' },
				innerBlocks: [],
				originalContent:
					'<div style="height:178px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/heading',
				isValid: true,
				attributes: {
					textAlign: 'center',
					content:
						'Thank you for your time spent taking this survey!',
					level: 2,
				},
				innerBlocks: [],
				originalContent:
					'<h2 class="has-text-align-center">Thank you for your time spent taking this survey!</h2>',
				validationIssues: [],
			},
		],
	]
);
