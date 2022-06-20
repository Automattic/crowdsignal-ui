/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { Button, FormCheckbox } from '../index';
import Checkmark from './checkmark';

const ButtonContent = styled.span`
	align-items: center;
	display: flex;
	overflow: hidden;
	position: relative;
	width: 100%;

	${ FormCheckbox.className }.is-radio {
		position: absolute;
		left: -999px;
	}

	${ Button.Wrapper }.text-align-center & {
		justify-content: center;
	}

	${ Button.Wrapper }.text-align-right & {
		justify-content: flex-end;
	}
`;

const ButtonAnswer = ( {
	attributes,
	children,
	className,
	inputProps,
	isMultiSelect,
	showCheckmark,
} ) => {
	const width = attributes.width ? `${ attributes.width }%` : null;

	return (
		<Button
			as="label"
			attributes={ attributes }
			className={ className }
			style={ {
				width,
			} }
			outline
		>
			<ButtonContent>
				{ inputProps && <FormCheckbox { ...inputProps } /> }
				<RawHTML>{ children }</RawHTML>
				{ showCheckmark && (
					<Checkmark
						isMultiSelect={ isMultiSelect }
						isSelected={ inputProps.checked }
					/>
				) }
			</ButtonContent>
		</Button>
	);
};

export default ButtonAnswer;
