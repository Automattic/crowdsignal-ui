/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { ModalCloseButton } from '../../modal';

export const ShareSettings = styled.div`
	position: relative;
`;

export const ShareSettingsPopup = styled.div`
	position: absolute;
	top: 20px;
	z-index: 1000;
	width: 280px;
	padding: 16px;
	background: #ffffff;
	border: 1px solid #cccccc;
	box-shadow: 0 3px 30px rgba( 25, 30, 35, 0.2 );
	box-sizing: border-box;
	font-size: 13px;
`;

export const ShareSettingsPopupHeader = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;

	${ ModalCloseButton.className } {
		position: absolute;
		right: -10px;
	}
`;

export const ShareSettingsPopupTitle = styled.h3`
	font-size: 13px;
	font-weight: 600;
	margin: 0;
`;

export const ShareSettingsPopupContent = styled.div`
	display: block;

	.with-margin-bottom {
		margin-bottom: 24px;
	}
`;

export const ShareSettingsPopupHint = styled.div`
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
	color: var( --color-neutral-40 );
	margin-top: 12px;

	&.show-mobile-popup-hint {
		margin-left: 48px;
	}
`;
