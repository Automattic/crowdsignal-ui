/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { spinAnimation } from '@crowdsignal/styles';

const Spinner = styled.span`
	width: 1.5em;
	height: 1.5em;
	border-radius: 50%;
	position: relative;
	border: 0.2em solid rgba( 255, 255, 255, 0.2 );
	border-left-color: #ffffff;
	animation: ${ spinAnimation } 1.1s infinite linear;
`;

export default Spinner;
