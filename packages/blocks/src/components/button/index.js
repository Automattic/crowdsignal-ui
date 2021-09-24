/**
 * External dependencies
 */
import styled from '@emotion/styled';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';

const StyledButton = styled.button`
	border: 0;
	cursor: pointer;

	&.rich-text {
		cursor: text;
	}
`;

const Button = ( {
	attributes,
	children,
	className,
	style = {},
	...props
} ) => (
	<div className={ classnames( className, 'wp-block-button' ) }>
		<StyledButton
			className="wp-block-button__link"
			style={ {
				...useColorStyles( attributes ),
				...style,
			} }
			{ ...props }
		>
			{ children }
		</StyledButton>
	</div>
);

export default Button;
