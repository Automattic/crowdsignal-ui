/**
 * External dependencies
 */
import { RawHTML, useEffect } from '@wordpress/element';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import { ErrorMessage, CheckboxAnswer, FormInputWrapper } from '../components';
import { useColorStyles, useBorderStyles } from '@crowdsignal/styles';

const CheckboxInput = ( { attributes, className } ) => {
	const { error, fieldValue, onChange } = useField( {
		fieldName: `q_${ attributes.clientId }[text]`,
		validation: ( value ) => {
			if ( attributes.mandatory && ! value ) {
				return __( 'This field is required', 'blocks' );
			}
		},
	} );

	const isSelected = fieldValue === attributes.checkedText;
	const value = isSelected
		? attributes.checkedText
		: attributes.uncheckedText;
	const classes = classnames(
		className,
		'crowdsignal-forms-checkbox-input',
		'is-inline',
		{
			'is-required': attributes.mandatory,
			'is-error': error,
		}
	);

	useEffect( () => {
		if ( isEmpty( fieldValue ) ) {
			onChange( attributes.uncheckedText );
		}
	}, [] );

	const onChangeHandler = () => {
		if ( isSelected ) {
			onChange( attributes.uncheckedText );
		} else {
			onChange( attributes.checkedText );
		}
	};

	return (
		<FormInputWrapper
			style={ {
				...useColorStyles( attributes ),
				...useBorderStyles( attributes ),
			} }
			className={ classes }
		>
			<CheckboxAnswer
				attributes={ attributes }
				isMultiSelect
				isSelected={ isSelected }
				onChange={ onChangeHandler }
				value={ value }
			/>
			<FormInputWrapper.Label className="crowdsignal-forms-checkbox-input-block__label">
				<RawHTML>{ attributes.mandatory }</RawHTML>
			</FormInputWrapper.Label>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

CheckboxInput.blockName = 'crowdsignal-forms/checkbox-input';

export default CheckboxInput;
