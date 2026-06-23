/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { DropdownQuestion } from '@crowdsignal/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { MultipleChoiceQuestionIcon } from '@crowdsignal/icons';
import attributes from './attributes';
import Edit from './edit';

const settings = {
	apiVersion: 1,
	title: __( 'Dropdown Question', 'block-editor' ),
	description: __(
		'Ask a question and offer an dropdown field to select an answer.',
		'block-editor'
	),
	category: 'crowdsignal-forms/question',
	keywords: [
		__( 'question', 'block-editor' ),
		__( 'dropdown', 'block-editor' ),
	],
	icon: <MultipleChoiceQuestionIcon />,
	edit: Edit,
	save: () => <InnerBlocks.Content />,
	attributes,
	supports: {
		html: false,
		reusable: false,
		align: [ 'wide', 'full' ],
	},
	getEditWrapperProps( { justification } ) {
		return {
			'data-justify': justification,
		};
	},
};

export default {
	name: DropdownQuestion.blockName,
	settings,
};
