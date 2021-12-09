/**
 * External dependencies
 */
import styled from '@emotion/styled';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useBorderStyles, useColorStyles } from '@crowdsignal/styles';

const StyledQuestionWrapper = styled.div`
	border-style: solid;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;
	margin-top: 24px;
	padding: 24px;
	position: relative;
	text-align: left;
	width: 100%;
`;

const Content = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
	width: 100%;

	& > *:not( .block-editor-inner-blocks ) {
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
		className
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
		className
	);

	return <Content className={ classes } { ...props } />;
};

QuestionWrapper.className = StyledQuestionWrapper;
QuestionWrapper.Content = QuestionWrapperContent;

export default QuestionWrapper;
