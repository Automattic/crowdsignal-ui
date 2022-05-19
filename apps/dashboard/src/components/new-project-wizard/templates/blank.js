/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { createTemplate } from './create-template';

const BlankProjectPreviewWrapper = styled.div`
	align-items: center;
	box-sizing: border-box;
	display: flex;
	height: 100%;
	justify-content: center;
	width: 100%;
`;

const BlankProjectStartButton = styled.div`
	border: 1px solid var( --color-border );
	border-radius: 2px;
	box-sizing: border-box;
	background-color: var( --color-surface );
	padding: 8px 32px;
	margin: 0 8px;
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
			<BlankProjectStartButton>
				{ __( 'Start from scratch', 'dashboard' ) }
			</BlankProjectStartButton>
		</BlankProjectPreviewWrapper>
	)
);
