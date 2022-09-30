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

const DateTimePicker = ( { attributes, className } ) => {
	const { error, onChange, fieldValue } = useField( {
		fieldName: `q_${ attributes.clientId }[text]`,
		initialValue: new Date().toDateString(),
		validation: ( value ) => {
			if ( attributes.mandatory && isEmpty( value ) ) {
				return __( 'This field is required', 'blocks' );
			}
		},
	} );

	const handleDateChange = ( e ) => {
		onChange( e.toDateString() );
	};

	const parsedDate = useMemo( () => {
		return Date.parse( fieldValue );
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
			<FormInputWrapper.Label className="crowdsignal-forms-date-time-picker-block__label">
				<RawHTML>{ attributes.label }</RawHTML>
			</FormInputWrapper.Label>
			<FormDateTimePicker
				selected={ parsedDate }
				onChange={ handleDateChange }
			/>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

DateTimePicker.blockName = 'crowdsignal-forms/date-picker';

export default DateTimePicker;
