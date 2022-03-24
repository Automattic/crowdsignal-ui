/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { Button, FormCheckbox } from '../components';
import RatingScaleQuestion from '../rating-scale-question';
import { getBlockStyle } from '../util';

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
		font-size: 200%;
		line-height: inherit;
	}
`;

const ButtonAnswer = ( { attributes, className, inputProps } ) => {
	const blockStyle = getBlockStyle( className );

	return (
		<Button
			as="label"
			attributes={ attributes }
			className={ className }
			outline
		>
			<ButtonContent>
				<FormCheckbox { ...inputProps } />
				<RawHTML>
					{ blockStyle === RatingScaleQuestion.Style.EMOJI
						? attributes.emoji
						: attributes.label }
				</RawHTML>
			</ButtonContent>
		</Button>
	);
};

export default ButtonAnswer;
