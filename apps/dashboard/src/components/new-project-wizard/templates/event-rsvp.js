/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';

export const eventRSVPTemplate = createTemplate(
	__( 'Event RSVP', 'dashboard' ),
	__( 'Description' ),
	[
		[
			{
				name: 'core/cover',
				attributes: {
					url:
						'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80',
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
						name: 'core/cover',
						attributes: {
							alt: '',
							hasParallax: false,
							isRepeated: false,
							dimRatio: 100,
							customOverlayColor: '#ffffff',
							backgroundType: 'image',
							minHeight: 241,
							minHeightUnit: 'px',
							contentPosition: 'top left',
							isDark: false,
						},
						innerBlocks: [
							{
								name: 'core/heading',
								attributes: {
									content:
										'We are glad you can join us!<br>For whom may we reserve a ticket?',
									level: 4,
									anchor:
										'we-are-glad-you-can-join-us-for-whom-may-we-reserve-a-ticket',
								},
								innerBlocks: [],
							},
							{
								name: 'crowdsignal-forms/text-input',
								attributes: {
									label: 'Name',
									placeholder: '',
									mandatory: false,
									inputHeight: 40,
									inputWidth: '100%',
									validation: null,
								},
								innerBlocks: [],
							},
							{
								name: 'crowdsignal-forms/text-input',
								attributes: {
									label: 'Email',
									placeholder: '',
									mandatory: false,
									inputHeight: 40,
									inputWidth: '100%',
									validation: null,
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
			{
				name: 'core/paragraph',
				attributes: {
					content: 'Lorem Ipsum',
					dropCap: false,
				},
				innerBlocks: [],
			},
		],
		[
			{
				name: 'core/cover',
				attributes: {
					url:
						'https://images.unsplash.com/photo-1638132704795-6bb223151bf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
					alt: '',
					hasParallax: false,
					isRepeated: false,
					dimRatio: 20,
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
						name: 'crowdsignal-forms/multiple-choice-question',
						attributes: {
							question: 'How many people will be in your party?',
							mandatory: false,
							allowOther: false,
							minimumChoices: 0,
							maximumChoices: 1,
							borderRadius: 0,
							boxShadow: false,
							borderWidth: 1,
							className: 'is-style-button',
						},
						innerBlocks: [
							{
								name:
									'crowdsignal-forms/multiple-choice-answer',
								attributes: {
									label: '1',
									shareSiblingAttributes: true,
								},
								innerBlocks: [],
							},
							{
								name:
									'crowdsignal-forms/multiple-choice-answer',
								attributes: {
									label: '2',
									shareSiblingAttributes: true,
								},
								innerBlocks: [],
							},
							{
								name:
									'crowdsignal-forms/multiple-choice-answer',
								attributes: {
									label: '3',
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
		[
			{
				name: 'core/cover',
				attributes: {
					url:
						'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
					alt: '',
					hasParallax: false,
					isRepeated: false,
					dimRatio: 50,
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
								'Do you or your guests have any dietary restrictions?',
							note: '',
							placeholder:
								'Please tell us about your preferences',
							mandatory: false,
							borderRadius: 0,
							boxShadow: false,
							borderWidth: 1,
							inputHeight: '209px',
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
		],
		[
			{
				name: 'core/cover',
				attributes: {
					url:
						'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
					alt: '',
					hasParallax: false,
					isRepeated: false,
					dimRatio: 50,
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
						name: 'crowdsignal-forms/multiple-choice-question',
						attributes: {
							question:
								'Will you be able to join us for the After Party?',
							mandatory: false,
							allowOther: false,
							minimumChoices: 0,
							maximumChoices: 1,
							borderRadius: 0,
							boxShadow: false,
							borderWidth: 1,
							className: 'is-style-button',
						},
						innerBlocks: [
							{
								name: 'core/paragraph',
								attributes: {
									content:
										'<em>The location for the party will be just a 5 min walk from the main conference.</em>',
									dropCap: false,
								},
								innerBlocks: [],
							},
							{
								name:
									'crowdsignal-forms/multiple-choice-answer',
								attributes: {
									label: 'Yes',
									shareSiblingAttributes: true,
								},
								innerBlocks: [],
							},
							{
								name:
									'crowdsignal-forms/multiple-choice-answer',
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
			},
		],
		[
			{
				name: 'core/cover',
				attributes: {
					url:
						'https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
					alt: '',
					hasParallax: false,
					isRepeated: false,
					dimRatio: 0,
					backgroundType: 'image',
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
			{
				name: 'core/heading',
				attributes: {
					textAlign: 'left',
					content: 'Thank you!<br>We reserved your ticket!',
					level: 2,
					anchor: 'thank-you-we-reserved-your-ticket',
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
