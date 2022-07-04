/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';
import { ModalButton } from '../../modal';

const BlankProjectPreviewWrapper = styled.div`
	align-items: center;
	box-sizing: border-box;
	display: flex;
	height: 100%;
	justify-content: center;
	width: 100%;
`;

export const blankProjectTemplate = createTemplate(
	__( 'Empty Canvas', 'dashboard' ),
	__( 'Setup your own form structure and design from scratch.', 'dashboard' ),
	[
		[],
		[
			{
				name: 'core/heading',
				attributes: {
					content: __( 'Thank you!', 'dashboard' ),
					level: 2,
					textAlign: 'center',
				},
				innerBlocks: [],
			},
		],
	],
	() => (
		<BlankProjectPreviewWrapper>
			<ModalButton>
				{ __( 'Start from scratch', 'dashboard' ) }
			</ModalButton>
		</BlankProjectPreviewWrapper>
	)
);
