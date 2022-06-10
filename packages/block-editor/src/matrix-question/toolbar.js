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
import { CheckboxInputIcon, RadioInputIcon } from '@crowdsignal/icons';
import { JustificationControl } from '../util/justification-control';

const multipleChoiceControls = [
	{
		icon: RadioInputIcon,
		title: __( 'Single choice', 'block-editor' ),
		value: false,
		isActive: ( { multipleChoice } ) => ! multipleChoice,
	},
	{
		icon: CheckboxInputIcon,
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

	const tableControls =
		currentRow !== null
			? [
					{
						icon: tableRowBefore,
						title: __( 'Insert row before' ),
						onClick: addLabel( 'rows', currentRow ),
					},
					{
						icon: tableRowAfter,
						title: __( 'Insert row after' ),
						onClick: addLabel( 'rows', currentRow + 1 ),
					},
					{
						icon: tableRowDelete,
						title: __( 'Delete row' ),
						onClick: removeLabel( 'rows', currentRow ),
					},
			  ]
			: [
					{
						icon: tableColumnBefore,
						title: __( 'Insert column before' ),
						onClick: addLabel( 'columns', currentColumn ),
					},
					{
						icon: tableColumnAfter,
						title: __( 'Insert column after' ),
						onClick: addLabel( 'columns', currentColumn + 1 ),
					},
					{
						icon: tableColumnDelete,
						title: __( 'Delete column' ),
						onClick: removeLabel( 'columns', currentColumn ),
					},
			  ];

	return (
		<>
			<JustificationControl
				justification={ attributes.justification }
				onChange={ ( value ) => {
					setAttributes( { justification: value } );
				} }
			/>
			<BlockControls group="other">
				<Toolbar controls={ multipleChoiceToolbar } />

				{ ( currentColumn !== null || currentRow !== null ) && (
					<ToolbarDropdownMenu
						hasArrowIndicator
						icon={ table }
						label={ __( 'Edit matrix size', 'block-editor' ) }
						controls={ tableControls }
						popoverProps={ {
							className:
								'crowdsignal-forms-matrix-question-block__toolbar-dropdown',
						} }
					/>
				) }
			</BlockControls>
		</>
	);
};

export default MatrixQuestionToolbar;
