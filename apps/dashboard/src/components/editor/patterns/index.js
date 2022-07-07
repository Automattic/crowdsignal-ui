import { CATEGORIES } from './categories';
import PATTERNS from './patterns';

export const registerPatterns = ( settings ) => {
	return {
		...settings,
		editor: {
			...settings.editor,
			__experimentalBlockPatternCategories: CATEGORIES,
			__experimentalBlockPatterns: PATTERNS,
		},
	};
};
