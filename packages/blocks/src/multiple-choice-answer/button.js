/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { Button, FormCheckbox } from '../components';
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
`;

const ButtonAnswer = ( {
	attributes,
	className,
	inputProps,
	isMultiSelect,
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
		>
			<ButtonContent>
				<FormCheckbox { ...inputProps } />

				{ attributes.label }

				<Checkmark
					isMultiSelect={ isMultiSelect }
					isSelected={ inputProps.checked }
				/>
			</ButtonContent>
		</Button>
	);
};

export default ButtonAnswer;
