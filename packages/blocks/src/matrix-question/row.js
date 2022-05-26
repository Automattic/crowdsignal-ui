/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import Cell from './cell';

/**
 * Style dependencies
 */
import { MatrixCell } from './styles';

const Row = ( { columns, multipleChoice, questionClientId, row } ) => (
	<>
		<MatrixCell className="crowdsignal-forms-matrix-question-block__row-label">
			<RawHTML>{ row.label }</RawHTML>
		</MatrixCell>

		{ map( columns, ( column ) => (
			<Cell
				key={ column.clientId }
				multipleChoice={ multipleChoice }
				column={ column }
				row={ row }
				questionClientId={ questionClientId }
			/>
		) ) }
	</>
);

export default Row;
