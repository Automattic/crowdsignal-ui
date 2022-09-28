/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Input from 'react-phone-number-input/input';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import { ErrorMessage, FormInputWrapper } from '../components';
import { useField } from '@crowdsignal/form';

const PhoneNumber = ( { attributes, className } ) => {
	const flag = attributes.flag;
	const { error, onChange, fieldValue } = useField( {
		fieldName: `q_${ attributes.clientId }[text]`,
		validation: ( value ) => {
			if ( attributes.mandatory && isEmpty( value ) ) {
				return __( 'This field is required', 'blocks' );
			}
		},
	} );

	const classes = classnames(
		className,
		'crowdsignal-forms-phone-number-block',
		{
			'is-required': attributes.mandatory,
			'is-error': error,
		}
	);

	return (
		<FormInputWrapper
			className={ classes }
			style={ { ...useColorStyles( attributes ) } }
		>
			<FormInputWrapper.Label className="crowdsignal-forms-phone-number-block__label">
				<RawHTML>{ attributes.label }</RawHTML>
			</FormInputWrapper.Label>
			{ flag && (
				<PhoneInput
					defaultCountry={ attributes.country.toUpperCase() }
					onChange={ onChange }
					placeholder={ attributes.placeholder }
					style={ {
						width: attributes.inputWidth,
					} }
					value={ fieldValue }
				/>
			) }
			{ ! flag && (
				<Input
					defaultCountry={ attributes.country.toUpperCase() }
					onChange={ onChange }
					placeholder={ attributes.placeholder }
					style={ {
						width: attributes.inputWidth,
					} }
					value={ fieldValue }
				/>
			) }
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

PhoneNumber.blockName = 'crowdsignal-forms/phone-number';

export default PhoneNumber;
