/**
 * External dependencies
 */
import classnames from 'classnames';
import { useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import RatingScaleQuestion from '../rating-scale-question';
import ButtonAnswer from './button';

const RatingScaleAnswer = ( { attributes, className } ) => {
	const parentQuestion = useContext( RatingScaleQuestion.Context );

	// fixing the input array-ish as rating, solve the ID on backend
	const { inputProps } = useField( {
		name: `q_${ parentQuestion.clientId }[rating]`,
		type: 'radio',
		value: attributes.clientId,
	} );

	const classes = classnames(
		'crowdsignal-forms-rating-scale-answer-block',
		className,
		{
			'is-selected': inputProps.checked,
		}
	);

	if ( ! attributes.label ) {
		return null;
	}

	return (
		<ButtonAnswer
			attributes={ attributes }
			className={ classes }
			inputProps={ inputProps }
			isMultiSelect={ false }
		/>
	);
};

export default RatingScaleAnswer;
