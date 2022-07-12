/**
 * External dependencies
 */
import { filter, uniq } from 'lodash';

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
	const { fieldValue, onChange } = useField( {
		fieldName: `q_${ questionClientId }[${ row.clientId }]${
			multipleChoice ? '[]' : ''
		}`,
		defaultValue: multipleChoice ? [] : '',
	} );

	const isSelected = multipleChoice
		? fieldValue.includes( column.clientId )
		: fieldValue === column.clientId;

	const onChangeHandler = ( value ) => {
		let newValue = value;

		if ( multipleChoice ) {
			newValue = ! isSelected
				? uniq( [ ...fieldValue, value ] )
				: filter( fieldValue, ( v ) => v !== value );
		}

		onChange( newValue );
	};

	return (
		<MatrixCell as="label">
			<FormCheckbox
				checked={ isSelected }
				isMultiSelect={ multipleChoice }
				onChange={ onChangeHandler }
				type={ multipleChoice ? 'checkbox' : 'radio' }
				value={ column.clientId }
			/>
		</MatrixCell>
	);
};

export default Cell;
