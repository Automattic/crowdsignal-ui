/**
 * External dependencies
 */
import styled from '@emotion/styled';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';

const StyledButtonWrapper = styled.div`
	&.is-selected {
		filter: invert( 1 );
	}
`;

const StyledButton = styled.button`
	border: 0;
	cursor: pointer;
	overflow: hidden;
	position: relative;

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
	<StyledButtonWrapper
		className={ classnames( className, 'wp-block-button' ) }
	>
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
	</StyledButtonWrapper>
);

export default Button;
