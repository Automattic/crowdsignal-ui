/**
 * External dependencies
 */
import { RawHTML, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import { ErrorMessage, FormInputWrapper } from '../components';
import { useField } from '@crowdsignal/form';

/**
 * Style dependencies
 */
import { DatePickerStyle } from './styles';

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
			<DatePickerStyle>
				<DatePicker
					className={ classes }
					selected={ parsedDate }
					dateFormat="MMMM d, yyyy"
					onChange={ handleDateChange }
					popperModifiers={ [
						{
							name: 'arrow',
							options: {
								padding: 100,
							},
						},
					] }
				/>
			</DatePickerStyle>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

DateTimePicker.blockName = 'crowdsignal-forms/date-picker';

export default DateTimePicker;
