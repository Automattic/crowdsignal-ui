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
import {
	ErrorMessage,
	CheckboxAnswer,
	FormInputWrapper,
	FormCheckbox,
} from '../components';
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

	const isSelected = fieldValue === __( 'Checked', 'blocks' );
	const value = isSelected
		? __( 'Unchecked', 'blocks' )
		: __( 'Checked', 'blocks' );
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
			onChange( __( 'Unchecked', 'blocks' ) );
		}
	}, [] );

	const onChangeHandler = () => {
		onChange(
			isSelected ? __( 'Unchecked', 'blocks' ) : __( 'Checked', 'blocks' )
		);
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
				checked={ isSelected }
				isMultiSelect
				isSelected={ isSelected }
				onChange={ onChangeHandler }
				value={ value }
			/>
			<FormCheckbox.Label className="crowdsignal-forms-checkbox-input-block__label">
				<RawHTML>{ attributes.mandatory }</RawHTML>
			</FormCheckbox.Label>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

CheckboxInput.blockName = 'crowdsignal-forms/checkbox-input';

export default CheckboxInput;
