/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const DatePickerStyle = styled.div`
	input,
	textarea {
		color: var( --wp--preset--color--foreground );
		background-color: transparent;
		border-width: 1px;
		border-style: solid;
		padding: 8px;
	}
	& .react-datepicker__day--selected {
		color: var( --wp--preset--color--background );
		background-color: var( --wp--preset--color--primary );
	}
`;
