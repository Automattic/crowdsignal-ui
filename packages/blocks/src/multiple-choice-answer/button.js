/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { Button } from '../components';

const Input = styled.input`
	height: 1px;
	position: absolute;
	top: -20px;
	width: 1px;
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
			{ attributes.label }

			<Input { ...inputProps } />
		</Button>
	);
};

export default ButtonAnswer;
