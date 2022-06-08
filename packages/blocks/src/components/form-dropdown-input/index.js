/**
 * External dependencies
 */
import { Listbox } from '@headlessui/react';
import { forwardRef } from '@wordpress/element';
import classnames from 'classnames';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { Button } from '../index';

//should live in another file
const withClassName = ( Component, hocClassName ) =>
	forwardRef( ( { className, ...props }, ref ) => (
		<Component
			ref={ ref }
			className={ classnames( hocClassName, className ) }
			{ ...props }
		/>
	) );

const BASE_CSS_CLASS = 'dropdown-input-component';

const StyledListBox = withClassName(
	styled.div`
		display: inline-block;
		position: relative;
	`,
	BASE_CSS_CLASS
);

const StyledListButton = withClassName(
	styled( Button )`
		margin-bottom: 0;

		button {
			min-width: 240px;
			text-align: left;
			padding: 8px 12px;
		}
	`,
	`${ BASE_CSS_CLASS }__button`
);

const StyledListOptions = withClassName(
	styled.div`
		width: 100%;
		position: absolute;
		top: 0;
		z-index: 1000;
		background-color: white;
		border: 1px solid var( --color-neutral-90 );
		margin: 0;
		padding: 0;
	`,
	`${ BASE_CSS_CLASS }__options`
);

const StyledEditorListOptions = styled( StyledListOptions )`
	position: relative;
	margin-top: 8px;
	padding: 8px 0;
`;

const StyledListOption = withClassName(
	styled.div`
		padding: 8px 12px;
		line-height: 1.3;

		&.active {
			background-color: var( --color-neutral-10 );
		}

		&.selected {
			background-color: var( --color-neutral-50 );
			color: white;
		}
	`,
	`${ BASE_CSS_CLASS }__option`
);

const FormDropdownInput = ( { buttonLabel, onChange, options, value } ) => {
	const _options = [ buttonLabel, ...options ];

	return (
		<Listbox as={ StyledListBox } value={ value } onChange={ onChange }>
			<Listbox.Button as={ StyledListButton } outline>
				{ value || buttonLabel }
			</Listbox.Button>
			<Listbox.Options as={ StyledListOptions }>
				{ _options.map( ( option, index ) => (
					<Listbox.Option
						as={ StyledListOption }
						key={ index }
						value={ option }
						className={ ( { active, selected } ) =>
							classnames( {
								active,
								selected,
							} )
						}
					>
						{ option }
					</Listbox.Option>
				) ) }
			</Listbox.Options>
		</Listbox>
	);
};

FormDropdownInput.Wrapper = StyledListBox;
FormDropdownInput.Button = StyledListButton;
FormDropdownInput.Options = StyledEditorListOptions;
FormDropdownInput.Option = StyledListOption;

export default FormDropdownInput;
