/**
 * External dependencies
 */
import styled from '@emotion/styled';

const ErrorSpan = styled.span`
	color: var( --color-error );
	font-size: 0.8em;
`;

const ErrorMessage = ( { children } ) => <ErrorSpan>{ children }</ErrorSpan>;
ErrorMessage.className = ErrorSpan;

export default ErrorMessage;
