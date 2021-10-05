/**
 * External dependencies
 */
import classnames from 'classnames';
import styled from '@emotion/styled';
import { useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import { Button } from '../components';
import MultipleChoice from '../multiple-choice';

const Input = styled.input`
	height: 1px;
	position: absolute;
	top: -20px;
	width: 1px;
`;

const Answer = ( { attributes, className } ) => {
	const width = attributes.width ? `${ attributes.width }%` : null;

	const parentQuestion = useContext( MultipleChoice.Context );

	// REVIEWER NOTE: choiceType value is assigned from ChoiceType constant under block-editor/multiple-choice/constants,
	// being 0 = ChoiceType.SINGLE. Hardcoded here as I'm not sure how to import such constant values from the block-editor package
	// or how are we going to handle the option as it determines both presentational and functional properties, albeit the latter
	// would be irrevelevant since we render blocks (backend has no saying on how the block should be rendered).
	const isMultipleSelection =
		parentQuestion.choiceType !== 0 && parentQuestion.choiceType !== 1;

	const { inputProps } = useField( {
		name: `q_${ parentQuestion.clientId }[choice]${
			isMultipleSelection ? '[]' : ''
		}`,
		type: isMultipleSelection ? 'checkbox' : 'radio',
		value: attributes.clientId,
	} );

	const classes = classnames( className, {
		'is-selected': inputProps.checked,
	} );

	return (
		<Button
			as="label"
			attributes={ attributes }
			className={ classes }
			style={ {
				width,
			} }
		>
			{ attributes.label }

			<Input { ...inputProps } />
		</Button>
	);
};

export default Answer;
