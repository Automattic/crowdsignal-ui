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
import { ErrorMessage, FormInputWrapper, FormDatePicker } from '../components';
import { useField } from '@crowdsignal/form';

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
		if ( attributes.showTimeSelectOnly ) {
			onChange( e.toTimeString() );
		} else {
			onChange( e.toDateString() );
		}
	};

	const parsedDate = useMemo( () => {
		if ( attributes.showTimeSelectOnly ) {
			// the DatePicker component has to have a fully formatted date, adding an arbitrary date to value
			return Date.parse( 'Thu Sep 29 2022 ' + fieldValue );
		}
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
			<FormDatePicker
				selected={ parsedDate }
				onChange={ handleDateChange }
				showTimeInput={ attributes.showTimeInput }
				showTimeSelectOnly={ attributes.showTimeSelectOnly }
				dateFormat={ attributes.dateFormat }
				placeholderText={ attributes.placeholderText }
			/>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

DateTimePicker.blockName = 'crowdsignal-forms/date-picker';

export default DateTimePicker;
