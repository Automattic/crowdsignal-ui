/**
 * External dependencies
 */
import { map } from 'lodash';
import { serialize } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { CATEGORIES } from './categories';
import PATTERNS from './patterns';

export const registerPatterns = ( settings ) => {
	return {
		...settings,
		editor: {
			...settings.editor,
			__experimentalBlockPatternCategories: CATEGORIES,
			__experimentalBlockPatterns: map( PATTERNS, ( pattern ) => ( {
				...pattern,
				content: serialize( pattern.content ),
			} ) ),
		},
	};
};
