/**
 * External dependencies
 */
import { createContext, RawHTML } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import {
	ErrorMessage,
	JustificationWrapper,
	QuestionHeader,
	QuestionWrapper,
} from '../components';
import { useValidation } from '@crowdsignal/form';

const Context = createContext();

const DropdownQuestion = ( { attributes, children, className } ) => {
	const maximumChoices = children?.[ 0 ]?.props.attributes.maximumChoices;

	const { error } = useValidation( {
		fieldName: `q_${ attributes.clientId }[choice]${
			maximumChoices !== 1 ? '[]' : ''
		}`,
	} );

	const classes = classnames(
		'crowdsignal-forms-dropdown-question-block',
		className,
		{
			'is-required': attributes.mandatory,
			'is-error': error,
			[ `align${ attributes.align }` ]: attributes.align,
		}
	);

	return (
		<JustificationWrapper justification={ attributes.justification }>
			<QuestionWrapper attributes={ attributes } className={ classes }>
				<QuestionHeader>
					<RawHTML>{ attributes.question }</RawHTML>
				</QuestionHeader>
				<Context.Provider value={ attributes }>
					<QuestionWrapper.Content>
						{ children }
					</QuestionWrapper.Content>
				</Context.Provider>
				{ error && <ErrorMessage>{ error }</ErrorMessage> }
			</QuestionWrapper>
		</JustificationWrapper>
	);
};

DropdownQuestion.Context = Context;
DropdownQuestion.blockName = 'crowdsignal-forms/dropdown-question';

export default DropdownQuestion;
