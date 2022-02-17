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
	QuestionHeader,
	QuestionWrapper,
} from '../components';

const TextQuestion = ( { attributes, className } ) => {
	const { inputProps, error } = useField( {
		name: `q_${ attributes.clientId }[text]`,
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
		}
	);

	return (
		<QuestionWrapper attributes={ attributes } className={ classes }>
			<QuestionHeader>
				<RawHTML>{ attributes.question }</RawHTML>
			</QuestionHeader>

			<FormTextarea
				style={ {
					height: attributes.inputHeight,
				} }
				placeholder={ attributes.placeholder }
				{ ...inputProps }
			/>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</QuestionWrapper>
	);
};

export default TextQuestion;
