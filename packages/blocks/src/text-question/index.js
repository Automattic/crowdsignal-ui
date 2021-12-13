import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import { FormTextarea, QuestionHeader, QuestionWrapper } from '../components';

const TextQuestion = ( { attributes, className } ) => {
	const { inputProps } = useField( {
		name: `q_${ attributes.clientId }[text]`,
	} );

	const classes = classnames( className, {
		'is-required': attributes.mandatory,
	} );

	return (
		<QuestionWrapper attributes={ attributes } className={ classes }>
			<QuestionHeader>{ attributes.question }</QuestionHeader>

			<FormTextarea
				style={ {
					height: attributes.inputHeight,
				} }
				{ ...inputProps }
			/>
		</QuestionWrapper>
	);
};

export default TextQuestion;
