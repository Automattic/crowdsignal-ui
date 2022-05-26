/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import { FormCheckbox } from '../components';

/**
 * Style dependencies
 */
import { MatrixCell } from './styles';

const Cell = ( { column, multipleChoice, questionClientId, row } ) => {
	const { inputProps } = useField( {
		name: `q_${ questionClientId }[${ row.clientId }]${
			multipleChoice ? '[]' : ''
		}`,
		type: multipleChoice ? 'checkbox' : 'radio',
		value: column.clientId,
	} );

	return (
		<MatrixCell as="label">
			<FormCheckbox { ...inputProps } />
		</MatrixCell>
	);
};

export default Cell;
