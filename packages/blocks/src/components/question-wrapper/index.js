/**
 * External dependencies
 */
import styled from '@emotion/styled';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useBorderStyles, useColorStyles } from '@crowdsignal/styles';
import { ErrorMessage } from '../index';

const StyledQuestionWrapper = styled.div`
	border-radius: 5px;
	border-style: solid;
	border-width: 1px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;
	margin-top: 24px;
	padding: 32px;
	position: relative;
	text-align: left;
	width: 100%;

	&.has-box-shadow {
		box-shadow: 2px 2px 8px rgba( 0, 0, 0, 0.23 );
	}

	&.is-error {
		border: 1px solid var( --color-error ) !important;
	}

	${ ErrorMessage.className } {
		position: absolute;
		left: 0;
		bottom: 0;
		transform: translateY( calc( 100% + 4px ) );
	}
`;

const Content = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
	width: 100%;

	&:not( .is-horizontal ) > *:not( .block-editor-inner-blocks ) {
		margin-top: 0;
		margin-bottom: 16px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

const QuestionWrapper = ( {
	attributes,
	children,
	className,
	style = {},
	...props
} ) => {
	const classes = classnames(
		'crowdsignal-forms-question-wrapper',
		className,
		{
			'has-box-shadow': attributes.boxShadow,
		}
	);

	return (
		<StyledQuestionWrapper
			className={ classes }
			style={ {
				...useColorStyles( attributes ),
				...useBorderStyles( attributes ),
				...style,
			} }
			{ ...props }
		>
			{ children }
		</StyledQuestionWrapper>
	);
};

const QuestionWrapperContent = ( { className, ...props } ) => {
	const classes = classnames(
		'crowdsignal-forms-question-wrapper__content',
		className,
		{
			'is-horizontal': props.horizontal,
		}
	);

	return <Content className={ classes } { ...props } />;
};

QuestionWrapper.className = StyledQuestionWrapper;
QuestionWrapper.Content = QuestionWrapperContent;

export default QuestionWrapper;
