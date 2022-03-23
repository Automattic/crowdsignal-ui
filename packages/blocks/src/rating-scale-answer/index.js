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
import { getBlockStyle } from '../util';

const RatingScaleAnswer = ( { attributes, className } ) => {
	const parentQuestion = useContext( RatingScaleQuestion.Context );

	// fixing the input array-ish as rating, solve the ID on backend
	const { inputProps } = useField( {
		name: `q_${ parentQuestion.clientId }[rating]`,
		type: 'radio',
		value: attributes.clientId,
	} );

	const blockStyle = getBlockStyle( parentQuestion.className );

	const classes = classnames(
		'crowdsignal-forms-rating-scale-answer-block',
		className,
		{
			'is-selected': inputProps.checked,
			'is-style-emoji': blockStyle === RatingScaleQuestion.Style.EMOJI,
			'is-style-text': blockStyle === RatingScaleQuestion.Style.TEXT,
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
