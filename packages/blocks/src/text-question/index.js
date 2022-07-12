/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import {
	ErrorMessage,
	FormTextarea,
	JustificationWrapper,
	QuestionHeader,
	QuestionWrapper,
} from '../components';

const TextQuestion = ( { attributes, className } ) => {
	const { error, fieldValue, onChange } = useField( {
		fieldName: `q_${ attributes.clientId }[text]`,
		validation: ( value ) => {
			if ( attributes.mandatory && isEmpty( value ) ) {
				return __( 'This question is required', 'blocks' );
			}
		},
	} );

	const classes = classnames(
		className,
		'crowdsignal-forms-text-question-block',
		{
			'is-required': attributes.mandatory,
			'is-error': error,
			[ `align${ attributes.align }` ]: attributes.align,
		}
	);

	const style = {
		height: attributes.inputHeight,
	};

	return (
		<JustificationWrapper justification={ attributes.justification }>
			<QuestionWrapper attributes={ attributes } className={ classes }>
				<QuestionHeader>
					<RawHTML>{ attributes.question }</RawHTML>
				</QuestionHeader>

				<FormTextarea
					onChange={ onChange }
					placeholder={ attributes.placeholder }
					style={ style }
					value={ fieldValue }
				/>
				{ error && <ErrorMessage>{ error }</ErrorMessage> }
			</QuestionWrapper>
		</JustificationWrapper>
	);
};

TextQuestion.blockName = 'crowdsignal-forms/text-question';

export default TextQuestion;
