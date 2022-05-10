/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const GuideWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const GuidePage = styled.div`
	flex: 1;

	img {
		width: 100%;
	}
`;

export const PageHeader = styled.h2`
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	margin-bottom: 4px;
`;

export const PageContent = styled.div`
	padding: 0 32px;
`;

export const PageText = styled.p`
	font-size: 14px;
	line-height: 24px;
`;

export const GuideFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 32px;
`;

export const PageNavigationWrapper = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
`;

export const PageIndicatorButton = styled.button`
	align-items: center;
	background-color: transparent;
	border: 0;
	display: flex;
	height: 16px;
	justify-content: center;
	margin: 0;
	padding: 0;
	width: 16px;

	> svg {
		fill: var( --color-neutral-5 );
	}

	&:hover > svg {
		fill: var( --color-nautral-light );
	}

	&.is-active > svg {
		fill: var( --color-primary );
	}
`;
