/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';

export const joinOutCommunityTemplate = createTemplate(
	__( 'Join our Community', 'dashboard' ),
	__( 'Description' ),
	[
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
				name: 'core/heading',
				isValid: true,
				attributes: {
					textAlign: 'center',
					content: '<strong>It starts here.</strong>',
					level: 1,
					align: 'wide',
				},
				innerBlocks: [],
				originalContent:
					'<h1 class="alignwide has-text-align-center"><strong>It starts here.</strong></h1>',
				validationIssues: [],
			},
			{
				name: 'core/heading',
				isValid: true,
				attributes: {
					textAlign: 'center',
					content:
						'Join our <strong>community</strong> and get early access to our products, limited pre-orders, events and much more exclusive content.',
					level: 4,
					align: 'wide',
				},
				innerBlocks: [],
				originalContent:
					'<h4 class="alignwide has-text-align-center">Join our <strong>community</strong> and get early access to our products, limited pre-orders, events and much more exclusive content.</h4>',
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
						],
						originalContent: '<div class="wp-block-column"></div>',
						validationIssues: [],
					},
				],
				originalContent: '<div class="wp-block-columns"></div>',
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
								name: 'crowdsignal-forms/dropdown-input',
								isValid: true,
								attributes: {
									label: 'Country',
									buttonLabel: '',
									options: [
										{
											label: 'Afghanistan',
										},
										{
											label: 'Albania',
										},
										{
											label: 'Algeria',
										},
										{
											label: 'Andorra',
										},
										{
											label: 'Angola',
										},
										{
											label: 'Antigua & Deps',
										},
										{
											label: 'Argentina',
										},
										{
											label: 'Armenia',
										},
										{
											label: 'Australia',
										},
										{
											label: 'Austria',
										},
										{
											label: 'Azerbaijan',
										},
										{
											label: 'Bahamas',
										},
										{
											label: 'Bahrain',
										},
										{
											label: 'Bangladesh',
										},
										{
											label: 'Barbados',
										},
										{
											label: 'Belarus',
										},
										{
											label: 'Belgium',
										},
										{
											label: 'Belize',
										},
										{
											label: 'Benin',
										},
										{
											label: 'Bhutan',
										},
										{
											label: 'Bolivia',
										},
										{
											label: 'Bosnia Herzegovina',
										},
										{
											label: 'Botswana',
										},
										{
											label: 'Brazil',
										},
										{
											label: 'Brunei',
										},
										{
											label: 'Bulgaria',
										},
										{
											label: 'Burkina',
										},
										{
											label: 'Burundi',
										},
										{
											label: 'Cambodia',
										},
										{
											label: 'Cameroon',
										},
										{
											label: 'Canada',
										},
										{
											label: 'Cape Verde',
										},
										{
											label: 'Central African Rep',
										},
										{
											label: 'Chad',
										},
										{
											label: 'Chile',
										},
										{
											label: 'China',
										},
										{
											label: 'Colombia',
										},
										{
											label: 'Comoros',
										},
										{
											label: 'Congo',
										},
										{
											label: 'Congo {Democratic Rep}',
										},
										{
											label: 'Costa Rica',
										},
										{
											label: 'Croatia',
										},
										{
											label: 'Cuba',
										},
										{
											label: 'Cyprus',
										},
										{
											label: 'Czech Republic',
										},
										{
											label: 'Denmark',
										},
										{
											label: 'Djibouti',
										},
										{
											label: 'Dominica',
										},
										{
											label: 'Dominican Republic',
										},
										{
											label: 'East Timor',
										},
										{
											label: 'Ecuador',
										},
										{
											label: 'Egypt',
										},
										{
											label: 'El Salvador',
										},
										{
											label: 'Equatorial Guinea',
										},
										{
											label: 'Eritrea',
										},
										{
											label: 'Estonia',
										},
										{
											label: 'Ethiopia',
										},
										{
											label: 'Fiji',
										},
										{
											label: 'Finland',
										},
										{
											label: 'France',
										},
										{
											label: 'Gabon',
										},
										{
											label: 'Gambia',
										},
										{
											label: 'Georgia',
										},
										{
											label: 'Germany',
										},
										{
											label: 'Ghana',
										},
										{
											label: 'Greece',
										},
										{
											label: 'Grenada',
										},
										{
											label: 'Guatemala',
										},
										{
											label: 'Guinea',
										},
										{
											label: 'Guinea-Bissau',
										},
										{
											label: 'Guyana',
										},
										{
											label: 'Haiti',
										},
										{
											label: 'Honduras',
										},
										{
											label: 'Hungary',
										},
										{
											label: 'Iceland',
										},
										{
											label: 'India',
										},
										{
											label: 'Indonesia',
										},
										{
											label: 'Iran',
										},
										{
											label: 'Iraq',
										},
										{
											label: 'Ireland {Republic}',
										},
										{
											label: 'Israel',
										},
										{
											label: 'Italy',
										},
										{
											label: 'Ivory Coast',
										},
										{
											label: 'Jamaica',
										},
										{
											label: 'Japan',
										},
										{
											label: 'Jordan',
										},
										{
											label: 'Kazakhstan',
										},
										{
											label: 'Kenya',
										},
										{
											label: 'Kiribati',
										},
										{
											label: 'Korea North',
										},
										{
											label: 'Korea South',
										},
										{
											label: 'Kosovo',
										},
										{
											label: 'Kuwait',
										},
										{
											label: 'Kyrgyzstan',
										},
										{
											label: 'Laos',
										},
										{
											label: 'Latvia',
										},
										{
											label: 'Lebanon',
										},
										{
											label: 'Lesotho',
										},
										{
											label: 'Liberia',
										},
										{
											label: 'Libya',
										},
										{
											label: 'Liechtenstein',
										},
										{
											label: 'Lithuania',
										},
										{
											label: 'Luxembourg',
										},
										{
											label: 'Macedonia',
										},
										{
											label: 'Madagascar',
										},
										{
											label: 'Malawi',
										},
										{
											label: 'Malaysia',
										},
										{
											label: 'Maldives',
										},
										{
											label: 'Mali',
										},
										{
											label: 'Malta',
										},
										{
											label: 'Marshall Islands',
										},
										{
											label: 'Mauritania',
										},
										{
											label: 'Mauritius',
										},
										{
											label: 'Mexico',
										},
										{
											label: 'Micronesia',
										},
										{
											label: 'Moldova',
										},
										{
											label: 'Monaco',
										},
										{
											label: 'Mongolia',
										},
										{
											label: 'Montenegro',
										},
										{
											label: 'Morocco',
										},
										{
											label: 'Mozambique',
										},
										{
											label: 'Myanmar, {Burma}',
										},
										{
											label: 'Namibia',
										},
										{
											label: 'Nauru',
										},
										{
											label: 'Nepal',
										},
										{
											label: 'Netherlands',
										},
										{
											label: 'New Zealand',
										},
										{
											label: 'Nicaragua',
										},
										{
											label: 'Niger',
										},
										{
											label: 'Nigeria',
										},
										{
											label: 'Norway',
										},
										{
											label: 'Oman',
										},
										{
											label: 'Pakistan',
										},
										{
											label: 'Palau',
										},
										{
											label: 'Panama',
										},
										{
											label: 'Papua New Guinea',
										},
										{
											label: 'Paraguay',
										},
										{
											label: 'Peru',
										},
										{
											label: 'Philippines',
										},
										{
											label: 'Poland',
										},
										{
											label: 'Portugal',
										},
										{
											label: 'Qatar',
										},
										{
											label: 'Romania',
										},
										{
											label: 'Russian Federation',
										},
										{
											label: 'Rwanda',
										},
										{
											label: 'St Kitts & Nevis',
										},
										{
											label: 'St Lucia',
										},
										{
											label:
												'Saint Vincent & the Grenadines',
										},
										{
											label: 'Samoa',
										},
										{
											label: 'San Marino',
										},
										{
											label: 'Sao Tome & Principe',
										},
										{
											label: 'Saudi Arabia',
										},
										{
											label: 'Senegal',
										},
										{
											label: 'Serbia',
										},
										{
											label: 'Seychelles',
										},
										{
											label: 'Sierra Leone',
										},
										{
											label: 'Singapore',
										},
										{
											label: 'Slovakia',
										},
										{
											label: 'Slovenia',
										},
										{
											label: 'Solomon Islands',
										},
										{
											label: 'Somalia',
										},
										{
											label: 'South Africa',
										},
										{
											label: 'South Sudan',
										},
										{
											label: 'Spain',
										},
										{
											label: 'Sri Lanka',
										},
										{
											label: 'Sudan',
										},
										{
											label: 'Suriname',
										},
										{
											label: 'Swaziland',
										},
										{
											label: 'Sweden',
										},
										{
											label: 'Switzerland',
										},
										{
											label: 'Syria',
										},
										{
											label: 'Taiwan',
										},
										{
											label: 'Tajikistan',
										},
										{
											label: 'Tanzania',
										},
										{
											label: 'Thailand',
										},
										{
											label: 'Togo',
										},
										{
											label: 'Tonga',
										},
										{
											label: 'Trinidad & Tobago',
										},
										{
											label: 'Tunisia',
										},
										{
											label: 'Turkey',
										},
										{
											label: 'Turkmenistan',
										},
										{
											label: 'Tuvalu',
										},
										{
											label: 'Uganda',
										},
										{
											label: 'Ukraine',
										},
										{
											label: 'United Arab Emirates',
										},
										{
											label: 'United Kingdom',
										},
										{
											label: 'United States',
										},
										{
											label: 'Uruguay',
										},
										{
											label: 'Uzbekistan',
										},
										{
											label: 'Vanuatu',
										},
										{
											label: 'Vatican City',
										},
										{
											label: 'Venezuela',
										},
										{
											label: 'Vietnam',
										},
										{
											label: 'Yemen',
										},
										{
											label: 'Zambia',
										},
										{
											label: 'Zimbabwe',
										},
									],
									mandatory: false,
									maximumChoices: 1,
									inputWidth: '100%',
								},
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
						],
						originalContent: '<div class="wp-block-column"></div>',
						validationIssues: [],
					},
					{
						name: 'core/column',
						isValid: true,
						attributes: [],
						innerBlocks: [
							{
								name: 'crowdsignal-forms/dropdown-input',
								isValid: true,
								attributes: {
									label: 'Language',
									buttonLabel: '',
									options: [
										{
											label: 'CHINESE, MANDARIN [CHN]',
										},
										{
											label: 'SPANISH [SPN]',
										},
										{
											label: 'ENGLISH [ENG]',
										},
										{
											label: 'BENGALI [BNG]',
										},
										{
											label: 'HINDI [HND]',
										},
										{
											label: 'PORTUGUESE [POR]',
										},
										{
											label: 'RUSSIAN [RUS]',
										},
										{
											label: 'JAPANESE [JPN]',
										},
										{
											label: 'GERMAN [GER]',
										},
										{
											label: 'JAVANESE [JAN]',
										},
										{
											label: 'KOREAN [KKN]',
										},
										{
											label: 'FRENCH [FRN]',
										},
										{
											label: 'VIETNAMESE [VIE]',
										},
										{
											label: 'TURKISH [TRK]',
										},
										{
											label: 'POLISH [PQL]',
										},
										{
											label:
												'ARABIC, EGYPTIAN SPOKEN [ARZ]',
										},
										{
											label: 'UKRAINIAN [UKR]',
										},
										{
											label: 'ITALIAN [ITN]',
										},
									],
									mandatory: true,
									maximumChoices: 3,
									inputWidth: '100%',
								},
								innerBlocks: [],
								originalContent: '',
								validationIssues: [],
							},
						],
						originalContent: '<div class="wp-block-column"></div>',
						validationIssues: [],
					},
				],
				originalContent: '<div class="wp-block-columns">\n\n</div>',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: { height: '50px' },
				innerBlocks: [],
				originalContent:
					'<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/paragraph',
				isValid: true,
				attributes: {
					align: 'center',
					content:
						'<em>By signing up, I accept and understand our <a rel="noreferrer noopener" href="https://www.google.com/search?client=firefox-b-d&amp;q=privacy+policy+template" target="_blank">privacy policy</a>.</em>',
					dropCap: false,
				},
				innerBlocks: [],
				originalContent:
					'<p class="has-text-align-center"><em>By signing up, I accept and understand our <a rel="noreferrer noopener" href="https://www.google.com/search?client=firefox-b-d&amp;q=privacy+policy+template" target="_blank">privacy policy</a>.</em></p>',
				validationIssues: [],
			},
			{
				name: 'crowdsignal-forms/submit-button',
				isValid: true,
				attributes: { label: 'Sign Up', justification: 'center' },
				innerBlocks: [],
				originalContent: '',
				validationIssues: [],
			},
			{
				name: 'core/spacer',
				isValid: true,
				attributes: { height: '60px' },
				innerBlocks: [],
				originalContent:
					'<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
			{
				name: 'core/cover',
				isValid: true,
				attributes: {
					url:
						'https://images.unsplash.com/photo-1544059555-b095eafc50fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3693&q=80',
					useFeaturedImage: false,
					alt: '',
					hasParallax: false,
					isRepeated: false,
					dimRatio: 0,
					backgroundType: 'image',
					focalPoint: { x: '0.51', y: '0.86' },
					minHeight: 817,
					minHeightUnit: 'px',
					isDark: false,
					align: 'full',
					style: { color: [] },
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
					'<div class="wp-block-cover alignfull is-light" style="min-height:817px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><img class="wp-block-cover__image-background" alt="" src="https://images.unsplash.com/photo-1544059555-b095eafc50fe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3693&amp;q=80" style="object-position:51% 86%" data-object-fit="cover" data-object-position="51% 86%"/><div class="wp-block-cover__inner-container"></div></div>',
				validationIssues: [],
			},
		],
		[
			{
				name: 'core/spacer',
				isValid: true,
				attributes: { height: '100px' },
				innerBlocks: [],
				originalContent:
					'<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>',
				validationIssues: [],
			},
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
		],
	]
);
