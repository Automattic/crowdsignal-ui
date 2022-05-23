/**
 * External dependencies
 */
import { BlockControls } from '@wordpress/block-editor';
import { Toolbar, ToolbarDropdownMenu } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	tableColumnAfter,
	tableColumnBefore,
	tableColumnDelete,
	tableRowAfter,
	tableRowBefore,
	tableRowDelete,
	table,
} from '@wordpress/icons';
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
		isActive: ( { multipleChoice } ) => ! multipleChoice,
	},
	{
		icon: MultipleChoiceIcon,
		title: __( 'Multiple choice', 'block-editor' ),
		value: true,
		isActive: ( { multipleChoice } ) => !! multipleChoice,
	},
];

const MatrixQuestionToolbar = ( {
	addLabel,
	attributes,
	currentColumn,
	currentRow,
	removeLabel,
	setAttributes,
} ) => {
	const multipleChoiceToolbar = map(
		multipleChoiceControls,
		( { isActive, ...button } ) => ( {
			...button,
			isActive: isActive( attributes ),
			onClick: () =>
				setAttributes( {
					multipleChoice: button.value,
				} ),
		} )
	);

	const tableControls = [
		{
			icon: tableRowBefore,
			title: __( 'Insert row before' ),
			isDisabled: currentRow === null,
			onClick: addLabel( 'rows', currentRow ),
		},
		{
			icon: tableRowAfter,
			title: __( 'Insert row after' ),
			isDisabled: currentRow === null,
			onClick: addLabel( 'rows', currentRow + 1 ),
		},
		{
			icon: tableRowDelete,
			title: __( 'Delete row' ),
			isDisabled: currentRow === null,
			onClick: removeLabel( 'rows', currentRow ),
		},
		{
			icon: tableColumnBefore,
			title: __( 'Insert column before' ),
			isDisabled: currentColumn === null,
			onClick: addLabel( 'columns', currentColumn ),
		},
		{
			icon: tableColumnAfter,
			title: __( 'Insert column after' ),
			isDisabled: currentColumn === null,
			onClick: addLabel( 'columns', currentColumn + 1 ),
		},
		{
			icon: tableColumnDelete,
			title: __( 'Delete column' ),
			isDisabled: currentColumn === null,
			onClick: removeLabel( 'columns', currentColumn ),
		},
	];

	return (
		<>
			<BlockControls>
				<Toolbar controls={ multipleChoiceToolbar } />
			</BlockControls>
			<BlockControls group="other">
				<ToolbarDropdownMenu
					hasArrowIndicator
					icon={ table }
					label={ __( 'Edit matrix size', 'block-editor' ) }
					controls={ tableControls }
				/>
			</BlockControls>
		</>
	);
};

export default MatrixQuestionToolbar;
