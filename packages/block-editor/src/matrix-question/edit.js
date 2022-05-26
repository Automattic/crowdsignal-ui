/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import {
	Fragment,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { v4 as uuid } from 'uuid';
import classnames from 'classnames';
import { filter, join, map, noop, slice, some, tap, trim, times } from 'lodash';

/**
 * Internal dependencies
 */
import {
	FormCheckbox,
	MatrixQuestion,
	QuestionHeader,
	QuestionWrapper,
} from '@crowdsignal/blocks';
import { useBlur, useClientId } from '@crowdsignal/hooks';
import Sidebar from './sidebar';
import Toolbar from './toolbar';

/**
 * Style dependencies
 */
import { Label } from './styles';

const getParentNodes = ( node, parentNodes = [] ) =>
	node
		? getParentNodes( node.parentElement, [ node, ...parentNodes ] )
		: parentNodes;

const shiftLabelFocus = ( wrapper, type, index ) =>
	setTimeout(
		() =>
			tap(
				wrapper.querySelectorAll(
					`.crowdsignal-forms-matrix-question-block__${ type }-label [role=textbox]`
				)[ index ],
				( input ) => input && input.focus()
			),
		0
	);

const EditMatrix = ( props ) => {
	const { attributes, className, setAttributes } = props;

	const [ currentColumn, setCurrentColumn ] = useState( null );
	const [ currentRow, setCurrentRow ] = useState( null );

	const [ tableVars, setTableVars ] = useState( null );

	const tableWrapper = useRef();

	useLayoutEffect( () => {
		const container = tableWrapper.current.getBoundingClientRect();

		setTableVars( {
			'--crowdsignal-forms-matrix-question-block-table-width': `${
				parseInt( container.width, 10 ) - 6
			}px`,
			'--crowdsignal-forms-matrix-question-block-table-height': `${
				parseInt( container.height, 10 ) - 6
			}px`,
		} );
	}, [ currentColumn, currentRow, attributes.columns, attributes.rows ] );

	useBlur(
		( clickEvent ) => {
			if (
				some(
					getParentNodes( clickEvent.target ),
					( element ) =>
						element.classList.contains(
							'block-editor-block-toolbar'
						) ||
						element.classList.contains(
							'crowdsignal-forms-matrix-question-block__toolbar-dropdown'
						)
				)
			) {
				return;
			}

			setCurrentColumn( null );
			setCurrentRow( null );
		},
		[ tableWrapper ]
	);

	useClientId( props );
	useEffect( () => {
		if (
			! some( attributes.columns, ( column ) => ! column.clientId ) &&
			! some( attributes.rows, ( row ) => ! row.clientId )
		) {
			return;
		}

		setAttributes( {
			columns: map( attributes.columns, ( column ) => ( {
				...column,
				clientId: column.clientId || uuid(),
			} ) ),
			rows: map( attributes.rows, ( row ) => ( {
				...row,
				clientId: row.clientId || uuid(),
			} ) ),
		} );
	}, [] );

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
		if ( insertAt <= attributes[ type ].length ) {
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

		setCurrentRow( type === 'rows' ? insertAt : null );
		setCurrentColumn( type === 'rows' ? null : insertAt );
	};

	const handleRemoveLabel = ( type, index ) => () => {
		shiftLabelFocus(
			tableWrapper.current,
			trim( type, 's' ),
			Math.max( index - 1, 0 )
		);

		setCurrentRow( type === 'rows' ? Math.max( index - 1, 0 ) : null );
		setCurrentColumn( type === 'rows' ? null : Math.max( index - 1, 0 ) );

		setAttributes( {
			[ type ]: filter(
				attributes[ type ],
				( item ) =>
					attributes[ type ].length <= 2 ||
					item !== attributes[ type ][ index ]
			),
		} );
	};

	const handleChangeCurrentColumn = ( index ) => () => {
		setCurrentRow( null );
		setCurrentColumn( index );
	};

	const handleChangeCurrentRow = ( index ) => () => {
		setCurrentColumn( null );
		setCurrentRow( index );
	};

	const blockClasses = classnames(
		'crowdsignal-forms-matrix-question-block',
		className,
		{
			'is-required': attributes.mandatory,
		}
	);

	const tableStyles = {
		gridTemplateColumns:
			'auto ' +
			join(
				times( attributes.columns.length, () => '1fr' ),
				' '
			),
		gridTemplateRows:
			'auto ' +
			join(
				times( attributes.rows.length, () => '1fr' ),
				' '
			),
		...tableVars,
	};

	return (
		<QuestionWrapper attributes={ attributes } className={ blockClasses }>
			<Toolbar
				currentColumn={ currentColumn }
				currentRow={ currentRow }
				addLabel={ handleNewLabel }
				removeLabel={ handleRemoveLabel }
				{ ...props }
			/>
			<Sidebar { ...props } />

			<RichText
				tagName={ QuestionHeader }
				placeholder={ __( 'Enter your question', 'block-editor' ) }
				onChange={ handleChangeQuestion }
				value={ attributes.question }
			/>

			<MatrixQuestion.Table ref={ tableWrapper } style={ tableStyles }>
				<MatrixQuestion.Cell />

				{ map( attributes.columns, ( column, index ) => {
					const classes = classnames(
						'crowdsignal-forms-matrix-question-block__column-label',
						{
							'is-active': index === currentColumn,
						}
					);

					return (
						<MatrixQuestion.Cell
							as={ Label }
							key={ column.clientId }
							className={ classes }
							onClick={ handleChangeCurrentColumn( index ) }
						>
							<RichText
								placeholder={ __( 'Column', 'block-editor' ) }
								onChange={ handleChangeLabel(
									'columns',
									index
								) }
								onRemove={ handleRemoveLabel(
									'columns',
									index
								) }
								onReplace={ noop }
								onSplit={ handleNewLabel(
									'columns',
									index + 1
								) }
								value={ column.label }
							/>
						</MatrixQuestion.Cell>
					);
				} ) }

				{ map( attributes.rows, ( row, index ) => {
					const classes = classnames(
						'crowdsignal-forms-matrix-question-block__row-label',
						{
							'is-active': index === currentRow,
						}
					);

					return (
						<Fragment key={ row.clientId }>
							<MatrixQuestion.Cell
								as={ Label }
								className={ classes }
								onClick={ handleChangeCurrentRow( index ) }
							>
								<RichText
									placeholder={ __( 'Row', 'block-editor' ) }
									onChange={ handleChangeLabel(
										'rows',
										index
									) }
									onRemove={ handleRemoveLabel(
										'rows',
										index
									) }
									onReplace={ noop }
									onSplit={ handleNewLabel(
										'rows',
										index + 1
									) }
									value={ row.label }
								/>
							</MatrixQuestion.Cell>

							{ times( attributes.columns.length, ( n ) => (
								<MatrixQuestion.Cell key={ n }>
									<FormCheckbox
										type={
											attributes.multipleChoice
												? 'checkbox'
												: 'radio'
										}
									/>
								</MatrixQuestion.Cell>
							) ) }
						</Fragment>
					);
				} ) }
			</MatrixQuestion.Table>
		</QuestionWrapper>
	);
};

export default EditMatrix;
