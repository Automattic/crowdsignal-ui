/**
 * External dependencies
 */
import DatePicker from 'react-datepicker';
import styled from '@emotion/styled';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerWrapper = styled.div`
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

const FormDateTimePicker = ( props ) => {
	return (
		<DatePickerWrapper>
			<DatePicker
				dateFormat="MMMM d, yyyy"
				popperModifiers={ [
					{
						name: 'arrow',
						options: {
							padding: 100,
						},
					},
				] }
				{ ...props }
			/>
		</DatePickerWrapper>
	);
};

export default FormDateTimePicker;
