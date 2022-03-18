/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
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
	width: 100%;

	${ FormCheckbox.className }.is-radio {
		position: absolute;
		left: -999px;
	}

	.is-style-emoji & {
		font-size: 32px;
	}
`;

const ButtonAnswer = ( { attributes, className, inputProps } ) => {
	return (
		<Button
			as="label"
			attributes={ attributes }
			className={ className }
			outline
		>
			<ButtonContent>
				<FormCheckbox { ...inputProps } />
				<RawHTML>{ attributes.label }</RawHTML>
			</ButtonContent>
		</Button>
	);
};

export default ButtonAnswer;
