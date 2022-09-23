/**
 * Internal dependencies
 */
import { CATEGORY_NAMES } from '../categories';

export const LARGE_HEADLINE = {
	name: 'large-headline',
	title: 'Large Headline',
	description: '',
	categories: [ CATEGORY_NAMES.COVER ],
	content: [
		{
			name: 'core/heading',
			attributes: {
				content:
					"We're a studio in Berlin with an international practice in architecture, urban planning and interior design. We believe in sharing knowledge and promoting dialogue to increase the creative potential of collaboration.",
				level: 2,
				align: 'wide',
				anchor:
					'we-re-a-studio-in-berlin-with-an-international-practice-in-architecture-urban-planning-and-interior-design-we-believe-in-sharing-knowledge-and-promoting-dialogue-to-increase-the-creative-potential-of-collaboration',
				style: { typography: { fontSize: '48px', lineHeight: '1.1' } },
			},
			innerBlocks: [],
		},
		{
			name: 'core/spacer',
			attributes: { height: '24px' },
			innerBlocks: [],
		},
		{
			name: 'crowdsignal-forms/submit-button',
			attributes: {
				label: 'Tell us about you',
				justification: 'left',
				align: 'wide',
			},
			innerBlocks: [],
		},
	],
};
