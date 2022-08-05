/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';

export const joinWaitlistTemplate = createTemplate(
	__( 'Join Waitlist', 'dashboard' ),
	__(
		'Manage and organize a waitlist for your startup, restaurant, or any other business.'
	),
	[
		[
			{
				name: 'core/columns',
				isValid: true,
				attributes: { isStackedOnMobile: true },
				innerBlocks: [
					{
						name: 'core/column',
						isValid: true,
						attributes: [],
						innerBlocks: [
							{
								name: 'core/image',
								isValid: true,
								attributes: {
									align: 'left',
									url:
										'https://crowdsignal.files.wordpress.com/2022/08/dummylogo.png',
									alt: 'dummylogo',
									caption: '',
									href:
										'https://i2.wp.com/files.polldaddy.com/db6484d9fbabb04226a978861e4cb48b-62eb81f227d71.png',
									width: 80,
									height: 80,
									sizeSlug: 'large',
									linkDestination: 'media',
								},
								innerBlocks: [],
								originalContent:
									'<figure class="wp-block-image alignleft size-large is-resized"><a href="https://i2.wp.com/files.polldaddy.com/db6484d9fbabb04226a978861e4cb48b-62eb81f227d71.png"><img src="https://crowdsignal.files.wordpress.com/2022/08/dummylogo.png" alt="dummylogo" width="80" height="80"/></a></figure>',
								validationIssues: [],
							},
						],
						originalContent: '<div class="wp-block-column"></div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: { width: '20px' },
						innerBlocks: [
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '100px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-column" style="flex-basis:20px"></div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: [],
						innerBlocks: [
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: { content: ' ', dropCap: false },
								innerBlocks: [],
								originalContent: '<p> </p>',
								validationIssues: [],
							},
						],
						originalContent: '<div class="wp-block-column"></div>',
						validationIssues: [],
					},
				],
				originalContent: '<div class="wp-block-columns">\n\n\n\n</div>',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: { height: '6px' },
				innerBlocks: [],
				originalContent:
					'<div style="height:6px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/columns',
				isValid: true,
				attributes: { isStackedOnMobile: true },
				innerBlocks: [
					{
						name: 'core/column',
						isValid: true,
						attributes: [],
						innerBlocks: [
							{
								name: 'core/heading',
								isValid: true,
								attributes: {
									content:
										'Enter your details to get on the waitlist for BETA access',
									level: 3,
									align: 'wide',
								},
								innerBlocks: [],
								originalContent:
									'<h3 class="alignwide">Enter your details to get on the waitlist for BETA access</h3>',
								validationIssues: [],
							},
						],
						originalContent: '<div class="wp-block-column"></div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: { width: '20px' },
						innerBlocks: [
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '100px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-column" style="flex-basis:20px"></div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: [],
						innerBlocks: [
							{
								name: 'crowdsignal-forms/text-input',
								isValid: true,
								attributes: {
									label: 'First Name',
									placeholder: '',
									mandatory: false,
									inputHeight: '',
									inputWidth: '100%',
									validation: null,
								},
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
							{
								name: 'crowdsignal-forms/text-input',
								isValid: true,
								attributes: {
									label: 'Last Name',
									placeholder: '',
									mandatory: false,
									inputHeight: '',
									inputWidth: '100%',
									validation: null,
								},
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
							{
								name: 'crowdsignal-forms/text-input',
								isValid: true,
								attributes: {
									label: 'Email',
									placeholder: 'example@domain.com',
									mandatory: true,
									inputHeight: '',
									inputWidth: '100%',
									validation: [ 'emailValidation' ],
								},
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
							{
								name: 'crowdsignal-forms/text-input',
								isValid: true,
								attributes: {
									label: 'Twitter Profile',
									placeholder: '',
									mandatory: false,
									inputHeight: '',
									inputWidth: '100%',
									validation: null,
								},
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
							{
								name: 'crowdsignal-forms/text-input',
								isValid: true,
								attributes: {
									label: 'LinkedIn Profile',
									placeholder: '',
									mandatory: false,
									inputHeight: '',
									inputWidth: '100%',
									validation: null,
								},
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
							{
								name: 'crowdsignal-forms/dropdown-input',
								isValid: true,
								attributes: {
									label: 'Which best describes you?',
									buttonLabel: '',
									options: [
										{ label: 'Professional artist' },
										{ label: 'Developer' },
										{ label: 'Academic researcher' },
										{
											label:
												'Journalist or online creator',
										},
										{ label: 'Other' },
									],
									mandatory: false,
									maximumChoices: 1,
								},
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '10px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
							{
								name: 'crowdsignal-forms/submit-button',
								isValid: true,
								attributes: { label: 'Get on the waitlist' },
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-column">\n\n\n\n\n\n\n\n\n\n\n\n\n\n</div>',
						validationIssues: [],
					},
				],
				originalContent: '<div class="wp-block-columns">\n\n\n\n</div>',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/heading',
				isValid: true,
				attributes: {
					textAlign: 'left',
					content:
						"Thank you!<br>We'll be sending beta invites gradually over time.",
					level: 2,
				},
				innerBlocks: [],
				originalContent:
					'<h2 class="has-text-align-left">Thank you!<br>We\'ll be sending beta invites gradually over time.</h2>',
				validationIssues: [],
			},
		],
	]
);
