/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { Fragment, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { v4 as uuid } from 'uuid';
import { filter, join, map, noop, slice, tap, trim, times } from 'lodash';

/**
 * Internal dependencies
 */
import {
	FormCheckbox,
	MatrixQuestion,
	QuestionHeader,
	QuestionWrapper,
} from '@crowdsignal/blocks';

const shiftLabelFocus = ( wrapper, type, index ) =>
	tap(
		wrapper.querySelectorAll(
			`.crowdsignal-forms-matrix-block__${ type }-label [role=textbox]`
		)[ index ],
		( input ) => input && input.focus()
	);

const EditMatrix = ( { attributes, setAttributes } ) => {
	const tableWrapper = useRef();

	const handleChangeQuestion = ( question ) => setAttributes( { question } );

	const handleChangeLabel = ( type, index ) => ( label ) =>
		setAttributes( {
			[ type ]: tap( [ ...attributes[ type ] ], ( items ) => {
				items[ index ] = {
					...items[ index ],
					label,
				};
			} ),
		} );

	const handleNewLabel = ( type, insertAt ) => () => {
		if ( insertAt < attributes[ type ].length ) {
			setAttributes( {
				[ type ]: [
					...slice( attributes[ type ], 0, insertAt ),
					{
						clientId: uuid(),
						label: '',
					},
					...slice(
						attributes[ type ],
						insertAt,
						attributes[ type ].length
					),
				],
			} );
		}

		shiftLabelFocus(
			tableWrapper.current,
			trim( type, 's' ),
			Math.min( insertAt, attributes[ type ].length )
		);
	};

	const handleRemoveLabel = ( type, index ) => () => {
		shiftLabelFocus(
			tableWrapper.current,
			trim( type, 's' ),
			Math.max( index - 1, 0 )
		);

		setAttributes( {
			[ type ]: filter(
				attributes[ type ],
				( item ) =>
					attributes[ type ].length <= 2 ||
					item !== attributes[ type ][ index ]
			),
		} );
	};

	const tableStyles = {
		gridTemplateColumns: join(
			times( attributes.columns.length + 1, () => '1fr' ),
			' '
		),
		gridTemplateRows: join(
			times( attributes.rows.length + 1, () => '1fr' ),
			' '
		),
	};

	return (
		<QuestionWrapper attributes={ attributes }>
			<RichText
				tagName={ QuestionHeader }
				placeholder={ __( 'Enter your question', 'block-editor' ) }
				onChange={ handleChangeQuestion }
				value={ attributes.question }
			/>

			<MatrixQuestion.Table ref={ tableWrapper } style={ tableStyles }>
				<MatrixQuestion.Cell />

				{ map( attributes.columns, ( column, index ) => (
					<MatrixQuestion.Cell
						key={ column.clientId }
						className="crowdsignal-forms-matrix-block__column-label"
					>
						<RichText
							placeholder={ __( 'Column', 'block-editor' ) }
							onChange={ handleChangeLabel( 'columns', index ) }
							onRemove={ handleRemoveLabel( 'columns', index ) }
							onReplace={ noop }
							onSplit={ handleNewLabel( 'columns', index + 1 ) }
							value={ column.label }
						/>
					</MatrixQuestion.Cell>
				) ) }

				{ map( attributes.rows, ( row, index ) => (
					<Fragment key={ row.clientId }>
						<MatrixQuestion.Cell className="crowdsignal-forms-matrix-block__row-label">
							<RichText
								placeholder={ __( 'Rows', 'block-editor' ) }
								onChange={ handleChangeLabel( 'rows', index ) }
								onRemove={ handleRemoveLabel( 'rows', index ) }
								onReplace={ noop }
								onSplit={ handleNewLabel( 'rows', index + 1 ) }
								value={ row.label }
							/>
						</MatrixQuestion.Cell>

						{ times( attributes.columns.length, ( n ) => (
							<MatrixQuestion.Cell key={ n }>
								<FormCheckbox />
							</MatrixQuestion.Cell>
						) ) }
					</Fragment>
				) ) }
			</MatrixQuestion.Table>
		</QuestionWrapper>
	);
};

export default EditMatrix;
