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
import { ErrorMessage, FormInputWrapper, FormTimePicker } from '../components';
import { useField } from '@crowdsignal/form';

const TimePicker = ( { attributes, className } ) => {
	const { error, onChange, fieldValue } = useField( {
		fieldName: `q_${ attributes.clientId }[text]`,
		// initialValue: new Date().toDateString(),
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
		// the DatePicker component has to have a fully formatted date, adding an arbitrary date to value
		return Date.parse( 'Thu Sep 29 2022 ' + fieldValue );
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
			<FormTimePicker
				selected={ parsedTime }
				onChange={ handleTimeChange }
			/>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

TimePicker.blockName = 'crowdsignal-forms/time-picker';

export default TimePicker;
