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
	display: flex;
	margin-bottom: 16px;

	&.justify-center {
		justify-content: center;
	}

	&.justify-right {
		justify-content: flex-end;
	}
`;

const StyledButton = styled.button`
	border: 0;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
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
		className={ classnames(
			'crowdsignal-forms-button',
			className,
			'wp-block-button'
		) }
	>
		<StyledButton
			className="crowdsignal-forms-button__button wp-block-button__link"
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
