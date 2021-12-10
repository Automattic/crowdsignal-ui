/**
 * External dependencies
 */
import classnames from 'classnames';
import { useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import MultipleChoiceQuestion from '../multiple-choice-question';
import { getBlockStyle } from '../util';
import ButtonAnswer from './button';
import CheckboxAnswer from './checkbox';

const MultipleChoiceAnswer = ( { attributes, className } ) => {
	const parentQuestion = useContext( MultipleChoiceQuestion.Context );

	const isMultiSelect = parentQuestion.maximumChoices !== 1;

	const { inputProps } = useField( {
		name: `q_${ parentQuestion.clientId }[choice]${
			isMultiSelect ? '[]' : ''
		}`,
		type: isMultiSelect ? 'checkbox' : 'radio',
		value: attributes.clientId,
	} );

	const classes = classnames(
		'crowdsignal-forms-multiple-choice-answer-block',
		className,
		{
			'is-selected': inputProps.checked,
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
				inputProps={ inputProps }
			/>
		);
	}

	return (
		<ButtonAnswer
			attributes={ attributes }
			className={ classes }
			inputProps={ inputProps }
		/>
	);
};

export default MultipleChoiceAnswer;
