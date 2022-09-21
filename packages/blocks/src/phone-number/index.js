/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import {
	ErrorMessage,
	FormInputWrapper,
	FormTextarea,
	FormTextInput,
} from '../components';
import { useField } from '@crowdsignal/form';
import validator from './validations';

const MULTILINE_THRESHOLD = 70;

const PhoneNumber = ( { attributes, className } ) => {
	const { error, onChange, fieldValue } = useField( {
		fieldName: `q_${ attributes.clientId }[text]`,
		validation: ( value ) => {
			if ( attributes.mandatory && isEmpty( value ) ) {
				return __( 'This field is required', 'blocks' );
			}
			if ( attributes.validation && ! isEmpty( value ) ) {
				return attributes.validation.reduce(
					( errorMsg, validatorKey ) =>
						errorMsg || validator[ validatorKey ]( value ),
					null
				);
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
			{ attributes.inputHeight < MULTILINE_THRESHOLD ? (
				<FormTextInput
					onChange={ onChange }
					placeholder={ attributes.placeholder }
					style={ {
						width: attributes.inputWidth,
						height: `${ attributes.inputHeight }px`,
					} }
					value={ fieldValue }
				/>
			) : (
				<FormTextarea
					onChange={ onChange }
					placeholder={ attributes.placeholder }
					style={ {
						height: `${ attributes.inputHeight }px`,
					} }
					value={ fieldValue }
				/>
			) }
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

PhoneNumber.blockName = 'crowdsignal-forms/phone-number';
PhoneNumber.MULTILINE_THRESHOLD = MULTILINE_THRESHOLD;

export default PhoneNumber;
