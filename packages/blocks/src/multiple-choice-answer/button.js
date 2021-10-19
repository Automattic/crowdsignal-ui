/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { Button, FormCheckbox } from '../components';

const ButtonContent = styled.span`
	align-items: center;
	display: flex;
	overflow: hidden;
	position: relative;

	${ FormCheckbox.className }.is-radio {
		position: absolute;
		left: -999px;
	}
`;

const ButtonAnswer = ( { attributes, className, inputProps } ) => {
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
			</ButtonContent>
		</Button>
	);
};

export default ButtonAnswer;
