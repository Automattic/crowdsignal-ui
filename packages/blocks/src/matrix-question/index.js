/**
 * External dependencies
 */
import { Fragment, RawHTML } from '@wordpress/element';
import { join, map, times } from 'lodash';

/**
 * Internal dependencies
 */
import { FormCheckbox, QuestionHeader, QuestionWrapper } from '../components';

/**
 * Style dependencies
 */
import { MatrixCell, MatrixTable } from './styles';

const MatrixQuestion = ( { attributes } ) => {
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
			<QuestionHeader>
				<RawHTML>{ attributes.question }</RawHTML>
			</QuestionHeader>

			<MatrixTable style={ tableStyles }>
				<MatrixCell />

				{ map( attributes.columns, ( column ) => (
					<MatrixCell
						key={ column.clientId }
						className="crowdsignal-forms-matrix-block__column-label"
					>
						<RawHTML>{ column.label }</RawHTML>
					</MatrixCell>
				) ) }

				{ map( attributes.rows, ( row ) => (
					<Fragment key={ row.clientId }>
						<MatrixCell className="crowdsignal-forms-matrix-block__row-label">
							<RawHTML>{ row.label }</RawHTML>
						</MatrixCell>

						{ times( attributes.columns.length, ( n ) => (
							<MatrixCell key={ n }>
								<FormCheckbox />
							</MatrixCell>
						) ) }
					</Fragment>
				) ) }
			</MatrixTable>
		</QuestionWrapper>
	);
};

MatrixQuestion.Cell = MatrixCell;
MatrixQuestion.Table = MatrixTable;

MatrixQuestion.blockName = 'crowdsignal-forms/matrix-question';

export default MatrixQuestion;
