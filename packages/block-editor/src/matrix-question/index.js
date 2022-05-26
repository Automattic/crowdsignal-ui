/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { MatrixQuestion } from '@crowdsignal/blocks';
import { MatrixQuestionIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import EditMatrix from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Matrix Question', 'blocks' ),
	description: __( 'Enter the matrix', 'blocks' ),
	category: 'crowdsignal-forms',
	edit: EditMatrix,
	icon: <MatrixQuestionIcon />,
	attributes,
};

export default {
	name: MatrixQuestion.blockName,
	settings,
};
