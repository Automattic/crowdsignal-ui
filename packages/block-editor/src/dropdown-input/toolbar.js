/**
 * External dependencies
 */
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import {
	MultipleChoiceDropdownIcon,
	SingleChoiceDropdownIcon,
} from '@crowdsignal/icons';

const multipleChoiceControls = [
	{
		icon: SingleChoiceDropdownIcon,
		title: __( 'Single choice', 'block-editor' ),
		value: false,
		isActive: ( multipleChoice ) => ! multipleChoice,
	},
	{
		icon: MultipleChoiceDropdownIcon,
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
			<ToolbarGroup controls={ multipleChoiceToolbar } />
		</BlockControls>
	);
};

export default MultipleChoiceQuestionToolbar;
