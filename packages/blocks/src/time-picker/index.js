/**
 * External dependencies
 */
import { RawHTML, useMemo } from '@wordpress/element';
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
	FormDateTimePicker,
} from '../components';
import { useField } from '@crowdsignal/form';

const TimePicker = ( { attributes, className } ) => {
	const { error, onChange, fieldValue } = useField( {
		fieldName: `q_${ attributes.clientId }[text]`,
		validation: ( value ) => {
			if ( attributes.mandatory && isEmpty( value ) ) {
				return __( 'This field is required', 'blocks' );
			}
		},
	} );

	const handleTimeChange = ( e ) => {
		onChange( e.toTimeString() );
	};

	const parsedTime = useMemo( () => {
		if ( ! isEmpty( fieldValue ) ) {
			return new Date( `${ new Date().toDateString() } ${ fieldValue }` );
		}
	}, [ fieldValue ] );

	const classes = classnames(
		className,
		'crowdsignal-forms-date-time-picker-block',
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
			<FormInputWrapper.Label className="crowdsignal-forms-time-picker-block__label">
				<RawHTML>{ attributes.label }</RawHTML>
			</FormInputWrapper.Label>
			<FormDateTimePicker
				selected={ parsedTime }
				onChange={ handleTimeChange }
				timePicker
			/>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

TimePicker.blockName = 'crowdsignal-forms/time-picker';

export default TimePicker;
