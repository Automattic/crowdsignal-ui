/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const Label = styled.div`
	cursor: pointer;
	position: relative;

	&.crowdsignal-forms-matrix-question-block__column-label.is-active::before {
		border: 3px solid var( --color-primary );
		box-sizing: border-box;
		content: '';
		display: block;
		height: var( --crowdsignal-forms-matrix-question-block-table-height );
		position: absolute;
		top: 2px;
		left: 2px;
		width: calc( 100% - 4px );
	}

	&.crowdsignal-forms-matrix-question-block__row-label.is-active::before {
		border: 3px solid var( --color-primary );
		box-sizing: border-box;
		content: '';
		display: block;
		height: calc( 100% - 4px );
		position: absolute;
		top: 2px;
		left: 2px;
		width: var( --crowdsignal-forms-matrix-question-block-table-width );
	}
`;

export const PlaceholderForm = styled.form`
	align-items: flex-end;
	display: flex;
	flex-direction: row;
`;

export const PlaceholderInput = styled.div`
	margin-right: 8px;
	width: 112px;

	input[type='number'] {
		height: 36px;
	}

	.components-base-control__field {
		margin-bottom: 0;
	}
`;
