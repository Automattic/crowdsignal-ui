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
import { __ } from '@wordpress/i18n';

const MultipleChoiceAnswerOther = ( { attributes } ) => {
	const parentQuestion = useContext( MultipleChoiceQuestion.Context );
	const isMultiSelect = parentQuestion.maximumChoices !== 1;
	const { otherPlaceholder } = attributes;

	const { fieldValue, onChange } = useField( {
		fieldName: `q_${ parentQuestion.clientId }[choice]${
			isMultiSelect ? '[]' : ''
		}`,
	} );

	const { fieldValue: otherValue, onChange: onChangeOther } = useField( {
		fieldName: `q_${ parentQuestion.clientId }[other]`,
	} );

	const isSelected = ! isEmpty( otherValue );

	const changeHandler = ( value ) => {
		onChangeOther( value );
		onChange( ! isMultiSelect ? '' : fieldValue );
	};

	const classes = classnames( 'multiple-choice-answer-other', {
		'is-selected': isSelected,
	} );

	useEffect( () => {
		if ( ! isEmpty( fieldValue ) && ! isMultiSelect ) {
			onChangeOther( '' );
		}
	}, [ fieldValue ] );

	const placeholder = ! isEmpty( otherPlaceholder )
		? otherPlaceholder
		: __( 'Enter other', 'block-editor' );

	if (
		getBlockStyle( parentQuestion.className ) ===
		MultipleChoiceQuestion.Style.LIST
	) {
		return (
			<FormCheckbox.Label className={ classes }>
				<input
					placeholder={ placeholder }
					onChange={ ( e ) => changeHandler( e.target.value ) }
					value={ otherValue }
					type="text"
				/>
			</FormCheckbox.Label>
		);
	}

	return (
		<Button as={ 'div' } className={ classes } outline>
			<input
				placeholder={ placeholder }
				onChange={ ( e ) => changeHandler( e.target.value ) }
				value={ otherValue }
				type="text"
			/>
		</Button>
	);
};

export default MultipleChoiceAnswerOther;
