/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const INTERNATIONAL_THANK_YOU = {
	name: 'international-thank-you',
	title: 'International Thank You',
	description: '',
	categories: [ CATEGORY_NAMES.CONFIRMATION ],
	content: [
		{
			name: 'core/columns',
			attributes: {
				verticalAlignment: 'center',
				isStackedOnMobile: true,
				align: 'full',
			},
			innerBlocks: [
				{
					name: 'core/column',
					attributes: { verticalAlignment: 'center', width: '100%' },
					innerBlocks: [
						{
							name: 'core/paragraph',
							attributes: {
								align: 'center',
								content:
									'Danke <em><mark style="background-color:rgba(0, 0, 0, 0);color:#ffffff;" class="has-inline-color">Gracias</mark></em> ありがとうございます Grazie <em><mark style="background-color:rgba(0, 0, 0, 0);color:#ffffff;" class="has-inline-color">Thank You</mark></em>  <strong>Merci</strong> 谢谢你 <em><mark style="background-color:rgba(0, 0, 0, 0);color:#ffffff;" class="has-inline-color">Obrigada</mark></em> <strong>Dankon</strong> Дякую тобі <em><mark style="background-color:rgba(0, 0, 0, 0);color:#ffffff;" class="has-inline-color">Dziękuję</mark></em> ',
								dropCap: false,
								style: {
									typography: {
										fontSize: 65,
										lineHeight: '1.2',
									},
								},
							},
							innerBlocks: [],
						},
					],
				},
			],
		},
		{
			name: 'core/spacer',
			attributes: {
				height: '10px',
			},
			innerBlocks: [],
		},
	],
};
