/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';

export const eventTicketRegistrationTemplate = createTemplate(
	__( 'Event Registration Form', 'dashboard' ),
	__( 'Share an RSVP form with your guests to sign up for your event.' ),
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
						attributes: { width: '66%' },
						innerBlocks: [
							{
								name: 'core/cover',
								isValid: true,
								attributes: {
									url:
										'https://i2.wp.com/files.polldaddy.com/8a0899eeb85020bf3a99d1246e6588a4-62e247fe5a5bc.jpg',
									useFeaturedImage: false,
									alt: 'event image',
									hasParallax: false,
									isRepeated: false,
									dimRatio: 0,
									customOverlayColor: '#8ed1fc',
									backgroundType: 'image',
									minHeight: 480,
									minHeightUnit: 'px',
									contentPosition: 'bottom left',
									isDark: false,
								},
								innerBlocks: [
									{
										name: 'core/paragraph',
										isValid: true,
										attributes: {
											align: 'center',
											content: '',
											dropCap: false,
											placeholder: 'Write title\u2026',
											fontSize: 'large',
										},
										innerBlocks: [],
										originalContent:
											'<p class="has-text-align-center has-large-font-size"></p>',
										validationIssues: [],
									},
								],
								originalContent:
									'<div class="wp-block-cover is-light has-custom-content-position is-position-bottom-left" style="min-height:480px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim" style="background-color:#8ed1fc"></span><img class="wp-block-cover__image-background" alt="event image" src="https://i2.wp.com/files.polldaddy.com/8a0899eeb85020bf3a99d1246e6588a4-62e247fe5a5bc.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"></div></div>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-column" style="flex-basis:66%"></div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: {
							verticalAlignment: 'bottom',
							width: '34%',
						},
						innerBlocks: [
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '4px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:4px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
							{
								name: 'core/heading',
								isValid: true,
								attributes: { content: 'WordCamp', level: 2 },
								innerBlocks: [],
								originalContent: '<h2>WordCamp</h2>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content: 'Hosted by: Automattic Inc',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>Hosted by: Automattic Inc</p>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content: 'Ticket price: free',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent: '<p>Ticket price: free</p>',
								validationIssues: [],
							},
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '77px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:77px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
							{
								name: 'crowdsignal-forms/submit-button',
								isValid: true,
								attributes: { label: 'Reserve your Ticket' },
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-column is-vertically-aligned-bottom" style="flex-basis:34%">\n\n\n\n\n\n\n\n\n\n</div>',
						validationIssues: [],
					},
				],
				originalContent:
					'<div class="wp-block-columns alignwide">\n\n</div>',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: { height: '20px' },
				innerBlocks: [],
				originalContent:
					'<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>',
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
						attributes: { width: '' },
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
						originalContent: '<div class="wp-block-column"></div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: { width: '46%' },
						innerBlocks: [
							{
								name: 'core/heading',
								isValid: true,
								attributes: {
									content: 'About WordCamp',
									level: 5,
								},
								innerBlocks: [],
								originalContent: '<h5>About WordCamp</h5>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'WordCamp Europe is an informal, community-organised gathering of WordPress enthusiasts \u2013 from casual users to Core developers \u2013 where we discuss all things WordPress, share ideas and get to know each other.',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>WordCamp Europe is an informal, community-organised gathering of WordPress enthusiasts \u2013 from casual users to Core developers \u2013 where we discuss all things WordPress, share ideas and get to know each other.</p>',
								validationIssues: [],
							},
							{
								name: 'core/heading',
								isValid: true,
								attributes: {
									content: 'But\u2026 what is WordPress',
									level: 6,
								},
								innerBlocks: [],
								originalContent:
									'<h6>But\u2026 what is WordPress</h6>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'<a rel="noreferrer noopener" href="https://wordpress.org/" target="_blank">WordPress</a>&nbsp;is the world\u2019s largest Content Management System, powering over 43% (January 2022) of all the sites on the web, including those of the White House, Mercedes-Benz\u2026 and even Beyonc\u00e9.',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p><a rel="noreferrer noopener" href="https://wordpress.org/" target="_blank">WordPress</a>&nbsp;is the world\u2019s largest Content Management System, powering over 43% (January 2022) of all the sites on the web, including those of the White House, Mercedes-Benz\u2026 and even Beyonc\u00e9.</p>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'Not only is WordPress the world\u2019s largest CMS, but it\u2019s also open source, which essentially means that it\u2019s free to use!',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>Not only is WordPress the world\u2019s largest CMS, but it\u2019s also open source, which essentially means that it\u2019s free to use!</p>',
								validationIssues: [],
							},
							{
								name: 'core/heading',
								isValid: true,
								attributes: {
									content: 'What to do at a WordCamp',
									level: 6,
								},
								innerBlocks: [],
								originalContent:
									'<h6>What to do at a WordCamp</h6>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'From the many talks taking place across the three days, to the chance to educate yourself by attending one of the many hands-on sessions and workshops plus networking with all the attendees.',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>From the many talks taking place across the three days, to the chance to educate yourself by attending one of the many hands-on sessions and workshops plus networking with all the attendees.</p>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'A full schedule of sessions which will allow you to choose which topics interest you. Typically there will be a broad selection of subjects aimed at all levels of WordPress knowledge and experience, following the inclusivity ethos we firmly believe in. ',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>A full schedule of sessions which will allow you to choose which topics interest you. Typically there will be a broad selection of subjects aimed at all levels of WordPress knowledge and experience, following the inclusivity ethos we firmly believe in. </p>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'In addition to the talks, you will can meet our sponsors, from very large companies right through to smaller niche ones, who you can meet and talk to, take part in product demos and chat with employees of these companies.',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>In addition to the talks, you will can meet our sponsors, from very large companies right through to smaller niche ones, who you can meet and talk to, take part in product demos and chat with employees of these companies.</p>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'You will also be able to meet people, chatting with other attendees gives you the opportunity to get to know other members of the WordPress community, someone you\u2019ve followed on Twitter, in user groups or to catch up with a familiar face from a previous WordCamp. An ideal place to meet friends, old and new.',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>You will also be able to meet people, chatting with other attendees gives you the opportunity to get to know other members of the WordPress community, someone you\u2019ve followed on Twitter, in user groups or to catch up with a familiar face from a previous WordCamp. An ideal place to meet friends, old and new.</p>',
								validationIssues: [],
							},
							{
								name: 'core/heading',
								isValid: true,
								attributes: {
									content: 'An event for all levels',
									level: 6,
								},
								innerBlocks: [],
								originalContent:
									'<h6>An event for all levels</h6>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'We work hard to ensure that the sessions cater for all abilities and levels of knowledge.',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>We work hard to ensure that the sessions cater for all abilities and levels of knowledge.</p>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'Every year we have people coming along who have only just started with WordPress as well as those who have been using it from the beginning.',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>Every year we have people coming along who have only just started with WordPress as well as those who have been using it from the beginning.</p>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'Remember, everyone started on their WordPress journey as a newbie too!',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>Remember, everyone started on their WordPress journey as a newbie too!</p>',
								validationIssues: [],
							},
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '16px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:16px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
							{
								name: 'crowdsignal-forms/submit-button',
								isValid: true,
								attributes: { label: 'Reserve your Ticket' },
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '40px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
							{
								name: 'core/image',
								isValid: true,
								attributes: {
									align: 'full',
									url:
										'https://i0.wp.com/files.polldaddy.com/898156ee317b78b5568ac711e2b1b904-62e23bcd2cb51.png',
									alt: 'image',
									caption: '',
									href:
										'https://i0.wp.com/files.polldaddy.com/898156ee317b78b5568ac711e2b1b904-62e23bcd2cb51.png',
									sizeSlug: 'full',
									linkDestination: 'media',
								},
								innerBlocks: [],
								originalContent:
									'<figure class="wp-block-image alignfull size-full"><a href="https://i0.wp.com/files.polldaddy.com/898156ee317b78b5568ac711e2b1b904-62e23bcd2cb51.png"><img src="https://i0.wp.com/files.polldaddy.com/898156ee317b78b5568ac711e2b1b904-62e23bcd2cb51.png" alt="image"/></a></figure>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-column" style="flex-basis:46%">\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: { width: '2%' },
						innerBlocks: [],
						originalContent:
							'<div class="wp-block-column" style="flex-basis:2%"></div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: { width: '33.5%' },
						innerBlocks: [
							{
								name: 'core/heading',
								isValid: true,
								attributes: { content: 'Date:', level: 5 },
								innerBlocks: [],
								originalContent: '<h5>Date:</h5>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content: 'Oktober 11th 2022<br>11:00 AM',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>Oktober 11th 2022<br>11:00 AM</p>',
								validationIssues: [],
							},
							{
								name: 'core/heading',
								isValid: true,
								attributes: { content: 'Location:', level: 5 },
								innerBlocks: [],
								originalContent: '<h5>Location:</h5>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'Counter Culture<br>376 Broome Street<br>New York, NY 10013<br>United States',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>Counter Culture<br>376 Broome Street<br>New York, NY 10013<br>United States</p>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'View on <a href="https://goo.gl/maps/rGv6F6xQ7Wxv28ZS6">Google Maps</a>',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>View on <a href="https://goo.gl/maps/rGv6F6xQ7Wxv28ZS6">Google Maps</a></p>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-column" style="flex-basis:33.5%">\n\n\n\n\n\n\n\n</div>',
						validationIssues: [],
					},
				],
				originalContent:
					'<div class="wp-block-columns alignwide">\n\n\n\n\n\n</div>',
				validationIssues: [],
			},
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
		[
			{
				name: 'core/spacer',
				isValid: true,
				attributes: { height: '40px' },
				innerBlocks: [],
				originalContent:
					'<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/columns',
				isValid: true,
				attributes: { isStackedOnMobile: true, align: 'full' },
				innerBlocks: [
					{
						name: 'core/column',
						isValid: true,
						attributes: { width: '' },
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
						originalContent: '<div class="wp-block-column"></div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: { width: '48%' },
						innerBlocks: [
							{
								name: 'core/heading',
								isValid: true,
								attributes: {
									content: 'Reserve your Ticket',
									level: 1,
								},
								innerBlocks: [],
								originalContent: '<h1>Reserve your Ticket</h1>',
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
												name:
													'crowdsignal-forms/text-input',
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
												name:
													'crowdsignal-forms/text-input',
												isValid: true,
												attributes: {
													label: 'Email',
													placeholder:
														'example@domain.com',
													mandatory: true,
													inputHeight: '',
													inputWidth: '100%',
													validation: [
														'emailValidation',
													],
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
											{
												name: 'core/spacer',
												isValid: true,
												attributes: { height: '8px' },
												innerBlocks: [],
												originalContent:
													'<div style="height:8px" aria-hidden="true" class="wp-block-spacer"></div>',
												validationIssues: [],
											},
											{
												name:
													'crowdsignal-forms/file-input',
												isValid: true,
												attributes: {
													label:
														'Upload Profile Image',
													buttonLabel: 'Choose file',
													mandatory: false,
													allowedTypes: [ 'png' ],
													fileSizeLimit: 5242880,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
										],
										originalContent:
											'<div class="wp-block-column">\n\n\n\n\n\n</div>',
										validationIssues: [],
									},
									{
										name: 'core/column',
										isValid: true,
										attributes: [],
										innerBlocks: [
											{
												name:
													'crowdsignal-forms/text-input',
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
												name:
													'crowdsignal-forms/text-input',
												isValid: true,
												attributes: {
													label: 'WordPress Username',
													placeholder: '',
													mandatory: false,
													inputHeight: 40,
													inputWidth: '100%',
													validation: null,
												},
												innerBlocks: [],
												originalContent: '',
												validationIssues: [],
											},
										],
										originalContent:
											'<div class="wp-block-column">\n\n</div>',
										validationIssues: [],
									},
								],
								originalContent:
									'<div class="wp-block-columns">\n\n</div>',
								validationIssues: [],
							},
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '16px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:16px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
							{
								name: 'crowdsignal-forms/submit-button',
								isValid: true,
								attributes: { label: 'Submit Reservation' },
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '24px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-column" style="flex-basis:48%">\n\n\n\n\n\n\n\n</div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: { width: '33.5%' },
						innerBlocks: [
							{
								name: 'core/spacer',
								isValid: true,
								attributes: { height: '64px' },
								innerBlocks: [],
								originalContent:
									'<div style="height:64px" aria-hidden="true" class="wp-block-spacer"></div>',
								validationIssues: [],
							},
							{
								name: 'core/heading',
								isValid: true,
								attributes: { content: 'Date:', level: 5 },
								innerBlocks: [],
								originalContent: '<h5>Date:</h5>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content: 'Oktober 11th 2022<br>11:00 AM',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>Oktober 11th 2022<br>11:00 AM</p>',
								validationIssues: [],
							},
							{
								name: 'core/heading',
								isValid: true,
								attributes: { content: 'Location:', level: 5 },
								innerBlocks: [],
								originalContent: '<h5>Location:</h5>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'Counter Culture<br>376 Broome Street<br>New York, NY 10013<br>United States',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>Counter Culture<br>376 Broome Street<br>New York, NY 10013<br>United States</p>',
								validationIssues: [],
							},
							{
								name: 'core/paragraph',
								isValid: true,
								attributes: {
									content:
										'View on <a href="https://goo.gl/maps/rGv6F6xQ7Wxv28ZS6">Google Maps</a>',
									dropCap: false,
								},
								innerBlocks: [],
								originalContent:
									'<p>View on <a href="https://goo.gl/maps/rGv6F6xQ7Wxv28ZS6">Google Maps</a></p>',
								validationIssues: [],
							},
						],
						originalContent:
							'<div class="wp-block-column" style="flex-basis:33.5%">\n\n\n\n\n\n\n\n\n\n</div>',
						validationIssues: [],
					},
				],
				originalContent:
					'<div class="wp-block-columns alignfull">\n\n\n\n</div>',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/heading',
				isValid: true,
				attributes: {
					textAlign: 'center',
					content: 'Thank you!',
					level: 2,
				},
				innerBlocks: [],
				originalContent:
					'<h2 class="has-text-align-center">Thank you!</h2>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					align: 'center',
					content:
						'You will get an email with a confirmation of your ticket reservation!<br>See you soon!',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p class="has-text-align-center">You will get an email with a confirmation of your ticket reservation!<br>See you soon!</p>',
				validationIssues: [],
			},
		],
	]
);
