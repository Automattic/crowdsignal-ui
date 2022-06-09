/**
 * External dependencies
 */
import { RawHTML, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { filter, first, isEmpty, join, map, times } from 'lodash';

/**
 * Internal dependencies
 */
import { useValidation } from '@crowdsignal/form';
import {
	ErrorMessage,
	JustificationWrapper,
	QuestionHeader,
	QuestionWrapper,
} from '../components';
import Row from './row';

/**
 * Style dependencies
 */
import { MatrixCell, MatrixTable } from './styles';

const MatrixQuestion = ( { attributes, className } ) => {
	const rows = useMemo(
		() => filter( attributes.rows, ( row ) => !! row.label ),
		[]
	);
	const columns = useMemo(
		() => filter( attributes.columns, ( column ) => !! column.label ),
		[]
	);

	const errors = filter(
		map( rows, ( row ) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const { error } = useValidation( {
				fieldName: `q_${ attributes.clientId }[${ row.clientId }]${
					attributes.multipleChoice ? '[]' : ''
				}`,
				validation: ( value ) => {
					if ( attributes.mandatory && isEmpty( value ) ) {
						return __( 'This question is required', 'blocks' );
					}
				},
			} );

			return error;
		} )
	);

	const classes = classnames(
		'crowdsignal-forms-matrix-question-block',
		className,
		{
			'is-required': attributes.mandatory,
			'is-error': ! isEmpty( errors ),
			[ `align${ attributes.align }` ]: attributes.align,
		}
	);

	const tableStyles = {
		'--crowdsignal-forms-question-border-color':
			attributes.tableBorderColor,
		gridTemplateColumns:
			'auto ' +
			join(
				times( columns.length, () => '1fr' ),
				' '
			),
		gridTemplateRows:
			'auto ' +
			join(
				times( rows.length, () => '1fr' ),
				' '
			),
	};

	return (
		<JustificationWrapper justification={ attributes.justification }>
			<QuestionWrapper attributes={ attributes } className={ classes }>
				<QuestionHeader>
					<RawHTML>{ attributes.question }</RawHTML>
				</QuestionHeader>

				<MatrixTable style={ tableStyles }>
					<MatrixCell />

					{ map( columns, ( column ) => (
						<MatrixCell
							key={ column.clientId }
							className="crowdsignal-forms-matrix-question-block__column-label"
						>
							<RawHTML>{ column.label }</RawHTML>
						</MatrixCell>
					) ) }

					{ map( rows, ( row ) => (
						<Row
							key={ row.clientId }
							questionClientId={ attributes.clientId }
							row={ row }
							columns={ columns }
							multipleChoice={ attributes.multipleChoice }
						/>
					) ) }
				</MatrixTable>

				{ ! isEmpty( errors ) && (
					<ErrorMessage>{ first( errors ) }</ErrorMessage>
				) }
			</QuestionWrapper>
		</JustificationWrapper>
	);
};

MatrixQuestion.Cell = MatrixCell;
MatrixQuestion.Table = MatrixTable;

MatrixQuestion.blockName = 'crowdsignal-forms/matrix-question';

export default MatrixQuestion;
