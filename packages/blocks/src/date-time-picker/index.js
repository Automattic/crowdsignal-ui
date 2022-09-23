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
// import validator from './validations';

const DateTimePicker = ( { attributes, className } ) => {
	const { error, onChange, fieldValue } = useField( {
		fieldName: `q_${ attributes.clientId }[text]`,
		initialValue: new Date(),
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
			<FormInputWrapper.Label className="crowdsignal-forms-text-input-block__label">
				<RawHTML>{ attributes.label }</RawHTML>
			</FormInputWrapper.Label>
			<DatePicker
				className={ classes }
				selected={ parsedDate }
				dateFormat="MMMM d, yyyy"
				onChange={ handleDateChange }
				value={ parsedDate }
			/>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

DateTimePicker.blockName = 'crowdsignal-forms/date-time-picker';

export default DateTimePicker;
