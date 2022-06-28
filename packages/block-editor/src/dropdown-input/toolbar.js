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
		value: 1,
		isActive: ( maximumChoices ) => maximumChoices === 1,
	},
	{
		icon: MultipleChoiceDropdownIcon,
		title: __( 'Multiple choice', 'block-editor' ),
		value: 2,
		isActive: ( maximumChoices ) => maximumChoices !== 1,
	},
];

const MultipleChoiceQuestionToolbar = ( { attributes, setAttributes } ) => {
	const multipleChoiceToolbar = map(
		multipleChoiceControls,
		( { isActive, ...button } ) => ( {
			...button,
			isActive: isActive( attributes.maximumChoices ),
			onClick: () =>
				setAttributes( {
					maximumChoices: button.value,
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
