/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import { ErrorMessage, FormInputWrapper, FormCheckbox } from '../components';
import { useColorStyles, useBorderStyles } from '@crowdsignal/styles';

const CheckboxInput = ( { attributes, className } ) => {
	const isChecked = __( 'Checked', 'blocks' );
	const isUnchecked = __( 'Unchecked', 'blocks' );
	const { error, fieldValue, onChange } = useField( {
		fieldName: `q_${ attributes.clientId }[text]`,
		initialValue: isUnchecked,
		validation: ( value ) => {
			if ( attributes.mandatory && value === isUnchecked ) {
				return __( 'This field is required', 'blocks' );
			}
		},
	} );

	const isSelected = fieldValue === isChecked;
	const value = isSelected ? isUnchecked : isChecked;
	const classes = classnames(
		className,
		'crowdsignal-forms-checkbox-input',
		'is-inline',
		{
			'is-required': attributes.mandatory,
			'is-error': error,
		}
	);

	const onChangeHandler = () => {
		onChange( isSelected ? isUnchecked : isChecked );
	};

	return (
		<FormInputWrapper
			style={ {
				...useColorStyles( attributes ),
				...useBorderStyles( attributes ),
			} }
			className={ classes }
		>
			<FormInputWrapper.Label>
				<FormCheckbox
					checked={ isSelected }
					onChange={ onChangeHandler }
					value={ value }
				/>
				<RawHTML>{ attributes.label }</RawHTML>
			</FormInputWrapper.Label>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

CheckboxInput.blockName = 'crowdsignal-forms/checkbox-input';

export default CheckboxInput;
