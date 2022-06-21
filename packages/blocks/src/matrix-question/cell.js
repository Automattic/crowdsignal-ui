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
	const { fieldValue, onUpdate } = useField( {
		fieldName: `q_${ questionClientId }[${ row.clientId }]${
			multipleChoice ? '[]' : ''
		}`,
		isMultiSelect: multipleChoice,
	} );

	const isSelected = multipleChoice
		? fieldValue.includes( column.clientId )
		: fieldValue === column.clientId;

	return (
		<MatrixCell as="label">
			<FormCheckbox
				checked={ isSelected }
				isMultiSelect={ multipleChoice }
				onChange={ ( event ) =>
					onUpdate( event.target.value, isSelected )
				}
				type={ multipleChoice ? 'checkbox' : 'radio' }
				value={ column.clientId }
			/>
		</MatrixCell>
	);
};

export default Cell;
