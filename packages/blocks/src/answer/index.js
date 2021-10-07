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

	const isMultipleSelection = parentQuestion.maximumChoices > 1;

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
