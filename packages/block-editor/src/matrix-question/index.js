/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { MatrixQuestion } from '@crowdsignal/blocks';
import attributes from './attributes';
import EditMatrix from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Matrix', 'blocks' ),
	description: __( "Create polls and get your audience's opinion", 'blocks' ),
	category: 'crowdsignal-forms',
	edit: EditMatrix,
	attributes,
};

export default {
	name: MatrixQuestion.blockName,
	settings,
};
