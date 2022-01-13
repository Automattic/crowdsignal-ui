/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const ToolbarButton = styled.button`
	--wp-admin-theme-color: var( --color-primary-50 );
	--wp-admin-theme-color-darker-10: var( --color-primary-60 );
	--wp-admin-theme-color-darker-20: var( --color-primary-70 );

	&:disabled:not( .is-primary ) {
		background-color: transparent !important;
	}
`;

export const PublishButtonNotice = styled.span`
	display: block;
	padding: 8px 16px;
	width: max-content;
`;
