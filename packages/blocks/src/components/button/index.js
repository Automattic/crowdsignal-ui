/**
 * External dependencies
 */
import styled from '@emotion/styled';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { breakpoint, useColorStyles } from '@crowdsignal/styles';
import { forwardRef } from '@wordpress/element';

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
	font-size: 1rem;

	&.rich-text {
		cursor: text;
	}

	${ breakpoint( '>480px' ) } {
		font-size: inherit;
	}
`;

const Button = ( {
	attributes = {},
	children,
	className,
	outline,
	style = {},
	fRef,
	...props
} ) => (
	<StyledButtonWrapper
		className={ classnames(
			className,
			'crowdsignal-forms-button',
			'wp-block-button',
			{
				'is-style-outline': outline,
				[ `text-align-${ attributes.textAlign }` ]: attributes.textAlign,
			}
		) }
	>
		<StyledButton
			ref={ fRef }
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

const ForwardingRefButton = forwardRef( ( props, ref ) => (
	<Button fRef={ ref } { ...props } />
) );

ForwardingRefButton.Wrapper = StyledButtonWrapper;

export default ForwardingRefButton;
