/**
 * External dependencies
 */
import { useContext, useEffect } from '@wordpress/element';
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import MultipleChoiceQuestion from '../multiple-choice-question';
import { Button, FormCheckbox } from '../components';
import { getBlockStyle } from '../util';

const OTHER = 'other';

const MultipleChoiceAnswerOther = ( { attributes } ) => {
	const parentQuestion = useContext( MultipleChoiceQuestion.Context );
	const isMultiSelect = parentQuestion.maximumChoices !== 1;

	const { fieldValue, onChange: onChangeChoice } = useField( {
		fieldName: `q_${ parentQuestion.clientId }[choice]`,
	} );

	const { fieldValue: otherValue, onChange: onChangeOther } = useField( {
		fieldName: `q_${ parentQuestion.clientId }[other]`,
	} );

	const isSelected =
		! isEmpty( otherValue ) &&
		( isMultiSelect ? fieldValue.includes( OTHER ) : fieldValue === OTHER );

	const onChangeHandler = ( value ) => {
		onChangeChoice( OTHER );
		onChangeOther( value );
	};

	const classes = classnames( 'multiple-choice-answer-other', {
		'is-selected': isSelected,
	} );

	useEffect( () => {
		if ( fieldValue !== OTHER && attributes.maximumChoices === 1 ) {
			onChangeOther( '' );
		}
	}, [ fieldValue ] );

	if (
		getBlockStyle( parentQuestion.className ) ===
		MultipleChoiceQuestion.Style.LIST
	) {
		return (
			<FormCheckbox.Label className={ classes }>
				<FormCheckbox
					checked={ isSelected }
					type={ isMultiSelect ? 'checkbox' : 'radio' }
				/>
				<input
					placeholder={ attributes.otherPlaceholder }
					onChange={ ( e ) => onChangeHandler( e.target.value ) }
					value={ otherValue }
					type="text"
				/>
			</FormCheckbox.Label>
		);
	}

	return (
		<Button as={ 'div' } className={ classes } outline>
			{ isMultiSelect && (
				<FormCheckbox type="checkbox" checked={ isSelected } />
			) }
			<input
				placeholder={ attributes.otherPlaceholder }
				onChange={ ( e ) => onChangeHandler( e.target.value ) }
				value={ otherValue }
				type="text"
			/>
		</Button>
	);
};

export default MultipleChoiceAnswerOther;
