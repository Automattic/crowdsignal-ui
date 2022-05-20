/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const Button = styled.button`
	align-items: center;
	background-color: var( --color-neutral-0 );
	border: 0;
	border-radius: 2px;
	box-sizing: border-box;
	cursor: pointer;
	color: var( --color-text );
	display: inline-flex;
	font-size: 13px;
	font-weight: normal;
	height: 36px;
	justify-content: center;
	line-height: 24px;
	outline: 0;
	padding: 6px 12px;
	position: relative;
	text-align: center;
	transition: box-shadow 0.1s linear;
	white-space: nowrap;
	width: fit-content;

	&:hover {
		border-color: var( --color-text );
	}

	&:disabled,
	&:disabled:hover {
		background-color: var( --color-surface );
		color: var( --color-text-subtle );
	}

	&.is-scary {
		background-color: var( --color-error );
		border-color: var( --color-error-dark );
		color: var( --color-text-inverted );

		&:hover {
			background-color: var( --color-error-dark );
		}

		&:disabled,
		&:disabled:hover {
			background-color: var( --color-error-10 );
			border-color: var( --color-error-20 );
		}
	}

	&.is-highlight {
		background-color: var( --color-highlight );
		border-color: var( --color-highlight-dark );
		color: var( --color-text-inverted );

		&:hover {
			background-color: var( --color-highlight-dark );
		}

		&:disabled,
		&:disabled:hover {
			background-color: var( --color-highlight-10 );
			border-color: var( --color-highlight-20 );
		}
	}

	&.is-secondary {
		background-color: var( --color-secondary );
		border-color: var( --color-secondary-dark );
		color: var( --color-text-inverted );

		&:hover {
			background-color: var( --color-secondary-dark );
		}

		&:disabled,
		&:disabled:hover {
			background-color: var( --color-secondary-10 );
			border-color: var( --color-secondary-20 );
		}
	}

	&.is-primary {
		background-color: var( --color-primary );
		color: var( --color-text-inverted );

		&:hover {
			background-color: var( --color-primary-dark );
		}

		&:disabled,
		&:disabled:hover {
			background-color: var( --color-primary-10 );
			border-color: var( --color-primary-20 );
		}
	}

	&.is-borderless {
		background-color: transparent;
		padding-left: 6px;
		padding-right: 6px;

		&:hover {
			box-shadow: inset 0 0 0 1px var( --color-text );
		}

		&.is-error {
			color: var( --color-error );

			&:hover {
				box-shadow: inset 0 0 0 1px var( --color-error );
			}
		}

		&.is-highlight {
			color: var( --color-highlight );

			&:hover {
				box-shadow: inset 0 0 0 1px var( --color-highlight );
			}
		}

		&.is-secondary {
			color: var( --color-secondary );

			&:hover {
				box-shadow: inset 0 0 0 1px var( --color-secondary );
			}
		}

		&.is-primary {
			color: var( --color-primary );

			&:hover {
				box-shadow: inset 0 0 0 1px var( --color-primary );
			}
		}
	}

	&.is-compact {
	}

	&.is-large {
		font-size: 12px;
		height: 45px;
		padding: 9px 30px;
	}
`;
