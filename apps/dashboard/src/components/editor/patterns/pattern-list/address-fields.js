/**
 * External dependencies
 */
import { v4 as uuid } from 'uuid';

/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const ADDRESS_FIELDS = {
	name: 'address-fields',
	title: 'Address Fields',
	description: '',
	categories: [ CATEGORY_NAMES.ADDRESS_FORM ],
	content: [
		{
			name: 'core/columns',
			attributes: { isStackedOnMobile: true },
			innerBlocks: [
				{
					name: 'core/column',
					attributes: [],
					innerBlocks: [
						{
							name: 'crowdsignal-forms/text-input',
							attributes: {
								label: 'First name',
								placeholder: '',
								mandatory: false,
								inputHeight: '',
								inputWidth: '100%',
								validation: null,
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
							name: 'crowdsignal-forms/text-input',
							attributes: {
								label: 'Last name',
								placeholder: '',
								mandatory: false,
								inputHeight: '',
								inputWidth: '100%',
								validation: null,
							},
							innerBlocks: [],
						},
					],
				},
			],
		},
		{
			name: 'crowdsignal-forms/text-input',
			attributes: {
				label: 'Address',
				placeholder: '',
				mandatory: false,
				inputHeight: '',
				inputWidth: '100%',
				validation: null,
			},
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/text-input',
			attributes: {
				label: 'Postal Code',
				placeholder: '',
				mandatory: false,
				inputHeight: '',
				inputWidth: '100%',
				validation: null,
			},
			innerBlocks: [],
		},
		{
			name: 'core/columns',
			attributes: { isStackedOnMobile: true },
			innerBlocks: [
				{
					name: 'core/column',
					attributes: [],
					innerBlocks: [
						{
							name: 'crowdsignal-forms/text-input',
							attributes: {
								label: 'City',
								placeholder: '',
								mandatory: false,
								inputHeight: '',
								inputWidth: '100%',
								validation: null,
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
							name: 'crowdsignal-forms/dropdown-input',
							attributes: {
								label: 'Country',
								buttonLabel: 'Choose country',
								options: [
									{
										clientId: uuid(),
										label: 'Afghanistan',
									},
									{
										clientId: uuid(),
										label: 'Albania',
									},
									{
										clientId: uuid(),
										label: 'Algeria',
									},
									{
										clientId: uuid(),
										label: 'Andorra',
									},
									{
										clientId: uuid(),
										label: 'Angola',
									},
									{
										clientId: uuid(),
										label: 'Antigua and Barbuda',
									},
									{
										clientId: uuid(),
										label: 'Argentina',
									},
									{
										clientId: uuid(),
										label: 'Armenia',
									},
									{
										clientId: uuid(),
										label: 'Australia',
									},
									{
										clientId: uuid(),
										label: 'Austria',
									},
									{
										clientId: uuid(),
										label: 'Azerbaijan',
									},
									{
										clientId: uuid(),
										label: 'Bahamas',
									},
									{
										clientId: uuid(),
										label: 'Bahrain',
									},
									{
										clientId: uuid(),
										label: 'Bangladesh',
									},
									{
										clientId: uuid(),
										label: 'Barbados',
									},
									{
										clientId: uuid(),
										label: 'Belarus',
									},
									{
										clientId: uuid(),
										label: 'Belgium',
									},
									{
										clientId: uuid(),
										label: 'Belize',
									},
									{
										clientId: uuid(),
										label: 'Benin',
									},
									{
										clientId: uuid(),
										label: 'Bhutan',
									},
									{
										clientId: uuid(),
										label: 'Bolivia',
									},
									{
										clientId: uuid(),
										label: 'Bosnia and Herzegovina',
									},
									{
										clientId: uuid(),
										label: 'Botswana',
									},
									{
										clientId: uuid(),
										label: 'Brazil',
									},
									{
										clientId: uuid(),
										label: 'Brunei',
									},
									{
										clientId: uuid(),
										label: 'Bulgaria',
									},
									{
										clientId: uuid(),
										label: 'Burkina Faso',
									},
									{
										clientId: uuid(),
										label: 'Burundi',
									},
									{
										clientId: uuid(),
										label: "Côte d'Ivoire",
									},
									{
										clientId: uuid(),
										label: 'Cabo Verde',
									},
									{
										clientId: uuid(),
										label: 'Cambodia',
									},
									{
										clientId: uuid(),
										label: 'Cameroon',
									},
									{
										clientId: uuid(),
										label: 'Canada',
									},
									{
										clientId: uuid(),
										label: 'Central African Republic',
									},
									{
										clientId: uuid(),
										label: 'Chad',
									},
									{
										clientId: uuid(),
										label: 'Chile',
									},
									{
										clientId: uuid(),
										label: 'China',
									},
									{
										clientId: uuid(),
										label: 'Colombia',
									},
									{
										clientId: uuid(),
										label: 'Comoros',
									},
									{
										clientId: uuid(),
										label: 'Congo (Congo-Brazzaville)',
									},
									{
										clientId: uuid(),
										label: 'Costa Rica',
									},
									{
										clientId: uuid(),
										label: 'Croatia',
									},
									{
										clientId: uuid(),
										label: 'Cuba',
									},
									{
										clientId: uuid(),
										label: 'Cyprus',
									},
									{
										clientId: uuid(),
										label: 'Czechia (Czech Republic)',
									},
									{
										clientId: uuid(),
										label:
											'Democratic Republic of the Congo',
									},
									{
										clientId: uuid(),
										label: 'Denmark',
									},
									{
										clientId: uuid(),
										label: 'Djibouti',
									},
									{
										clientId: uuid(),
										label: 'Dominica',
									},
									{
										clientId: uuid(),
										label: 'Dominican Republic',
									},
									{
										clientId: uuid(),
										label: 'Ecuador',
									},
									{
										clientId: uuid(),
										label: 'Egypt',
									},
									{
										clientId: uuid(),
										label: 'El Salvador',
									},
									{
										clientId: uuid(),
										label: 'Equatorial Guinea',
									},
									{
										clientId: uuid(),
										label: 'Eritrea',
									},
									{
										clientId: uuid(),
										label: 'Estonia',
									},
									{
										clientId: uuid(),
										label: 'Eswatini (fmr. "Swaziland")',
									},
									{
										clientId: uuid(),
										label: 'Ethiopia',
									},
									{
										clientId: uuid(),
										label: 'Fiji',
									},
									{
										clientId: uuid(),
										label: 'Finland',
									},
									{
										clientId: uuid(),
										label: 'France',
									},
									{
										clientId: uuid(),
										label: 'Gabon',
									},
									{
										clientId: uuid(),
										label: 'Gambia',
									},
									{
										clientId: uuid(),
										label: 'Georgia',
									},
									{
										clientId: uuid(),
										label: 'Germany',
									},
									{
										clientId: uuid(),
										label: 'Ghana',
									},
									{
										clientId: uuid(),
										label: 'Greece',
									},
									{
										clientId: uuid(),
										label: 'Grenada',
									},
									{
										clientId: uuid(),
										label: 'Guatemala',
									},
									{
										clientId: uuid(),
										label: 'Guinea',
									},
									{
										clientId: uuid(),
										label: 'Guinea-Bissau',
									},
									{
										clientId: uuid(),
										label: 'Guyana',
									},
									{
										clientId: uuid(),
										label: 'Haiti',
									},
									{
										clientId: uuid(),
										label: 'Holy See',
									},
									{
										clientId: uuid(),
										label: 'Honduras',
									},
									{
										clientId: uuid(),
										label: 'Hungary',
									},
									{
										clientId: uuid(),
										label: 'Iceland',
									},
									{
										clientId: uuid(),
										label: 'India',
									},
									{
										clientId: uuid(),
										label: 'Indonesia',
									},
									{
										clientId: uuid(),
										label: 'Iran',
									},
									{
										clientId: uuid(),
										label: 'Iraq',
									},
									{
										clientId: uuid(),
										label: 'Ireland',
									},
									{
										clientId: uuid(),
										label: 'Israel',
									},
									{
										clientId: uuid(),
										label: 'Italy',
									},
									{
										clientId: uuid(),
										label: 'Jamaica',
									},
									{
										clientId: uuid(),
										label: 'Japan',
									},
									{
										clientId: uuid(),
										label: 'Jordan',
									},
									{
										clientId: uuid(),
										label: 'Kazakhstan',
									},
									{
										clientId: uuid(),
										label: 'Kenya',
									},
									{
										clientId: uuid(),
										label: 'Kiribati',
									},
									{
										clientId: uuid(),
										label: 'Kuwait',
									},
									{
										clientId: uuid(),
										label: 'Kyrgyzstan',
									},
									{
										clientId: uuid(),
										label: 'Laos',
									},
									{
										clientId: uuid(),
										label: 'Latvia',
									},
									{
										clientId: uuid(),
										label: 'Lebanon',
									},
									{
										clientId: uuid(),
										label: 'Lesotho',
									},
									{
										clientId: uuid(),
										label: 'Liberia',
									},
									{
										clientId: uuid(),
										label: 'Libya',
									},
									{
										clientId: uuid(),
										label: 'Liechtenstein',
									},
									{
										clientId: uuid(),
										label: 'Lithuania',
									},
									{
										clientId: uuid(),
										label: 'Luxembourg',
									},
									{
										clientId: uuid(),
										label: 'Madagascar',
									},
									{
										clientId: uuid(),
										label: 'Malawi',
									},
									{
										clientId: uuid(),
										label: 'Malaysia',
									},
									{
										clientId: uuid(),
										label: 'Maldives',
									},
									{
										clientId: uuid(),
										label: 'Mali',
									},
									{
										clientId: uuid(),
										label: 'Malta',
									},
									{
										clientId: uuid(),
										label: 'Marshall Islands',
									},
									{
										clientId: uuid(),
										label: 'Mauritania',
									},
									{
										clientId: uuid(),
										label: 'Mauritius',
									},
									{
										clientId: uuid(),
										label: 'Mexico',
									},
									{
										clientId: uuid(),
										label: 'Micronesia',
									},
									{
										clientId: uuid(),
										label: 'Moldova',
									},
									{
										clientId: uuid(),
										label: 'Monaco',
									},
									{
										clientId: uuid(),
										label: 'Mongolia',
									},
									{
										clientId: uuid(),
										label: 'Montenegro',
									},
									{
										clientId: uuid(),
										label: 'Morocco',
									},
									{
										clientId: uuid(),
										label: 'Mozambique',
									},
									{
										clientId: uuid(),
										label: 'Myanmar (formerly Burma)',
									},
									{
										clientId: uuid(),
										label: 'Namibia',
									},
									{
										clientId: uuid(),
										label: 'Nauru',
									},
									{
										clientId: uuid(),
										label: 'Nepal',
									},
									{
										clientId: uuid(),
										label: 'Netherlands',
									},
									{
										clientId: uuid(),
										label: 'New Zealand',
									},
									{
										clientId: uuid(),
										label: 'Nicaragua',
									},
									{
										clientId: uuid(),
										label: 'Niger',
									},
									{
										clientId: uuid(),
										label: 'Nigeria',
									},
									{
										clientId: uuid(),
										label: 'North Korea',
									},
									{
										clientId: uuid(),
										label: 'North Macedonia',
									},
									{
										clientId: uuid(),
										label: 'Norway',
									},
									{
										clientId: uuid(),
										label: 'Oman',
									},
									{
										clientId: uuid(),
										label: 'Pakistan',
									},
									{
										clientId: uuid(),
										label: 'Palau',
									},
									{
										clientId: uuid(),
										label: 'Palestine State',
									},
									{
										clientId: uuid(),
										label: 'Panama',
									},
									{
										clientId: uuid(),
										label: 'Papua New Guinea',
									},
									{
										clientId: uuid(),
										label: 'Paraguay',
									},
									{
										clientId: uuid(),
										label: 'Peru',
									},
									{
										clientId: uuid(),
										label: 'Philippines',
									},
									{
										clientId: uuid(),
										label: 'Poland',
									},
									{
										clientId: uuid(),
										label: 'Portugal',
									},
									{
										clientId: uuid(),
										label: 'Qatar',
									},
									{
										clientId: uuid(),
										label: 'Romania',
									},
									{
										clientId: uuid(),
										label: 'Russia',
									},
									{
										clientId: uuid(),
										label: 'Rwanda',
									},
									{
										clientId: uuid(),
										label: 'Saint Kitts and Nevis',
									},
									{
										clientId: uuid(),
										label: 'Saint Lucia',
									},
									{
										clientId: uuid(),
										label:
											'Saint Vincent and the Grenadines',
									},
									{
										clientId: uuid(),
										label: 'Samoa',
									},
									{
										clientId: uuid(),
										label: 'San Marino',
									},
									{
										clientId: uuid(),
										label: 'Sao Tome and Principe',
									},
									{
										clientId: uuid(),
										label: 'Saudi Arabia',
									},
									{
										clientId: uuid(),
										label: 'Senegal',
									},
									{
										clientId: uuid(),
										label: 'Serbia',
									},
									{
										clientId: uuid(),
										label: 'Seychelles',
									},
									{
										clientId: uuid(),
										label: 'Sierra Leone',
									},
									{
										clientId: uuid(),
										label: 'Singapore',
									},
									{
										clientId: uuid(),
										label: 'Slovakia',
									},
									{
										clientId: uuid(),
										label: 'Slovenia',
									},
									{
										clientId: uuid(),
										label: 'Solomon Islands',
									},
									{
										clientId: uuid(),
										label: 'Somalia',
									},
									{
										clientId: uuid(),
										label: 'South Africa',
									},
									{
										clientId: uuid(),
										label: 'South Korea',
									},
									{
										clientId: uuid(),
										label: 'South Sudan',
									},
									{
										clientId: uuid(),
										label: 'Spain',
									},
									{
										clientId: uuid(),
										label: 'Sri Lanka',
									},
									{
										clientId: uuid(),
										label: 'Sudan',
									},
									{
										clientId: uuid(),
										label: 'Suriname',
									},
									{
										clientId: uuid(),
										label: 'Sweden',
									},
									{
										clientId: uuid(),
										label: 'Switzerland',
									},
									{
										clientId: uuid(),
										label: 'Syria',
									},
									{
										clientId: uuid(),
										label: 'Tajikistan',
									},
									{
										clientId: uuid(),
										label: 'Tanzania',
									},
									{
										clientId: uuid(),
										label: 'Thailand',
									},
									{
										clientId: uuid(),
										label: 'Timor-Leste',
									},
									{
										clientId: uuid(),
										label: 'Togo',
									},
									{
										clientId: uuid(),
										label: 'Tonga',
									},
									{
										clientId: uuid(),
										label: 'Trinidad and Tobago',
									},
									{
										clientId: uuid(),
										label: 'Tunisia',
									},
									{
										clientId: uuid(),
										label: 'Turkey',
									},
									{
										clientId: uuid(),
										label: 'Turkmenistan',
									},
									{
										clientId: uuid(),
										label: 'Tuvalu',
									},
									{
										clientId: uuid(),
										label: 'Uganda',
									},
									{
										clientId: uuid(),
										label: 'Ukraine',
									},
									{
										clientId: uuid(),
										label: 'United Arab Emirates',
									},
									{
										clientId: uuid(),
										label: 'United Kingdom',
									},
									{
										clientId: uuid(),
										label: 'United States of America',
									},
									{
										clientId: uuid(),
										label: 'Uruguay',
									},
									{
										clientId: uuid(),
										label: 'Uzbekistan',
									},
									{
										clientId: uuid(),
										label: 'Vanuatu',
									},
									{
										clientId: uuid(),
										label: 'Venezuela',
									},
									{
										clientId: uuid(),
										label: 'Vietnam',
									},
									{
										clientId: uuid(),
										label: 'Yemen',
									},
									{
										clientId: uuid(),
										label: 'Zambia',
									},
									{
										clientId: uuid(),
										label: 'Zimbabwe',
									},
								],
								mandatory: false,
								maximumChoices: 1,
							},
							innerBlocks: [],
						},
					],
				},
			],
		},
		{
			name: 'core/spacer',
			attributes: { height: '24px' },
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/submit-button',
			attributes: { label: 'Next' },
			innerBlocks: [],
		},
	],
};
