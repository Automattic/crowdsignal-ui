/**
 * External dependencies
 */
import classnames from 'classnames';
import { useContext } from '@wordpress/element';
import { filter, uniq } from 'lodash';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import MultipleChoiceQuestion from '../multiple-choice-question';
import { getBlockStyle } from '../util';
import ButtonAnswer from '../components/button-answer';
import CheckboxAnswer from '../components/checkbox-answer';

const MultipleChoiceAnswer = ( { attributes, className } ) => {
	const parentQuestion = useContext( MultipleChoiceQuestion.Context );
	const isMultiSelect = parentQuestion.maximumChoices !== 1;

	const { fieldValue, onChange } = useField( {
		fieldName: `q_${ parentQuestion.clientId }[choice]${
			isMultiSelect ? '[]' : ''
		}`,
		defaultValue: isMultiSelect ? [] : '',
	} );

	const isSelected = isMultiSelect
		? fieldValue.includes( attributes.clientId )
		: fieldValue === attributes.clientId;

	const onChangeHandler = ( value ) => {
		let newValue = value;

		if ( isMultiSelect ) {
			newValue = ! isSelected
				? uniq( [ ...fieldValue, value ] )
				: filter( fieldValue, ( v ) => v !== value );
		}

		onChange( newValue );
	};

	const classes = classnames(
		'crowdsignal-forms-multiple-choice-answer-block',
		className,
		{
			'is-selected': isSelected,
		}
	);

	if ( ! attributes.label ) {
		return null;
	}

	if (
		getBlockStyle( parentQuestion.className ) ===
		MultipleChoiceQuestion.Style.LIST
	) {
		return (
			<CheckboxAnswer
				attributes={ attributes }
				className={ classes }
				isMultiSelect={ isMultiSelect }
				isSelected={ isSelected }
				onChange={ onChangeHandler }
				value={ attributes.clientId }
			/>
		);
	}

	return (
		<ButtonAnswer
			attributes={ attributes }
			className={ classes }
			isMultiSelect={ isMultiSelect }
			isSelected={ isSelected }
			onChange={ onChangeHandler }
			value={ attributes.clientId }
			showCheckmark
		>
			{ attributes.label }
		</ButtonAnswer>
	);
};

MultipleChoiceAnswer.blockName = 'crowdsignal-forms/multiple-choice-answer';

export default MultipleChoiceAnswer;
