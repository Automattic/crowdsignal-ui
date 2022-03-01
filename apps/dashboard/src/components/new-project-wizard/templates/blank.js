/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import styled from '@emotion/styled';
import { v4 as uuid } from 'uuid';

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
`;

export const blankProjectTemplate = {
	name: __( 'Empty Canvas', 'dashboard' ),
	description: __(
		'Setup your own form structure and design from scratch.',
		'dashboard'
	),
	project: {
		draftContent: {
			pages: [
				[],
				[
					{
						attributes: {
							content: __( 'Thank you!', 'dashboard' ),
							level: 2,
							textAlign: 'center',
						},
						clientId: uuid(),
						innerBlocks: [],
						isValid: true,
						name: 'core/heading',
					},
				],
			],
		},
	},
	preview: () => (
		<BlankProjectPreviewWrapper>
			<BlankProjectStartButton>
				{ __( 'Start from scratch', 'dashboard' ) }
			</BlankProjectStartButton>
		</BlankProjectPreviewWrapper>
	),
};
