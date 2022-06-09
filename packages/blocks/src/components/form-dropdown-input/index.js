/**
 * External dependencies
 */
import { Listbox } from '@headlessui/react';
import classnames from 'classnames';
import styled from '@emotion/styled';
import { find } from 'lodash';

/**
 * Internal dependencies
 */
import { Button } from '../index';
import { withClassName } from '../../util';
import { CheckIcon, ChevronDownIcon } from '@crowdsignal/icons';

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

		&&& {
			button {
				padding: 8px 36px 8px 12px;
			}
		}

		button {
			position: relative;
			min-width: 240px;
			display: flex;
			align-items: center;
			justify-content: flex-start;

			svg {
				position: absolute;
				right: 8px;
				margin-top: 2px;
			}
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
		overflow: hidden;
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
			position: relative;

			&:before {
				position: absolute;
				top: 0;
				left: 0;
				content: '';
				width: 100%;
				height: 100%;
				background-color: var( --color-neutral-10 );
				opacity: 0.3;
			}
		}

		&.selected {
			background-color: var( --color-neutral-50 );
			color: white;
			display: flex;
			align-items: center;
			justify-content: space-between;

			svg {
				width: 26px;
				path {
					stroke: currentColor;
				}
			}
		}
	`,
	`${ BASE_CSS_CLASS }__option`
);

const FormDropdownInput = ( { buttonLabel, onChange, options, value } ) => {
	const _options = [ { clientId: '', label: buttonLabel }, ...options ];

	const getButtonText = ( selectedValue ) =>
		find( _options, ( { clientId } ) => clientId === selectedValue ).label;

	return (
		<Listbox as={ StyledListBox } value={ value } onChange={ onChange }>
			<Listbox.Button as={ StyledListButton } outline>
				<span>{ getButtonText( value ) }</span>
				<ChevronDownIcon />
			</Listbox.Button>
			<Listbox.Options as={ StyledListOptions }>
				{ _options.map( ( option, index ) => (
					<Listbox.Option
						as={ StyledListOption }
						key={ index }
						value={ option.clientId }
						className={ ( { active, selected } ) =>
							classnames( {
								active,
								selected,
								placeholder: option.clientId === '',
							} )
						}
					>
						{ ( { selected } ) => (
							<>
								<span>{ option.label }</span>
								{ selected && <CheckIcon /> }
							</>
						) }
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
