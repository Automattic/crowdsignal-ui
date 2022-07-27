/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const NavBar = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	z-index: 30;
	min-height: 4px;
	font-size: 13px;
	line-height: 1;
	background-color: var( --cs--style--color--brackground, white );
	display: flex;
	flex-direction: column;
	filter: drop-shadow( 0 0 6px rgba( 0, 0, 0, 0.02 ) )
		drop-shadow( 0 2px 4px rgba( 0, 0, 0, 0.08 ) );
`;

export const NavContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	padding: 0 16px;
`;

export const Filler = styled.div`
	width: 100px;
`;

export const BackButton = styled.a`
	height: 40px;
	color: var( --color-text-subtle, #ccc );
	font-weight: 400;
	line-height: 16px;
	text-decoration: none;
	display: flex;
	align-items: center;

	svg path {
		fill: currentColor;
	}
`;

export const Pagination = styled.span`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex: 1;
	padding-right: 8px;
`;

export const DashedProgressBar = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
	gap: 8px;
`;

export const Dash = styled.div`
	width: 24px;
	height: 4px;
	opacity: 0.3;
	display: block;
	background-color: var( --cs--style--color--primary, #ccc );

	&.active {
		opacity: 1;
	}
`;

export const LinearProgressBar = styled.div`
	width: ${ ( props ) =>
		`${ ( props.currentPage * 100 ) / props.totalPages }%` };
	height: 4px;
	background-color: var( --cs--style--color--primary, #ccc );
	transition: width 0.5s ease;
`;
