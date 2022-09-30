/**
 * External dependencies
 */
import DatePicker from 'react-datepicker';
import styled from '@emotion/styled';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from '@wordpress/element';

export const DateTimePickerWrapper = styled.div`
	input,
	textarea {
		color: var( --wp--preset--color--foreground );
		background-color: transparent;
		border-width: 1px;
		border-style: solid;
		padding: 8px;
	}

	.react-datepicker__day--selected {
		color: var( --wp--preset--color--background );
		background-color: var( --wp--preset--color--primary );
	}
`;

const ReadOnlyInput = forwardRef( ( { onClick, placeholder, value }, ref ) => {
	return (
		<input
			onClick={ onClick }
			placeholder={ placeholder }
			ref={ ref }
			value={ value }
			readOnly
		/>
	);
} );

const FormDateTimePicker = ( props ) => {
	const commonProps = {
		customInput: <ReadOnlyInput />,
		showPopperArrow: false,
	};

	if ( props.timePicker ) {
		return (
			<DateTimePickerWrapper>
				<DatePicker
					placeholderText={ '12:00 PM' }
					dateFormat="h:mm aa"
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={ 15 }
					{ ...commonProps }
					{ ...props }
				/>
			</DateTimePickerWrapper>
		);
	}

	return (
		<DateTimePickerWrapper>
			<DatePicker
				dateFormat="MMMM d, yyyy"
				{ ...commonProps }
				{ ...props }
			/>
		</DateTimePickerWrapper>
	);
};

export default FormDateTimePicker;
