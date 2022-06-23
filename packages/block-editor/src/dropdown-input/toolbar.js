/**
 * External dependencies
 */
import { BlockControls } from '@wordpress/block-editor';
import { Toolbar } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import { MultipleChoiceIcon, SingleChoiceIcon } from '@crowdsignal/icons';

const multipleChoiceControls = [
	{
		icon: SingleChoiceIcon,
		title: __( 'Single choice', 'block-editor' ),
		value: false,
		isActive: ( multipleChoice ) => ! multipleChoice,
	},
	{
		icon: MultipleChoiceIcon,
		title: __( 'Multiple choice', 'block-editor' ),
		value: true,
		isActive: ( multipleChoice ) => multipleChoice,
	},
];

const MultipleChoiceQuestionToolbar = ( { attributes, setAttributes } ) => {
	const multipleChoiceToolbar = map(
		multipleChoiceControls,
		( { isActive, ...button } ) => ( {
			...button,
			isActive: isActive( attributes.multipleChoice ),
			onClick: () =>
				setAttributes( {
					multipleChoice: button.value,
				} ),
		} )
	);

	return (
		<BlockControls>
			<Toolbar controls={ multipleChoiceToolbar } />
		</BlockControls>
	);
};

export default MultipleChoiceQuestionToolbar;
