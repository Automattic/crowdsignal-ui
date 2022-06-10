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
import { JustificationControl } from '../util/justification-control';

const multipleChoiceControls = [
	{
		icon: SingleChoiceIcon,
		title: __( 'Single choice', 'block-editor' ),
		value: 1,
		isActive: ( { maximumChoices } ) => maximumChoices === 1,
	},
	{
		icon: MultipleChoiceIcon,
		title: __( 'Multiple choice', 'block-editor' ),
		value: 2,
		isActive: ( { maximumChoices } ) => maximumChoices !== 1,
	},
];

const MultipleChoiceQuestionToolbar = ( { attributes, setAttributes } ) => {
	const multipleChoiceToolbar = map(
		multipleChoiceControls,
		( { isActive, ...button } ) => ( {
			...button,
			isActive: isActive( attributes ),
			onClick: () =>
				setAttributes( {
					maximumChoices: button.value,
				} ),
		} )
	);

	return (
		<>
			<JustificationControl
				justification={ attributes.justification }
				onChange={ ( value ) => {
					setAttributes( { justification: value } );
				} }
			/>
			<BlockControls>
				<Toolbar controls={ multipleChoiceToolbar } />
			</BlockControls>
		</>
	);
};

export default MultipleChoiceQuestionToolbar;
