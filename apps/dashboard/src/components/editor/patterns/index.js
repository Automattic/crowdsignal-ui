/**
 * External dependencies
 */
import { map, startsWith } from 'lodash';
import { serialize } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { CATEGORIES } from './categories';
import PATTERNS from './patterns';

const addContentMeta = ( content ) => {
	return map( content, ( block ) => {
		if ( block.innerBlocks.length ) {
			block.innerBlocks = addContentMeta( block.innerBlocks );
		}

		if ( startsWith( block.name, 'core/' ) ) {
			block.isValid = true;
		}

		return block;
	} );
};

export const registerPatterns = () => {
	return {
		editor: {
			__experimentalBlockPatternCategories: CATEGORIES,
			__experimentalBlockPatterns: map( PATTERNS, ( pattern ) => ( {
				...pattern,
				content: serialize( addContentMeta( pattern.content ) ),
			} ) ),
		},
	};
};
